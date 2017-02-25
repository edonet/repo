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
    symlink = require('../utils/symlink'),
    cwd = process.cwd(),
    args = process.argv.slice(2),
    src = path.resolve(cwd, args[0]),
    dist = path.resolve(cwd, args[1]),
    filter = /\.DS_Store/i,
    exec = (srcdir, distdir) => {
        return symlink(srcdir, distdir)
            .then(() => console.log(`==> ${srcdir} : ${distdir}`))
            .catch(err => console.error(err));
    };


/*
 ***************************************
 * 遍历并打包文件
 ***************************************
 */
fs.readdir(src, (err, files) => {
    if (err) {
        return console.error(err);
    }

    for (let file of files) {
        filter.test(file) || exec(path.resolve(src, file), path.resolve(dist, file));
    }
});
