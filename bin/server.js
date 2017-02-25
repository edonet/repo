#!/usr/bin/env node

'use strict';


/*
 ***************************************
 * 加载依赖模块
 ***************************************
 */
const
    dir = process.argv[2] || process.cwd(),
    server = require('../server');


/*
 ***************************************
 * 启动服务器
 ***************************************
 */
module.exports = server(dir).listen(8088);
