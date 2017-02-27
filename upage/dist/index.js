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
        }
    }
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

__webpack_require__(13);

__webpack_require__(7);

var _store = __webpack_require__(2);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(18);

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

__webpack_require__(12);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【App Aside】模块
 ************************************
 */
exports.default = {
  template: _index2.default
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

__webpack_require__(14);

var _index = __webpack_require__(20);

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

__webpack_require__(15);

var _index = __webpack_require__(21);

var _index2 = _interopRequireDefault(_index);

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
        style: function style() {
            return {
                width: this.paper.size.width + this.paper.unit,
                height: this.paper.size.height ? this.paper.size.height + this.paper.unit : 'auto'
            };
        }
    }
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

__webpack_require__(16);

var _index = __webpack_require__(22);

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
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Template\n !-->\n<div class=\"app-container\">\n    <app-header :filename=\"filename\" :paper=\"paper\"></app-header>\n    <app-aside></app-aside>\n    <app-paper :paper=\"paper\"></app-paper>\n    <app-property></app-property>\n</div>\n"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Aside Template\n !-->\n<div class=\"app-aside\">\n\n</div>\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Header Template\n !-->\n<div class=\"app-header\">\n    <h2 class=\"inl mr20\">文件名：{{filename}}</h2>\n    <div class=\"inl\">\n        <span>尺寸：</span>\n        <label>\n            <input\n                type=\"text\"\n                class=\"form-input small\"\n                :value=\"paper.size.width\"\n                @input=\"updateSize('width', $event)\" />\n            <span class=\"ml5\">{{paper.unit}}</span>\n        </label>\n        <i class=\"icon icon-multi f12 mh10\"></i>\n        <label>\n            <input\n                type=\"text\"\n                class=\"form-input small\"\n                :value=\"paper.size.height\"\n                @input=\"updateSize('height', $event)\" />\n            <span class=\"ml5\">{{paper.unit}}</span>\n        </label>\n    </div>\n</div>\n"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Paper Template\n !-->\n<div class=\"app-wrapper\">\n    <div class=\"app-canvas\">\n        <div class=\"app-paper\" :style=\"style\"></div>\n    </div>\n</div>\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Property Template\n !-->\n<div class=\"app-property\">\n</div>\n"

/***/ }),
/* 23 */
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
],[23]);