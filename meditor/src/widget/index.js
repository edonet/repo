'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';


/*
 ************************************
 * 定义【EditorWidget】类
 ************************************
 */
class EditorWidget {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.el = document.createElement('div');
        this.el.classList.add('meditor-widget');
        this.wrapper.appendChild(this.el);
    }
}



/*
 ************************************
 * 抛出【EditorWidget】接口
 ************************************
 */
export default EditorWidget;
