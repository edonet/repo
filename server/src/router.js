'use strict';


/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    assets = require('./assets');


/*
 *********************************
 * 抛出【AppRouter】类
 *********************************
 */
class AppRouter {

    /* 初始化路由 */
    constructor(dir) {
        this.dir = dir;
        this.middlewave = [];
        this.router = {};
    }

    /* 添加路由 */
    add(options) {
        if (options.url in this.router) {
            this.router[options.url].push({options});
        } else {
            this.router[options.url] = [options];
        }

        return this;
    }

    /* 解析路由 */
    resolve() {
        let router = this.router,
            routerKeys = Object.keys(router),
            resolveMap = {},
            staticAssets;

        // 设置静态资源路由
        staticAssets = queue(assets(this.dir), (req, res) => res.state(404));

        // 生成路由执行方法
        for (let key of routerKeys) {
            resolveMap[key] = queue(router[key], staticAssets);
        }

        // 设置执行方法
        this.invoke = queue(this.middlewave, (req, res) => {
            req.path in resolveMap ? resolveMap[req.path](req, res) : staticAssets;
        });

        return this.invoke;
    }
}


/*
 *********************************
 * 定义工具方法
 *********************************
 */
function queue(arr, callback) {

    // 返回队列函数
    return (req, res) => {

        // 设置回调函数
        let cb = () => callback(req, res);

        // 执行队列
        arr && arr.length ? arr.reduceRight((next, curr) => () => {

            // 返回已经完成
            if (res.isfinished) {
                return true;
            }

            // 请求方式不匹配时直接下一步
            if (curr.method && curr.method !== req.method) {
                return next();
            }

            let handler = curr.handler;

            res.dirname = curr.dirname;
            return handler.length > 2 ?
                handler(req, res, next) : next(handler(req, res));

        }, cb)() : cb();
    };
}


/*
 *********************************
 * 抛出【AppRouter】接口
 *********************************
 */
module.exports = AppRouter;
