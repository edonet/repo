'use strict';

const
    utils = require('../src/utils'),
    app = require('../index')(__dirname);

console.log(app);
console.log(utils.isString('value'));
