'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './common/base.scss';
import template from './app.html';
import appHeader from './header';
import appAside from './aside';
import appPaper from './paper';
import appProperty from './property';


/*
 ************************************
 * 输出【App】页面组件
 ************************************
 */
export default {
    template,
    data: () => ({
        filename: '未命名文件'
    }),
    components: {
        appHeader, appAside, appPaper, appProperty
    }
};
