'use strict';

/*
 *********************************
 * 引入【AppServer】模块
 *********************************
 */
const
    AppServer = require('./src/app');


/*
 *********************************
 * 抛出【AppServer】接口
 *********************************
 */
module.exports = dir => new AppServer(dir);
