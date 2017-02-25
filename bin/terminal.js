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
    cwd = process.argv.slice(2)[0] || process.cwd(),
    sh = path.resolve(__dirname, 'terminal.sh');


cp.exec(`source ${sh}`, { cwd }, (err, stdout, stderr) => {
    if (err) {
        return console.error(err);
    }

    stdout && console.log(stdout);
    stderr && console.log(stderr);
});
