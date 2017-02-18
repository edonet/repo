'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';


/*
 ************************************
 * 定义【EditorProperty】类
 ************************************
 */
class EditorProperty {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.el = document.createElement('div');
        this.el.classList.add('meditor-property');
        this.wrapper.appendChild(this.el);
    }
}



/*
 ************************************
 * 抛出【EditorProperty】接口
 ************************************
 */
export default EditorProperty;
