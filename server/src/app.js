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
    appServerSymbol = Symbol('app server'),
    appDirnameSymbol = Symbol('app dirname');


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
        this[appDirnameSymbol] = utils.resolveDir(this.dir);
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
    route(router, target) {

        // 添加路由配置文件
        if (utils.isString(router)) {
            return this.route(require(router), this[appDirnameSymbol](router, target));
        }

        // 添加路由配置函数
        if (utils.isFunction(router)) {
            return this.route(router(), target);
        }

        // 添加路由配置列表
        if (utils.isArray(router)) {
            router.forEach(v => this.router(v, target));
            return this;
        }

        // 添加单个路由
        if (utils.isObject(router) && utils.isFunction(router.handler)) {
            this[appRouterSymbol].add({
                url: router.url,
                method: router.method,
                dirname: this[appDirnameSymbol](router.dirname, target),
                handler: router.handler
            });
        }

        return this;
    }

    /* 添加【GET】路由 */
    get(url, handler) {

        if (utils.isFunction(handler)) {
            this[appRouterSymbol].add({
                url, method: 'get', dirname: this.dir, handler
            });
        } else if (utils.isObject(handler) && utils.isFunction(handler.handler)) {
            this[appRouterSymbol].add({
                url,
                method: 'get',
                dirname: this[appDirnameSymbol](handler.dirname),
                handler: handler.handler
            });
        }

        return this;
    }

    /* 添加【POST】路由 */
    post(url, handler) {

        if (utils.isFunction(handler)) {
            this[appRouterSymbol].add({
                url, method: 'post', dirname: this.dir, handler
            });
        } else if (utils.isObject(handler) && utils.isFunction(handler.handler)) {
            this[appRouterSymbol].add({
                url,
                method: 'post',
                dirname: this[appDirnameSymbol](handler.dirname),
                handler: handler.handler
            });
        }

        return this;
    }

    /* 设置静态资源 */
    assets(dir, options) {
        utils.isString(dir) && this[appRouterSymbol].assets(dir, options);
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
