'use strict';


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
    isIterator: argv => argv && typeof argv === 'object' && Symbol.iterator in argv
};
