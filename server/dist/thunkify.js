'use strict';

const
    thunkify = require('../src/thunkify');


function fun1() {
    console.log('==> 01 start....');
    setTimeout(() => {
        console.log('==> 01 timeout');
    }, 1000);
    console.log('==> 01 finish....');
}

function* fun2() {
    console.log('==> 02 start....');

    let res = yield callback => setTimeout(() => {
        callback(null, '==> 02 timeout');
    }, 1000);

    console.log(res);
    console.log('==> 02 finish....');
}

function* fun3() {
    console.log('==> 03 start....');

    let res = yield new Promise(resolve => setTimeout(() => {
        resolve('==> 03 timeout');
    }, 1000));

    console.log(res);
    console.log('==> 03 finish....');
    return '==> thunkify timeout';
}

function fun4(msg) {
    console.log(msg);
}

console.log('==> thunkify start...');
thunkify(fun1)(() => {
    thunkify(fun2)(() => {
        thunkify(fun3)(fun4);
    });
});
console.log('==> thunkify finish...');


