'use strict';


/*
 *************************************
 * 引入依赖模块
 *************************************
 */
const
    argv = require('./utils/argv'),
    rules = ['sass', 'repo'];


/*
 *************************************
 * 输出打包配置
 *************************************
 */
module.exports = (() => {

    // 查找是否存在打包配置文件
    for (let rule of rules) {
        if (rule in argv) {
            return require('./webpack/${rule}.config.js')(argv._);
        }
    }

    // 找不到配置文件时直接退出
    process.exit();
})();


