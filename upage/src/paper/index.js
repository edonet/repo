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
 * 抛出【App Paper】接口
 ************************************
 */
export default {
    template,
    props: {
        paper: Object
    },
    computed: {
        style: function () {
            return {
                width: this.paper.size.width + this.paper.unit,
                height: this.paper.size.height ? this.paper.size.height + this.paper.unit : 'auto'
            };
        }
    }
};
