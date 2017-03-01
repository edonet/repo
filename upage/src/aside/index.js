'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';
import template from './index.html';


/*
 ************************************
 * 抛出【App Aside】模块
 ************************************
 */
export default {
    template,
    props: {
        toolbar: Array
    },
    methods: {
        drag: function (e, data) {
            console.log(e);
            e.dataTransfer.setData('text', data);
        }
    }
};
