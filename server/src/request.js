'use strict';

/*
 *********************************
 * 引入依赖模块
 *********************************
 */
const
    url = require('url'),
    qs = require('querystring');


/*
 *********************************
 * 定义【AppRequest】类
 *********************************
 */
class AppRequest {

    /* 初始化对象 */
    constructor(clientRequest) {
        this.request = clientRequest;
        this.url = url.parse(clientRequest.url);
        this.method = clientRequest.method.toLowerCase();
        this.path = this.url.pathname;
        this.headers = clientRequest.headers;

        if (this.method === 'get') {

            /* 获取【GET】参数 */
            this.param = qs.parse(this.url.query);

        } else {

            /* 获取【POST】参数 */
            this.param = '';

            /* 监听数据传输事件 */
            this.request.on('data', chunk => {
                this.param += chunk;
            });

            /* 监听数据传输完成事件 */
            this.request.on('end', () => {
                this.param = qs.parse(this.param);
            });
        }
    }

    /* 获取头部信息 */
    getHeader(name) {
        return this.header[name] || '';
    }

    /* 初始化完成回调 */
    ready(handler) {
        this.request.on('end', handler);
        return this;
    }
}


/*
 *********************************
 * 抛出【AppRequest】接口
 *********************************
 */
module.exports = AppRequest;
