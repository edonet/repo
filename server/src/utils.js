'use strict';



/*
 *********************************
 * 加载依赖模块
 *********************************
 */
const
    path = require('path');

/*
 *********************************
 * 抛出工具方法
 *********************************
 */
module.exports = {
    isString: argv => typeof argv === 'string',
    isNumber: argv => typeof argv === 'number' && !isNaN(argv),
    isFunction: argv => typeof argv === 'function',
    isArray: argv => Array.isArray(argv),
    isObject: argv => argv && typeof argv === 'object' && !Array.isArray(argv),
    resolveDir: rootDir => (dir, target = rootDir) => {
        return this.isString(dir) ? path
            .resolve(dir[0] === '/' ? rootDir : target, dir)
            .replace(/\/\w+\.\w+$/, '/') : target;
    }
};
