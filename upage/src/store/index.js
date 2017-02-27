'use strict';

import Vue from '../vue';
import state from './state';
import action from './action';


/*
 ***************************
 * 定义事件收发器
 ***************************
 */
const vm = new Vue();


// 定义事件接收处理
vm.$on('updateAppState', function ({name = '', data = null}) {
    return name in action && action[name](data);
});

// 定义事件发送接口
function dispatch(name, data) {
    vm.$emit('updateAppState', { name, data });
}


/*
 ***************************
 * 输出【App State】对象
 ***************************
 */
export { dispatch };
export default state;
