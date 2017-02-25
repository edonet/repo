'use strict';


/*
 ***************************************
 * 加载依赖模块
 ***************************************
 */
const
    fs = require('fs'),
    rmdir = require('./rmdir');


/*
 ***************************************
 * 抛出接口
 ***************************************
 */
module.exports = (src, dist) => {
    return rmdir(dist)
        .then(() => {
            return new Promise((resolve, reject) => {
                fs.symlink(src, dist, err => err ? reject(err) : resolve());
            });
        });
};
