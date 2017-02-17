'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';


/*
 ************************************
 * 定义【EditorHeader】类
 ************************************
 */
class EditorHeader {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.el = document.createElement('div');
        this.el.classList.add('meditor-header');
        this.wrapper.appendChild(this.el);
    }
}



/*
 ************************************
 * 抛出【EditorHeader】接口
 ************************************
 */
export default EditorHeader;
