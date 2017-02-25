'use strict';


/*
 ***************************************
 * 加载依赖模块
 ***************************************
 */
const
    fs = require('fs');


function rmdir(dir) {
    return new Promise((resolve, reject) => {
        fs.lstat(dir, (err, stats) => {

            // 获取目录信息失败
            if (err) {
                return resolve();
            }

            // 不能移除文件夹
            if (stats.isDirectory()) {
                return fs.rmdir(dir, err => err ? reject(err) : resolve());
            }

            // 移除文件
            fs.unlink(dir, err => err ? reject(err) : resolve());
        });
    });
}

/*
 ***************************************
 * 抛出接口
 ***************************************
 */
module.exports = rmdir;
