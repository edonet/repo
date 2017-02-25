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
 * 抛出【EditorHeader】接口
 ************************************
 */
export default {
    template,
    props: {
        filename: String
    }
};
