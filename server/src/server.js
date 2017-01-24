'use strict';

/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    http = require('http'),
    utils = require('./utils'),
    AppRequest = require('./request'),
    AppResponse = require('./response');

/*
 *********************************
 * 定义【AppServer】类
 *********************************
 */
class AppServer {

    /* 初始化对象 */
    constructor(router) {
        this.router = router;
        this.responseStatus = {};
        this.server = http.createServer((req, res) => {
            this.resolve(new AppRequest(req), new AppResponse(res));
        });
    }

    /* 初始化完成回调 */
    ready(handler) {
        utils.isFunction(handler) && handler(this.server);
        return this;
    }

    /* 设置返回状态回调 */
    state(code, callback) {

        // 添加状态回调
        if (utils.isNumber(code) && utils.isFunction(callback)) {
            this.responseStatus[code] = (req, res) => () => callback(req, res);
        }

        return this;
    }

    /* 解析请求 */
    resolve(request, response) {
        let status = this.responseStatus,
            statusCodes = Object.keys(status);

        // 添加字定义状态返回回调
        for (let code of statusCodes) {
            response.responseStatus[code] = status[code](request, response);
        }

        // 监听请求初始化完成
        request.ready(() => {
            this.router.invoke(request, response);
        });
    }

    /* 监听端口 */
    listen(port, callback) {
        this.router.resolve();
        this.server.listen(port, callback);
        return this;
    }
}


/*
 *********************************
 * 抛出【AppServer】接口
 *********************************
 */
module.exports = AppServer;
