!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n(1),n(4);var f=n(3),c=r(f),a=n(2),l=r(a),s=function(e){function t(e,n){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.wrapper=c.default.isString(e)?document.getElementById(e):e,r}return u(t,e),t}(l.default);t.default=s},function(e,t){"use strict";function n(e,t,n){e[t]||Object[r](e,t,{writable:!0,configurable:!0,value:n})}if(require("core-js/shim"),require("regenerator-runtime/runtime"),require("core-js/fn/regexp/escape"),global._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");global._babelPolyfill=!0;var r="defineProperty";n(String.prototype,"padLeft","".padStart),n(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&n(Array,e,Function.call.bind([][e]))})},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e&&!isNaN(e)},isFunction:function(e){return"function"==typeof e},isArray:function(e){return Array.isArray(e)},isObject:function(e){return e&&"object"===("undefined"==typeof e?"undefined":r(e))&&!Array.isArray(e)},isIterator:function(e){return e&&"object"===("undefined"==typeof e?"undefined":r(e))&&Symbol.iterator in e}}},function(e,t){},function(e,t,n){"use strict";var r=n(0),o=new r("wrapper",{name:"测试模板",data:{room:"房产",date:"日期"}});o.on("exit",function(){return window.close()}).on("save",function(e){return console.log(e)})}]);