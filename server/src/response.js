'use strict';


/*
 *********************************
 * 定义【AppResponse】类
 *********************************
 */
const
    fs = require('fs'),
    path = require('path'),
    zlib = require('zlib'),
    mime = require('./mime'),
    utils = require('./utils'),
    Through = require('./through');


/*
 *********************************
 * 定义【AppResponse】类
 *********************************
 */
class AppResponse {
    constructor(serverResponse) {
        this.finished = false;
        this.context = process.cwd();
        this.response = serverResponse;
        this.responseStatus = {};
    }

    /* 获取、设置头部信息 */
    header(name, value) {

        // 指设置头部信息
        if (utils.isObject(name)) {
            let keys = Object.keys(name);

            for (let key of keys) {
                this.reponse.setHeader(key, name[key]);
            }

            return this;
        }

        if (utils.isString(name)) {

            // 获取头部信息
            if (value === undefined) {
                return this.reponse.getHeader(name);
            }

            // 设置头部信息
            this.reponse.setHeader(name, value);
        }

        return this;
    }

    /* 设置头部信息 */
    setHeader(name, value) {
        this.response.setHeader(name, value);
        return this;
    }

    /* 获取头部信息 */
    getHeader(name) {
        return this.response.getHeader(name);
    }

    /* 移除头部信息 */
    removeHeader(name) {
        this.response.removeHeader(name);
        return this;
    }

    /* 添加追踪信息 */
    addTrailers(headers) {
        this.response.addTrailers(headers);
        return this;
    }

    /* 设置返回状态 */
    state(code, message) {

        // 执行自定义状态回调
        if (!this.finished && code in this.responseStatus) {
            this.responseStatus[code]();
        }

        // 执行默认状态回调
        return this.ready(res => {

            switch (code) {
                case 200:
                    res.writeHead(200, message || 'Ok');
                    break;
                case 304:
                    res.writeHead(304, message || 'Not modified');
                    break;
                case 404:
                    res.writeHead(404, message || 'Not found');
                    break;
                case 500:
                    res.writeHead(500, message || 'Unknow Error');
                    break;
                default:
                    res.writeHead(code, message);
                    break;
            }

            res.end();
            this.finished = true;
        });
    }

    /* 执行初始化完成回调 */
    ready(handler) {
        this.finished || handler(this.response);
        return this;
    }

    /* 写入返回数据 */
    write(...args) {
        this.finished || this.response.write(...args);
        return this;
    }

    /* 结束返回数据 */
    end(...args) {
        return this.ready(res => {
            res.end(...args);
            this.finished = true;
        });
    }

    /* 返回数据 */
    send(...args) {
        return this.ready(() => {
            let data = args[0];

            // 返回对象
            if (utils.isObject(data)) {
                return this.sendData(...args);
            }

            // 返回数据流
            if (data instanceof fs.ReadStream) {
                return this.sendStream(...args);
            }

            // 返回文件
            if (utils.isString(data)) {
                return /^(\.|\/|[a-zA-z]\:)/.test(data) ?
                    this.sendFile(...args) : this.end(...args);
            }

            // 返回【500】错误
            this.state(500, '返回数据格式错误');
        });
    }

    /* 返回对象数据 */
    sendData(data, encoding, callback) {
        return this.ready(res => {
            if (!utils.isString(data)) {
                data = JSON.stringify(data);
            }

            this.finished = true;
            res.writeHead(200, 'Ok', {'Content-Type': 'application/json'});
            res.end(data, encoding, callback);
        });
    }

    /* 返回文件 */
    sendFile(file, options) {
        return new Promise((resolve, reject) => {
            this.ready(res => {

                // 解析文件所在路径
                file = path.resolve(this.context, file);

                // 判断文件是否存在
                fs.stat(file, (err, stats) => {

                    // 文件不存在时，返回【500】错误
                    if (err || !stats.isFile()) {
                        return reject(this.state(404));
                    }

                    // 获取文件扩展名
                    let ext = path.extname(file).slice(1).toLowerCase();

                    // 设置Content Type
                    res.setHeader('Content-Type', mime[ext] || 'text/plain');

                    // 返回文件内容
                    resolve(this.sendStream(fs.createReadStream(file), options));
                });
            });
        });
    }

    /* 返回数据流 */
    sendStream(readStream, options) {
        return this.ready(res => {

            // 设置完成标识
            this.finished = true;

            // 校验处理函数
            if (utils.isFunction(options)) {
                res.writeHead(200, 'Ok');
                return readStream.pipe(new Through(options)).pipe(res);
            }

            // 判断是否有处理配置
            if (utils.isObject(options)) {

                // 校验处理函数
                if (utils.isFunction(options.filter)) {
                    readStream = readStream.pipe(new Through(options.filter));
                }

                if (options.zip) {

                    // 启用【gzip】压缩
                    if (options.zip.match(/\bgzip\b/)) {
                        res.writeHead(200, 'Ok', {'Content-Encoding': 'gzip'});
                        return readStream.pipe(zlib.createGzip()).pipe(res);
                    }

                    // 启用【deflate】压缩
                    if (options.zip.match(/\bdeflate\b/)) {
                        res.writeHead(200, 'Ok', {'Content-Encoding': 'deflate'});
                        return readStream.pipe(zlib.createDeflate()).pipe(res);
                    }
                }
            }

            // 返回数据
            res.writeHead(200, 'Ok');
            readStream.pipe(res);
        });
    }

    /* 设置超时 */
    setTimeout(msecs, callback) {
        this.response.setTimeout(msecs, callback);
        return this;
    }

    /* 添加监听事件 */
    on(...args) {
        this.response.on(...args);
        return this;
    }
}


/*
 *********************************
 * 抛出【AppResponse】接口
 *********************************
 */
module.exports = AppResponse;
