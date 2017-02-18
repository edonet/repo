/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *********************************
 * 抛出工具方法
 *********************************
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
    isString: function isString(argv) {
        return typeof argv === 'string';
    },
    isNumber: function isNumber(argv) {
        return typeof argv === 'number' && !isNaN(argv);
    },
    isFunction: function isFunction(argv) {
        return typeof argv === 'function';
    },
    isArray: function isArray(argv) {
        return Array.isArray(argv);
    },
    isObject: function isObject(argv) {
        return argv && (typeof argv === 'undefined' ? 'undefined' : _typeof(argv)) === 'object' && !Array.isArray(argv);
    },
    isIterator: function isIterator(argv) {
        return argv && (typeof argv === 'undefined' ? 'undefined' : _typeof(argv)) === 'object' && Symbol.iterator in argv;
    }
};

/***/ }),
/* 1 */
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

__webpack_require__(7);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(6);

var _events2 = _interopRequireDefault(_events);

var _header = __webpack_require__(2);

var _header2 = _interopRequireDefault(_header);

var _paper = __webpack_require__(3);

var _paper2 = _interopRequireDefault(_paper);

var _widget = __webpack_require__(5);

var _widget2 = _interopRequireDefault(_widget);

var _property = __webpack_require__(4);

var _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 ************************************
 * 定义【Editor】类
 ************************************
 */
var Editor = function (_EventEmitter) {
  _inherits(Editor, _EventEmitter);

  function Editor(id, options) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));

    _this.wrapper = _utils2.default.isString(id) ? document.getElementById(id) : id;
    _this.wrapper.classList.add('meditor-container');
    _this.header = new _header2.default(_this.wrapper);
    _this.paper = new _paper2.default(_this.wrapper);
    _this.widget = new _widget2.default(_this.wrapper);
    _this.property = new _property2.default(_this.wrapper);
    return _this;
  }

  return Editor;
}(_events2.default);

/*
 ************************************
 * 定义【Editor】接口
 ************************************
 */


exports.default = Editor;

/***/ }),
/* 2 */
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 ************************************
 * 定义【EditorHeader】类
 ************************************
 */
var EditorHeader = function EditorHeader(wrapper) {
  _classCallCheck(this, EditorHeader);

  this.wrapper = wrapper;
  this.el = document.createElement('div');
  this.el.classList.add('meditor-header');
  this.wrapper.appendChild(this.el);
};

/*
 ************************************
 * 抛出【EditorHeader】接口
 ************************************
 */


exports.default = EditorHeader;

/***/ }),
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 ************************************
 * 定义【EditorPaper】类
 ************************************
 */
var EditorPaper = function EditorPaper(wrapper) {
  _classCallCheck(this, EditorPaper);

  this.wrapper = wrapper;
  this.el = document.createElement('div');
  this.el.classList.add('meditor-wrapper');
  this.paper = document.createElement('div');
  this.paper.classList.add('meditor-paper');
  this.el.appendChild(this.paper);
  this.wrapper.appendChild(this.el);
};

/*
 ************************************
 * 抛出【EditorPaper】接口
 ************************************
 */


exports.default = EditorPaper;

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

__webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 ************************************
 * 定义【EditorProperty】类
 ************************************
 */
var EditorProperty = function EditorProperty(wrapper) {
  _classCallCheck(this, EditorProperty);

  this.wrapper = wrapper;
  this.el = document.createElement('div');
  this.el.classList.add('meditor-property');
  this.wrapper.appendChild(this.el);
};

/*
 ************************************
 * 抛出【EditorProperty】接口
 ************************************
 */


exports.default = EditorProperty;

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

__webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 ************************************
 * 定义【EditorWidget】类
 ************************************
 */
var EditorWidget = function EditorWidget(wrapper) {
  _classCallCheck(this, EditorWidget);

  this.wrapper = wrapper;
  this.el = document.createElement('div');
  this.el.classList.add('meditor-widget');
  this.wrapper.appendChild(this.el);
};

/*
 ************************************
 * 抛出【EditorWidget】接口
 ************************************
 */


exports.default = EditorWidget;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ************************************
 * 加载依赖模块
 ************************************
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);

/*
 ************************************
 * 定义事件类
 ************************************
 */

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    // 添加事件回调


    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(name, handler) {

            // 校验数据格式
            if (utils.isString(name) && utils.isFunction(handler)) {
                name in this.events ? this.events[name].push(handler) : this.events[name] = [handler];
            }

            return this;
        }

        // 移除事件回调

    }, {
        key: 'off',
        value: function off() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            switch (args.length) {

                // 移除所有事件
                case 0:
                    this.events = {};
                    break;

                // 移除指定类型事件
                case 1:
                    utils.isString(args[0]) && delete this.events[args[0]];
                    break;

                // 移除指定事件
                default:
                    if (utils.isString(name) && utils.isFunction(handler) && name in this.events) {
                        this.events[name] = this.events[name].filter(function (v) {
                            return v !== handler;
                        });
                    }
                    break;
            }

            return this;
        }

        // 触发指定事件

    }, {
        key: 'emit',
        value: function emit(name, args) {
            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;


            // 必须指定事件类型
            if (!utils.isString(name) || !(name in this.events)) {
                return this;
            }

            // 格式化参数列表
            if (!utils.isArray(args)) {
                args = [args];
            }

            // 执行事件列表
            this.events[name].forEach(function (v) {
                return v.apply(context, args);
            });
            return this;
        }
    }]);

    return EventEmitter;
}();

/*
 ************************************
 * 抛出事件接口
 ************************************
 */


module.exports = EventEmitter;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 ***************************
 * 加载编辑器
 ***************************
 */

var _editor = __webpack_require__(1);

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 ***************************
 * 定义编辑器
 ***************************
 */
var mEditor = new _editor2.default('wrapper', {
    name: '测试模板',
    data: {
        room: '房产',
        date: '日期'
    }
});

/*
 ***************************
 * 监听编辑器事件
 ***************************
 */
mEditor.on('exit', function () {
    return window.close();
}).on('save', function (code) {
    return console.log(code);
});

/***/ })
/******/ ]);