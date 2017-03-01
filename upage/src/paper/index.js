'use strict';


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
import './index.scss';
import { dispatch } from '../store';
import template from './index.html';
import widget from '../widget';


/*
 ************************************
 * 抛出【App Paper】接口
 ************************************
 */
export default {
    template,
    props: {
        paper: Object
    },
    computed: {
        size: function () {
            return {
                width: this.paper.size.width + this.paper.unit,
                height: this.paper.size.height ? this.paper.size.height + this.paper.unit : 'auto'
            };
        },
        style: function () {
            let position = {},
                keys = ['left', 'right', 'top', 'bottom'];

            for (let name of keys) {
                position[name] = this.paper.padding[name] + this.paper.unit;
            }

            return position;
        }
    },
    methods: {
        drop: function (e) {
            dispatch('addPaperWidget', { name: e.dataTransfer.getData('text') });
        },
        dragover: function (e) {
            e.preventDefault();
        }
    },
    components: { widget }
};
