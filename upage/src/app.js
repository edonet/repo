'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './common/base.scss';
import './components';
import store from './store';
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
    data: () => store,
    components: {
        appHeader, appAside, appPaper, appProperty
    }
};
