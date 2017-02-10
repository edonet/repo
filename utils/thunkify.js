'use strict';

/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    utils = require('./index');


/*
 *********************************
 * 定义遍历器解析函数
 *********************************
 */
function resolveGenerator(gen) {
    return (resolve, reject) => (function next(data) {
        let result = gen.next(data),
            value = result.value;

        // 遍历器完成时返回
        if (result.done) {
            return resolve(value);
        }

        // 处理遍历器返回的【Promise】对象
        if (value instanceof Promise) {
            return value.then(next, reject).catch(reject);
        }

        // 处理遍历器返回回调函数
        if (utils.isFunction(value)) {
            return value((err, data) => err ? reject(err) : next(data));
        }

        // 处理遍历器返回为对象
        return next(value);
    })();
}


/*
 *********************************
 * 抛出工具方法
 *********************************
 */
module.exports = handler => (...args) => {

    // 解析迭代生成器
    if (utils.isFunction(handler)) {
        return (gen => new Promise(
            utils.isIterator(gen) ? resolveGenerator(gen) : resolve => resolve(gen)
        ))(handler(...args));
    }

    // 解析可迭代对象
    if (utils.isIterator(handler)) {
        return new Promise(resolveGenerator(handler));
    }

    // 直接返回参数
    return new Promise(resolve => resolve(...args));
};
