'use strict';


/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    assets = require('./assets'),
    thunkify = require('./thunkify');


/*
 *********************************
 * 抛出【AppRouter】类
 *********************************
 */
class AppRouter {

    /* 初始化路由 */
    constructor(dir, options) {
        this.dir = dir;
        this.options = options;
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

    /* 添加中间件 */
    use(options) {
        this.middlewave.push(options);
        return this;
    }

    /* 设置静态资源目录 */
    assets(dir, options) {
        this.dir = dir;
        this.options = options;
        return this;
    }

    /* 解析路由 */
    resolve() {
        let router = this.router,
            routerKeys = Object.keys(router),
            resolveMap = {},
            staticAssets;

        // 设置静态资源路由
        staticAssets = queue(assets(this.dir, this.options), (req, res) => res.state(404));

        // 生成路由执行方法
        for (let key of routerKeys) {
            resolveMap[key] = queue(router[key], staticAssets);
        }

        // 设置执行方法
        this.invoke = queue(this.middlewave, (req, res) => {
            req.path in resolveMap ? resolveMap[req.path](req, res) : staticAssets(req, res);
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
            if (res.finished) {
                return true;
            }

            // 请求方式不匹配时直接下一步
            if (curr.method && curr.method !== req.method) {
                return next();
            }

            // 执行路由处理函数
            res.context = curr.dirname;
            return thunkify(() => curr.handler(req, res))(next);
        }, cb)() : cb();
    };
}


/*
 *********************************
 * 抛出【AppRouter】接口
 *********************************
 */
module.exports = AppRouter;
