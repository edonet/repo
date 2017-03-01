webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = undefined;

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _state = __webpack_require__(3);

var _state2 = _interopRequireDefault(_state);

var _action = __webpack_require__(11);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ***************************
 * 定义事件收发器
 ***************************
 */
var vm = new _vue2.default();

// 定义事件接收处理
vm.$on('updateAppState', function (_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? null : _ref$data;

  return name in _action2.default && _action2.default[name](data);
});

// 定义事件发送接口
function dispatch(name, data) {
  vm.$emit('updateAppState', { name: name, data: data });
}

/*
 ***************************
 * 输出【App State】对象
 ***************************
 */
exports.dispatch = dispatch;
exports.default = _state2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 定义【App State】对象
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    filename: '未命名文件',
    paper: {
        unit: 'mm',
        size: {
            width: 210,
            height: 297
        },
        padding: {
            top: 19.5,
            right: 19.5,
            bottom: 19.5,
            left: 19.5
        },
        widgets: []
    },
    toolbar: ['text', 'image', 'list']
};

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(18);

__webpack_require__(7);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(23);

var _app2 = _interopRequireDefault(_app);

var _header = __webpack_require__(8);

var _header2 = _interopRequireDefault(_header);

var _aside = __webpack_require__(6);

var _aside2 = _interopRequireDefault(_aside);

var _paper = __webpack_require__(9);

var _paper2 = _interopRequireDefault(_paper);

var _property = __webpack_require__(10);

var _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 输出【App】页面组件
 ************************************
 */
exports.default = {
  template: _app2.default,
  data: function data() {
    return _store2.default;
  },
  components: {
    appHeader: _header2.default, appAside: _aside2.default, appPaper: _paper2.default, appProperty: _property2.default
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(17);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【App Aside】模块
 ************************************
 */
exports.default = {
    template: _index2.default,
    props: {
        toolbar: Array
    },
    methods: {
        drag: function drag(e, data) {
            console.log(e);
            e.dataTransfer.setData('text', data);
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(19);

var _index = __webpack_require__(25);

var _index2 = _interopRequireDefault(_index);

var _store = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 ************************************
 * 抛出【EditorHeader】接口
 ************************************
 */
exports.default = {
    template: _index2.default,
    props: {
        paper: Object,
        filename: String
    },
    methods: {
        updateSize: function updateSize(name, e) {

            // 通过 input 事件发出数值
            (0, _store.dispatch)('updatePaperSize', Object.assign({}, this.paper.size, _defineProperty({}, name, parseInt(e.target.value) || 0)));
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(20);

var _store = __webpack_require__(2);

var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

var _widget = __webpack_require__(13);

var _widget2 = _interopRequireDefault(_widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【App Paper】接口
 ************************************
 */
exports.default = {
    template: _index2.default,
    props: {
        paper: Object
    },
    computed: {
        size: function size() {
            return {
                width: this.paper.size.width + this.paper.unit,
                height: this.paper.size.height ? this.paper.size.height + this.paper.unit : 'auto'
            };
        },
        style: function style() {
            var position = {},
                keys = ['left', 'right', 'top', 'bottom'];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var name = _step.value;

                    position[name] = this.paper.padding[name] + this.paper.unit;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return position;
        }
    },
    methods: {
        drop: function drop(e) {
            (0, _store.dispatch)('addPaperWidget', { name: e.dataTransfer.getData('text') });
        },
        dragover: function dragover(e) {
            e.preventDefault();
        }
    },
    components: { widget: _widget2.default }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(21);

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【App Property】接口
 ************************************
 */
exports.default = {
  template: _index2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 载入【App State】对象
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _state = __webpack_require__(3);

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 定义【App Action】对象
 ************************************
 */
exports.default = {
    updatePaperSize: function updatePaperSize(data) {
        _state2.default.paper.size = data;
    },
    addPaperWidget: function addPaperWidget(data) {
        _state2.default.paper.widgets.push(data);
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 抛出【App Paper】接口
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  template: '<div>image</div>'
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */
// import './index.scss';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _widgets = __webpack_require__(16);

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【App Aside】模块
 ************************************
 */
exports.default = {
    render: function render(createElement) {
        return createElement(_widgets2.default[this.data.name], this.data);
    },
    props: {
        data: Object
    },
    methods: {}
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 抛出【App Paper】接口
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  template: '<div>list</div>'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 抛出【App Paper】接口
 ************************************
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  template: '<div>text</div>'
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text = __webpack_require__(15);

var _text2 = _interopRequireDefault(_text);

var _image = __webpack_require__(12);

var _image2 = _interopRequireDefault(_image);

var _list = __webpack_require__(14);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { text: _text2.default, image: _image2.default, list: _list2.default };

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Template\n !-->\n<div class=\"app-container\">\n    <app-header :filename=\"filename\" :paper=\"paper\"></app-header>\n    <app-aside :toolbar=\"toolbar\"></app-aside>\n    <app-paper :paper=\"paper\"></app-paper>\n    <app-property></app-property>\n</div>\n"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Aside Template\n !-->\n<div class=\"app-aside\">\n    <ul class=\"m10\">\n        <li v-for=\"name of toolbar\" draggable=\"true\" @dragstart=\"drag($event, name)\">{{name}}</li>\n    </ul>\n</div>\n"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Header Template\n !-->\n<div class=\"app-header\">\n    <h2 class=\"inl mr20\">文件名：{{filename}}</h2>\n    <div class=\"inl\">\n        <span>尺寸：</span>\n        <label>\n            <input\n                type=\"text\"\n                class=\"form-input small\"\n                :value=\"paper.size.width\"\n                @input=\"updateSize('width', $event)\" />\n            <span class=\"ml5\">{{paper.unit}}</span>\n        </label>\n        <i class=\"icon icon-multi f12 mh10\"></i>\n        <label>\n            <input\n                type=\"text\"\n                class=\"form-input small\"\n                :value=\"paper.size.height\"\n                @input=\"updateSize('height', $event)\" />\n            <span class=\"ml5\">{{paper.unit}}</span>\n        </label>\n    </div>\n</div>\n"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Paper Template\n !-->\n<div class=\"app-wrapper\">\n    <div class=\"app-canvas\">\n        <div class=\"app-paper\" :style=\"size\">\n            <div class=\"app-paper-body\" :style=\"style\" @drop=\"drop($event)\" @dragover='dragover($event)'>\n                <widget v-for=\"x in paper.widgets\" :data=\"x\"></widget>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Property Template\n !-->\n<div class=\"app-property\">\n</div>\n"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ***************************
 * 加载依赖模块
 ***************************
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ***************************
 * 输出App实例
 ***************************
 */
exports.default = new _vue2.default({
  el: '#app',
  components: { app: _app2.default }
});

/***/ })
],[28]);