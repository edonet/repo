'use strict';


/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    utils = require('./utils'),
    AppRouter = require('./router'),
    AppServer = require('./server'),
    appRouterSymbol = Symbol('app router'),
    appServerSymbol = Symbol('app server');


/*
 *********************************
 * 定义【App】类
 *********************************
 */
class App {

    /* 初始化对象 */
    constructor(dir) {
        this.dir = dir || process.cwd();
        this[appRouterSymbol] = new AppRouter(this.dir);
        this[appServerSymbol] = new AppServer(this[appRouterSymbol]);
    }

    /* 初始化完成方法 */
    ready(handler) {
        this[appServerSymbol].ready(handler);
        return this;
    }

    /* 设置返回状态 */
    state(code, callback) {
        this[appServerSymbol].setState(code, callback);
        return this;
    }

    /* 添加中间件 */
    use(method, handler) {

        // 必须包含路由处理方法
        if (utils.isFunction(method)) {
            this[appRouterSymbol].use({ dirname: this.dir, handler: method });
        } else if (utils.isFunction(handler)) {
            this[appRouterSymbol].use({ dirname: this.dir, handler, method });
        }

        return this;
    }

    /* 添加路由 */
    route(url, options) {
        return this;
    }

    /* 设置允许的请求来源 */
    allow(origin, method) {
        return this.use((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', origin || '*');
            res.setHeader('Access-Control-Allow-Methods', method || 'POST, GET');
        });
    }

    /* 监听服务端口 */
    listen(port = 8088, callback = undefined) {
        this[appServerSymbol].listen(port, callback || (err => {

            if (err) {
                return console.log(err);
            }

            console.log('');
            console.log('*************************************************');
            console.log('Listening at localhost: ' + port);
            console.log('Opening your system browser...');
            console.log('*************************************************');
            console.log('');

        }));
        return this;
    }
}


/*
 *********************************
 * 抛出【App】接口
 *********************************
 */
module.exports = App;
