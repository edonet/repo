'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import 'babel-polyfill';
import './editor.scss';
import utils from 'utils';
import EventEmitter from 'utils/events';


/*
 ************************************
 * 定义【Editor】类
 ************************************
 */
class Editor extends EventEmitter {
    constructor(id, options) {
        super();
        this.wrapper = utils.isString(id) ? document.getElementById(id) : id;
    }
}


/*
 ************************************
 * 定义【Editor】接口
 ************************************
 */
export default Editor;
