'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
// import './index.scss';
import widgets from './widgets';


/*
 ************************************
 * 抛出【App Aside】模块
 ************************************
 */
export default {
    render: function (createElement) {
        return createElement(widgets[this.data.name], this.data);
    },
    props: {
        data: Object
    },
    methods: {

    }
};
