'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './common/base.scss';
import utils from 'utils';
import EventEmitter from 'utils/events';
import EditorHeader from './header';
import EditorPaper from './paper';
import EditorWidget from './widget';
import EditorProperty from './property';


/*
 ************************************
 * 定义【Editor】类
 ************************************
 */
class Editor extends EventEmitter {
    constructor(id, options) {
        super();
        this.wrapper = utils.isString(id) ? document.getElementById(id) : id;
        this.wrapper.classList.add('meditor-container');
        this.header = new EditorHeader(this.wrapper);
        this.paper = new EditorPaper(this.wrapper);
        this.widget = new EditorWidget(this.wrapper);
        this.property = new EditorProperty(this.wrapper);
    }
}



/*
 ************************************
 * 定义【Editor】接口
 ************************************
 */
export default Editor;
