webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
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

__webpack_require__(9);

var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _aside = __webpack_require__(4);

var _aside2 = _interopRequireDefault(_aside);

var _paper = __webpack_require__(6);

var _paper2 = _interopRequireDefault(_paper);

var _property = __webpack_require__(7);

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
        return {
            filename: '未命名文件'
        };
    },
    components: {
        appHeader: _header2.default, appAside: _aside2.default, appPaper: _paper2.default, appProperty: _property2.default
    }
};

/***/ }),
/* 4 */
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

__webpack_require__(8);

var _index = __webpack_require__(15);

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

__webpack_require__(10);

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【EditorHeader】接口
 ************************************
 */
exports.default = {
  template: _index2.default,
  props: {
    filename: String
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

__webpack_require__(11);

var _index = __webpack_require__(17);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ************************************
 * 抛出【App Paper】接口
 ************************************
 */
exports.default = {
  template: _index2.default
};

/***/ }),
/* 7 */
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

var _index = __webpack_require__(18);

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
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Template\n !-->\n<div class=\"app-container\">\n    <app-header :filename=\"filename\"></app-header>\n    <app-aside></app-aside>\n    <app-paper></app-paper>\n    <app-property></app-property>\n</div>\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Aside Template\n !-->\n<div class=\"app-aside\">\n\n</div>\n"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "\n<!--\n ! App Header Template\n !-->\n<div class=\"app-header\">\n    <h2>{{filename}}</h2>\n</div>\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Paper Template\n !-->\n<div class=\"app-paper-wrapper\">\n    <div class=\"app-paper\"></div>\n</div>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<!--\n ! App Property Template\n !-->\n<div class=\"app-property\">\n</div>\n"

/***/ }),
/* 19 */
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

var _app = __webpack_require__(3);

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
],[19]);