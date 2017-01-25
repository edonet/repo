'use strict';

/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    utils = require('./utils');

/*
 *********************************
 * 抛出工具方法
 *********************************
 */
module.exports = handler => callback => {

    // 获取控制器
    let gen = utils.isFunction(handler) ? handler() : handler;

    // 遍历控制器
    gen && Symbol.iterator in gen ? (function next(data) {
        let result = gen.next(data),
            value = result.value;

        // 遍历器完成时返回
        if (result.done) {
            return callback(value);
        }

        // 处理遍历器返回的【Promise】对象
        if (value instanceof Promise) {
            return value.then(next).catch(() => next(null));
        }

        // 处理遍历器返回回调函数
        if (utils.isFunction(value)) {
            return value((err, data) => next(err ? null : data));
        }

        // 处理遍历器返回为对象
        return next(value);
    })() : callback(gen);
};
