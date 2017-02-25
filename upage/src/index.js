'use strict';

/*
 ***************************
 * 加载依赖模块
 ***************************
 */
import 'babel-polyfill/dist/polyfill';
import Vue from './vue';
import app from './app';


/*
 ***************************
 * 输出App实例
 ***************************
 */
export default new Vue({
    el: '#app',
    components: { app }
});
