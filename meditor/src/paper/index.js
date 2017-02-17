'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';


/*
 ************************************
 * 定义【EditorPaper】类
 ************************************
 */
class EditorPaper {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.el = document.createElement('div');
        this.el.classList.add('meditor-wrapper');
        this.paper = document.createElement('div');
        this.paper.classList.add('meditor-paper');
        this.el.appendChild(this.paper);
        this.wrapper.appendChild(this.el);
    }
}



/*
 ************************************
 * 抛出【EditorPaper】接口
 ************************************
 */
export default EditorPaper;
