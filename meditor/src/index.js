'use strict';

/*
 *******************************************
 * 加载编辑器
 *******************************************
 */
const
    Editor = require('./editor'),
    mEditor = new Editor('wrapper', {
        name: '测试模板',
        data: {
            room: '房产',
            date: '日期',
        }
    });


/*
 *******************************************
 * 监听编辑器事件
 *******************************************
 */
mEditor
    .on('exit', () => window.close())
    .on('save', code => console.log(code));
