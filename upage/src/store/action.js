'use strict';


/*
 ************************************
 * 载入【App State】对象
 ************************************
 */
import state from './state';


/*
 ************************************
 * 定义【App Action】对象
 ************************************
 */
export default {
    updatePaperSize: function (data) {
        state.paper.size = data;
    }
};
