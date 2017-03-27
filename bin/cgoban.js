#!/usr/bin/env node

'use strict';


/*
 ***************************************
 * 加载依赖模块
 ***************************************
 */
const
    path = require('path'),
    cp = require('child_process'),
    jar = path.resolve(__dirname, 'cgoban.jar');


/* 启用程序 */
cp.exec(

    // 配置执行命令
    `java -jar ${jar}`,

    // 配置选项
    { cwd: path.dirname(__dirname) },

    // 配置回调方法
    (err, stdout, stderr) => {

        // 输出错误
        if (err) {
            return console.error(err);
        }

        // 输出执行信息
        stdout && console.log(stdout);
        stderr && console.error(stderr);
    }
);
