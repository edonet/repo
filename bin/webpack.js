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
    argv = require('../utils/argv'),
    regexp = /\.config\.js$/;


// 判断并运行打包文件
if (argv.config && regexp.test(argv.config)) {

    let cmd = `webpack --config=${argv.config}`,
        dir = path.dirname(__dirname),
        split = '='.repeat(cmd.length + 20),
        options = {
            shell: true, cwd: dir
        };

    // 打印命令信息
    console.log(split);
    console.log(`==> [dir]: '${dir}'`);
    console.log(`==> [cmd]: '${cmd}'`);
    console.log(split);

    // 执行打包命令
    cp.exec(cmd, options, (err, stdout, stderr) => {
        if (err) {
            return console.error(err);
        }

        stdout && console.log(stdout);
        stderr && console.log(stderr);
    });
}
