'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';
import template from './index.html';
import { dispatch } from '../store';


/*
 ************************************
 * 抛出【EditorHeader】接口
 ************************************
 */
export default {
    template,
    props: {
        paper: Object,
        filename: String
    },
    methods: {
        updateSize: function (name, e) {

            // 通过 input 事件发出数值
            dispatch(
                'updatePaperSize',
                Object.assign({}, this.paper.size, { [name]: parseInt(e.target.value) || 0 })
            );
        }
    }
};
