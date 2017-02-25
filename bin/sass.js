#!/usr/bin/env node

'use strict';


/*
 ***************************************
 * 加载依赖模块
 ***************************************
 */
const
    fs = require('fs'),
    path = require('path'),
    cp = require('child_process'),
    argv = process.argv.slice(2),
    regexp = /(\.scss|\.sass)$/,
    options = { cwd: path.dirname(__dirname) },
    callback = (err, stdout, stderr) => {
        return err ? console.error(err) : console.log(stdout, stderr);
    };

/*
 ***************************************
 * 遍历并打包文件
 ***************************************
 */
argv.forEach(file => regexp.test(file) && fs.stat(file, (err, stats) => {

    // 发生错误时退出
    if (err) {
        return console.error(err);
    }

    // 执行文件打包
    cp.exec(`gulp --gulpfile=./webpack/sass.config.js --entry=${path.resolve(file)}`, options, callback);
}));

