'use strict';

/*
 *****************************
 * 加载依赖模块
 *****************************
 */
const
    fs = require('fs'),
    stream = require('stream'),
    utils = require('./index'),
    thunkify = require('./thunkify'),
    readStreamSymbol = Symbol('Transfer read stream');


/*
 *****************************
 * 定义转换流【Through】类
 *****************************
 */
class Through extends stream.Transform {
    constructor(handler) {
        super();

        this.handler = thunkify(handler);
        this._readableState.objectMode = false;
        this._writableState.objectMode = true;
    }

    /* 重写【_transform】方法 */
    _transform(chunk, encoding, callback) {

        // 转换数据内容
        this.handler(chunk.toString()).then(data => {
            data && this.push(data);
            callback();
        }).catch(err => console.error(err));
    }
}


/*
 *****************************
 * 定义【Transfer】类
 *****************************
 */
class Transfer {
    constructor(path, options) {
        this[readStreamSymbol] =
            path instanceof stream.Readable ? path : fs.createReadStream(path, options);
    }

    /* 传输数据流 */
    pipe(dist, options) {

        // 输出到文件
        if (utils.isString(dist)) {
            this[readStreamSymbol].pipe(fs.createWriteStream(dist, options));
            return this;
        }

        // 转换输入流
        if (utils.isFunction(dist)) {
            return new Transfer(this[readStreamSymbol].pipe(new Through(dist)));
        }

        // 输出到写入流
        if (dist instanceof stream.Writable) {
            this[readStreamSymbol].pipe(dist);
            return this;
        }

        return this;
    }
}


/*
 *****************************
 * 抛出接口
 *****************************
 */
module.exports = Transfer;
