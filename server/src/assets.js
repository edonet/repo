'use strict';


/*
 *****************************
 * 载入依赖模块
 *****************************
 */

const
    fs = require('fs'),
    path = require('path'),
    mime = require('./mime');


/*
 *****************************
 * 定义工具方法
 *****************************
 */

// 解析请求
function parseRequest(dir) {

    // 返回请求处理方法
    return function* (req, res) {
        let url = req.path.slice(1) || 'index.html',
            ext, stats;


        // 获取文件路径
        url = url.replace(/\/$/, '/index.html');
        url = path.resolve(dir, url.replace(/\.\./g, ''));

        // 获取文件扩展名
        ext = path.extname(url).slice(1).toLowerCase();

        // 获取文件状态
        stats = yield callback => fs.stat(url, callback);

        if (!stats || !stats.isFile()) {
            return res.state(404);
        }

        let lastModified = stats.mtime.toUTCString(),
            ifModifiedSince = req.headers['if-modified-since'];

        // 设置最后修改时间
        res.setHeader('Last-Modified', lastModified);

        // 设置Content Type
        res.setHeader('Content-Type', mime[ext] || 'text/plain');

        // 判断是否已经修改过并返回
        if (ifModifiedSince && lastModified === ifModifiedSince) {
            return res.state(304);
        }

        // 保存文件属性
        req.filepath = url;
        req.extension = ext;
    };
}

// 设置请求超时时间
function setRequestExpires(cacheType, maxAge) {

    // 返回请求处理方法
    return (req, res) => {
        if (cacheType.test(req.extension)) {
            let expires = new Date();

            // 设置缓存时间
            expires.setTime(expires.getTime() + maxAge);
            res.setHeader('Expires', expires.toUTCString());
            res.setHeader('Cache-Control', 'max-age=' + maxAge);
        }
    };
}

// 压缩返回内容
function zlibResponse(zlibType) {

    // 返回请求处理方法
    return (req, res) => {
        let stream = fs.createReadStream(req.filepath),
            options = null;

        // 检测是否需要压缩
        if (zlibType.test(req.extension)) {
            options = { zip: req.headers['accept-encoding'] || ''};
        }

        // 返回数据流
        res.sendStream(stream, options);
    };
}


/*
 *****************************
 * 抛出接口
 *****************************
 */
module.exports = (dir, options = {}) => {
    let {
            maxAge = 31536000000,
            zlibType = /^(css|js|html)$/g,
            cacheType = /^(gif|png|jpg|js|css|svg)$/g
        } = options;

    return [
        { method: 'get', dirname: dir, handler: parseRequest(dir) },
        { method: 'get', dirname: dir, handler: setRequestExpires(cacheType, maxAge) },
        { method: 'get', dirname: dir, handler: zlibResponse(zlibType) }
    ];
};
