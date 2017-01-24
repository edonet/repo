'use strict';


/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    symbol = require('./symbol'),
    AppRouter = require('./router'),
    AppServer = require('./server');


/*
 *********************************
 * 定义【App】类
 *********************************
 */
class App {

    /* 初始化对象 */
    constructor(dir) {
        this[symbol.appRouter] = new AppRouter(dir);
        this[symbol.appServer] = new AppServer(this[symbol.appRouter]);
    }

    /* 初始化完成方法 */
    ready(handler) {
        this[symbol.appServer].ready(handler);
        return this;
    }

    /* 设置返回状态 */
    state(code, callback) {
        this[symbol.appServer].setState(code, callback);
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
    listen(port, callback) {
        this[symbol.appServer].listen(port || 8088, callback || (err => {

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
