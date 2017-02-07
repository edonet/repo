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
        this.readyQueue = [];
        this.isReady = false;

        if (this.method === 'get') {

            /* 获取【GET】参数 */
            this.params = qs.parse(this.url.query);
            this.readyQueue.forEach(v => v());
            this.readyQueue = null;
            this.isReady = true;

        } else {

            /* 获取【POST】参数 */
            this.params = '';

            /* 监听数据传输事件 */
            this.request.on('data', chunk => {
                this.params += chunk;
            });

            /* 监听数据传输完成事件 */
            this.request.on('end', () => {
                this.params = qs.parse(this.param);
                this.readyQueue.forEach(v => v());
                this.readyQueue = null;
                this.isReady = true;
            });
        }
    }

    /* 获取头部信息 */
    getHeader(name) {
        return this.header[name] || '';
    }

    /* 初始化完成回调 */
    ready(handler) {
        this.isReady ? handler() : this.readyQueue.push(handler);
        return this;
    }
}


/*
 *********************************
 * 抛出【AppRequest】接口
 *********************************
 */
module.exports = AppRequest;
