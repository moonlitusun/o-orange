(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["o-orange"] = factory();
	else
		root["o-orange"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/_array.ts":
/*!************************!*\
  !*** ../src/_array.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _array_1 = __webpack_require__(/*! ./utils/aop/_array */ "../src/utils/aop/_array.ts");
var _ = /** @class */ (function () {
    function _() {
    }
    /**
     * @name pageCut-数组分页
     * @param { array } sourceArr 源数据
     * @param { number } [pageNum = 1] 当前页码 当pageNum为负数时从后往前计算页码
     * @param { number } [pageSize = 10] 一页多少条
     * @returns { array }
     */
    _.prototype.pagination = function (sourceArr, pageNum, pageSize) {
        if (pageNum === void 0) { pageNum = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var beginIndex = (pageNum - 1) * pageSize, endIndex = pageNum * pageSize, len = sourceArr.length;
        return sourceArr.slice(beginIndex, endIndex > len ? len : endIndex);
    };
    /**
     * @name shuffle-打乱数组顺序
     * @param { array } sourceArr 源数据
     * @returns { array }
     */
    _.prototype.shuffle = function (sourceArr) {
        var _a;
        var len = sourceArr.length, randomIndex = 0;
        while (len) {
            randomIndex = ~~(Math.random() * len--);
            _a = [sourceArr[len], sourceArr[randomIndex]], sourceArr[randomIndex] = _a[0], sourceArr[len] = _a[1];
        }
        return sourceArr;
    };
    __decorate([
        _array_1.arrayParamCheck()
    ], _.prototype, "pagination", null);
    __decorate([
        _array_1.arrayParamCheck()
    ], _.prototype, "shuffle", null);
    return _;
}());
;
var _array = new _();
exports.pagination = _array.pagination;
exports.shuffle = _array.shuffle;
exports.default = _array;


/***/ }),

/***/ "../src/_date.ts":
/*!***********************!*\
  !*** ../src/_date.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _number_1 = __webpack_require__(/*! ./_number */ "../src/_number.ts");
var _date = new /** @class */ (function () {
    function class_1() {
    }
    /**
     * @name queryTimezoneTime-查询时区时间
     * @param { number } timezone 要查询的时区
     * @param { string | number } date 要查询的时间
     * @returns { string }
     */
    class_1.prototype.queryTimezoneTime = function (timezone, date) {
        if (timezone === void 0) { timezone = 8; }
        if (date === void 0) { date = Date.now(); }
        var queryDate = new Date(date), offset = queryDate.getTimezoneOffset(), utilDate = new Date();
        utilDate.setTime(queryDate.getTime() + offset * 60 * 1000 + timezone * 60 * 60 * 1000);
        return utilDate.getMonth() + 1 + "-" + utilDate.getDate() + " " + _number_1.perfixNumber(utilDate.getHours()) + ":" + _number_1.perfixNumber(utilDate.getMinutes()) + ":" + _number_1.perfixNumber(utilDate.getSeconds());
    };
    return class_1;
}())();
exports.queryTimezoneTime = _date.queryTimezoneTime;
exports.default = _date;


/***/ }),

/***/ "../src/_location.ts":
/*!***************************!*\
  !*** ../src/_location.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _location = new /** @class */ (function () {
    function class_1() {
    }
    /**
     * @name normalizeSearch-格式化location.search
     * @param { string } key 需要查询的参数
     * @param { string } [type = brower] 类型 'brower' | 'hash'
     */
    class_1.prototype.normalizeSearch = function (key, type) {
        if (type === void 0) { type = 'brower'; }
        var _a = window.location, search = _a.search, hash = _a.hash;
        var typeVal = type === 'hash' ? hash : search;
        if (!typeVal)
            return;
        var result_brower = typeVal.match(new RegExp("(\\?|\\&)" + key + "=([^\\&]+)"));
        if (result_brower)
            return result_brower[2];
        return;
    };
    return class_1;
}())();
exports.normalizeSearch = _location.normalizeSearch;
exports.default = _location;


/***/ }),

/***/ "../src/_number.ts":
/*!*************************!*\
  !*** ../src/_number.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _number = new /** @class */ (function () {
    function class_1() {
    }
    /**
     * @name 不足两位自己前缀0
     * @param {number | string} targetNum
     *
     */
    class_1.prototype.perfixNumber = function (targetNum) {
        return targetNum < 10 ? "0" + targetNum : "" + targetNum;
    };
    /**
     * @name 数字加千位为分隔符
     * @param { number } targetNum 当前数字
     * @param { number } [fixLength = 无] 保留小数点位
     * @param { string } [sign = ','] 分隔符号
     */
    class_1.prototype.convertTHSSeparator = function (targetNum, fixLength, sign) {
        if (targetNum === void 0) { targetNum = 0; }
        if (sign === void 0) { sign = ','; }
        var parseNum = (fixLength || fixLength === 0) ? Number(targetNum).toFixed(fixLength) : targetNum;
        var _a = parseNum.toString().split('.'), integer = _a[0], decimals = _a[1];
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
        return decimals ? integer + "." + decimals : integer;
    };
    /**
     * @name 数字转百分数
     * @param { number } targetNum 当前数字
     * @param { number } [fixLength = 无] 保留小数点位
     */
    class_1.prototype.convertPercent = function (targetNum, fixLength) {
        if (targetNum === void 0) { targetNum = 0; }
        var _targetNum = targetNum * 100;
        var parseNum = (fixLength || fixLength === 0) ? Number(_targetNum).toFixed(fixLength) : _targetNum;
        return parseNum + "%";
    };
    /**
     * @name 数字保留小数位
     * @param { number | string } targetNum 当前数字
     * @param { number } [fixLength = 2] 保留小数点位
     */
    class_1.prototype.converNumToFixed = function (targetNum, fixLength) {
        if (targetNum === void 0) { targetNum = 0; }
        if (fixLength === void 0) { fixLength = 2; }
        var parseNum = Number(targetNum);
        if (isNaN(parseNum))
            return targetNum;
        return parseNum.toFixed(fixLength);
    };
    return class_1;
}())();
exports.perfixNumber = _number.perfixNumber;
exports.convertTHSSeparator = _number.convertTHSSeparator;
exports.convertPercent = _number.convertPercent;
exports.converNumToFixed = _number.converNumToFixed;
exports.default = _number;


/***/ }),

/***/ "../src/_timerd.ts":
/*!*************************!*\
  !*** ../src/_timerd.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _timerd = new /** @class */ (function () {
    function class_1() {
    }
    /**
     * @name fixedTimerd-定时器不准修正函数
     * @param  { number } duration [定时器时间]
     * @param  { function } handleFn [定时器要处理的函数]
     * @returns { void }
     */
    class_1.prototype.fixedTimerd = function (duration, handleFunc) {
        var prevTimestamp = Date.now();
        var fixedFunc = function () {
            handleFunc();
            var currTimestamp = Date.now();
            var offset = currTimestamp - prevTimestamp - duration;
            offset = offset < 0 ? 0 : offset;
            prevTimestamp = currTimestamp;
            var fixedTime = duration - offset;
            setTimeout(fixedFunc, fixedTime);
        };
        setTimeout(fixedFunc, duration);
    };
    return class_1;
}())();
exports.fixedTimerd = _timerd.fixedTimerd;
exports.default = _timerd;


/***/ }),

/***/ "../src/_type.ts":
/*!***********************!*\
  !*** ../src/_type.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _type = new /** @class */ (function () {
    function class_1() {
    }
    /**
     * @name check-array
     */
    class_1.prototype.isArray = function (param) {
        return param instanceof Array || Object.prototype.toString.call(param) === '[object Array]';
    };
    /**
     * @name check-object
     */
    class_1.prototype.isObject = function (param) {
        return param !== null && Object.prototype.toString.call(param) === '[object Object]';
    };
    /**
     * @name check-undefined
     */
    class_1.prototype.isUndefined = function (param) {
        return param === void 0;
    };
    /**
     * @name check-number
     */
    class_1.prototype.isNumber = function (param) {
        return typeof param === 'number' || Object.prototype.toString.call(param) === '[object Number]';
    };
    return class_1;
}())();
exports.isArray = _type.isArray;
exports.isObject = _type.isObject;
exports.isUndefined = _type.isUndefined;
exports.isNumber = _type.isNumber;
exports.default = _type;


/***/ }),

/***/ "../src/utils/aop/_array.ts":
/*!**********************************!*\
  !*** ../src/utils/aop/_array.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _type_1 = __webpack_require__(/*! ../../_type */ "../src/_type.ts");
/**
 * @name arrayParamCheck-检查函数第一个参数是否为数组
 */
function arrayParamCheck() {
    return function (target, propertyKey, descriptor) {
        var tempDescriptor = descriptor, tempValue = tempDescriptor.value;
        tempDescriptor.value = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            var paramArr = rest[0];
            if (!_type_1.isArray(paramArr) || paramArr === 0)
                return [];
            return tempValue.apply(this, rest);
        };
        return descriptor;
    };
}
exports.arrayParamCheck = arrayParamCheck;


/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/_array */ "../src/_array.ts");
/* harmony import */ var _src_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/_date */ "../src/_date.ts");
/* harmony import */ var _src_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/_location */ "../src/_location.ts");
/* harmony import */ var _src_location__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_location__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/_number */ "../src/_number.ts");
/* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_number__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_timerd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/_timerd */ "../src/_timerd.ts");
/* harmony import */ var _src_timerd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_timerd__WEBPACK_IMPORTED_MODULE_4__);






/**
 * _array
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const parseArr = _array.pagination(arr, 2, -1);
// const parseArr = shuffle(arr);

// console.log(parseArr);
// console.log(_array);
// console.log(shuffle);

/**
 * _date
 */
// console.log(queryTimezoneTime(-2, '2018-10-20'));

/**
 * _location
 */
// console.log(normalizeSearch('modelTypeCode', 'hash'));


/**
 * timerd
 */
Object(_src_timerd__WEBPACK_IMPORTED_MODULE_4__["fixedTimerd"])(2000, function () {
  console.log(23);
});

/**
 * _number
 */
// console.log(_number.convertTHSSeparator(''));
// console.log(_number.convertPercent('1.045645', 0));
// console.log(_number.convertFixed('zzzz', 3));

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vLW9yYW5nZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vby1vcmFuZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vby1vcmFuZ2UvLi4vc3JjL19hcnJheS50cyIsIndlYnBhY2s6Ly9vLW9yYW5nZS8uLi9zcmMvX2RhdGUudHMiLCJ3ZWJwYWNrOi8vby1vcmFuZ2UvLi4vc3JjL19sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9vLW9yYW5nZS8uLi9zcmMvX251bWJlci50cyIsIndlYnBhY2s6Ly9vLW9yYW5nZS8uLi9zcmMvX3RpbWVyZC50cyIsIndlYnBhY2s6Ly9vLW9yYW5nZS8uLi9zcmMvX3R5cGUudHMiLCJ3ZWJwYWNrOi8vby1vcmFuZ2UvLi4vc3JjL3V0aWxzL2FvcC9fYXJyYXkudHMiLCJ3ZWJwYWNrOi8vby1vcmFuZ2UvLi9zY3JpcHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZpeGVkVGltZXJkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQzs7O0FBR0Q7OztBQUdBOzs7QUFHQUEsK0RBQVdBLENBQUMsSUFBWixFQUFrQixZQUFNO0FBQ3RCQyxVQUFRQyxHQUFSLENBQVksRUFBWjtBQUNELENBRkQ7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQSxnRCIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiby1vcmFuZ2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiby1vcmFuZ2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIF9hcnJheV8xID0gcmVxdWlyZShcIi4vdXRpbHMvYW9wL19hcnJheVwiKTtcbnZhciBfID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIF8oKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBuYW1lIHBhZ2VDdXQt5pWw57uE5YiG6aG1XG4gICAgICogQHBhcmFtIHsgYXJyYXkgfSBzb3VyY2VBcnIg5rqQ5pWw5o2uXG4gICAgICogQHBhcmFtIHsgbnVtYmVyIH0gW3BhZ2VOdW0gPSAxXSDlvZPliY3pobXnoIEg5b2TcGFnZU51beS4uui0n+aVsOaXtuS7juWQjuW+gOWJjeiuoeeul+mhteeggVxuICAgICAqIEBwYXJhbSB7IG51bWJlciB9IFtwYWdlU2l6ZSA9IDEwXSDkuIDpobXlpJrlsJHmnaFcbiAgICAgKiBAcmV0dXJucyB7IGFycmF5IH1cbiAgICAgKi9cbiAgICBfLnByb3RvdHlwZS5wYWdpbmF0aW9uID0gZnVuY3Rpb24gKHNvdXJjZUFyciwgcGFnZU51bSwgcGFnZVNpemUpIHtcbiAgICAgICAgaWYgKHBhZ2VOdW0gPT09IHZvaWQgMCkgeyBwYWdlTnVtID0gMTsgfVxuICAgICAgICBpZiAocGFnZVNpemUgPT09IHZvaWQgMCkgeyBwYWdlU2l6ZSA9IDEwOyB9XG4gICAgICAgIHZhciBiZWdpbkluZGV4ID0gKHBhZ2VOdW0gLSAxKSAqIHBhZ2VTaXplLCBlbmRJbmRleCA9IHBhZ2VOdW0gKiBwYWdlU2l6ZSwgbGVuID0gc291cmNlQXJyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUFyci5zbGljZShiZWdpbkluZGV4LCBlbmRJbmRleCA+IGxlbiA/IGxlbiA6IGVuZEluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBuYW1lIHNodWZmbGUt5omT5Lmx5pWw57uE6aG65bqPXG4gICAgICogQHBhcmFtIHsgYXJyYXkgfSBzb3VyY2VBcnIg5rqQ5pWw5o2uXG4gICAgICogQHJldHVybnMgeyBhcnJheSB9XG4gICAgICovXG4gICAgXy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uIChzb3VyY2VBcnIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbGVuID0gc291cmNlQXJyLmxlbmd0aCwgcmFuZG9tSW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAobGVuKSB7XG4gICAgICAgICAgICByYW5kb21JbmRleCA9IH5+KE1hdGgucmFuZG9tKCkgKiBsZW4tLSk7XG4gICAgICAgICAgICBfYSA9IFtzb3VyY2VBcnJbbGVuXSwgc291cmNlQXJyW3JhbmRvbUluZGV4XV0sIHNvdXJjZUFycltyYW5kb21JbmRleF0gPSBfYVswXSwgc291cmNlQXJyW2xlbl0gPSBfYVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlQXJyO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIF9hcnJheV8xLmFycmF5UGFyYW1DaGVjaygpXG4gICAgXSwgXy5wcm90b3R5cGUsIFwicGFnaW5hdGlvblwiLCBudWxsKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgX2FycmF5XzEuYXJyYXlQYXJhbUNoZWNrKClcbiAgICBdLCBfLnByb3RvdHlwZSwgXCJzaHVmZmxlXCIsIG51bGwpO1xuICAgIHJldHVybiBfO1xufSgpKTtcbjtcbnZhciBfYXJyYXkgPSBuZXcgXygpO1xuZXhwb3J0cy5wYWdpbmF0aW9uID0gX2FycmF5LnBhZ2luYXRpb247XG5leHBvcnRzLnNodWZmbGUgPSBfYXJyYXkuc2h1ZmZsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9hcnJheTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIF9udW1iZXJfMSA9IHJlcXVpcmUoXCIuL19udW1iZXJcIik7XG52YXIgX2RhdGUgPSBuZXcgLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBuYW1lIHF1ZXJ5VGltZXpvbmVUaW1lLeafpeivouaXtuWMuuaXtumXtFxuICAgICAqIEBwYXJhbSB7IG51bWJlciB9IHRpbWV6b25lIOimgeafpeivoueahOaXtuWMulxuICAgICAqIEBwYXJhbSB7IHN0cmluZyB8IG51bWJlciB9IGRhdGUg6KaB5p+l6K+i55qE5pe26Ze0XG4gICAgICogQHJldHVybnMgeyBzdHJpbmcgfVxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnF1ZXJ5VGltZXpvbmVUaW1lID0gZnVuY3Rpb24gKHRpbWV6b25lLCBkYXRlKSB7XG4gICAgICAgIGlmICh0aW1lem9uZSA9PT0gdm9pZCAwKSB7IHRpbWV6b25lID0gODsgfVxuICAgICAgICBpZiAoZGF0ZSA9PT0gdm9pZCAwKSB7IGRhdGUgPSBEYXRlLm5vdygpOyB9XG4gICAgICAgIHZhciBxdWVyeURhdGUgPSBuZXcgRGF0ZShkYXRlKSwgb2Zmc2V0ID0gcXVlcnlEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCksIHV0aWxEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdXRpbERhdGUuc2V0VGltZShxdWVyeURhdGUuZ2V0VGltZSgpICsgb2Zmc2V0ICogNjAgKiAxMDAwICsgdGltZXpvbmUgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHJldHVybiB1dGlsRGF0ZS5nZXRNb250aCgpICsgMSArIFwiLVwiICsgdXRpbERhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBfbnVtYmVyXzEucGVyZml4TnVtYmVyKHV0aWxEYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBfbnVtYmVyXzEucGVyZml4TnVtYmVyKHV0aWxEYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIF9udW1iZXJfMS5wZXJmaXhOdW1iZXIodXRpbERhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKSgpO1xuZXhwb3J0cy5xdWVyeVRpbWV6b25lVGltZSA9IF9kYXRlLnF1ZXJ5VGltZXpvbmVUaW1lO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfbG9jYXRpb24gPSBuZXcgLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBuYW1lIG5vcm1hbGl6ZVNlYXJjaC3moLzlvI/ljJZsb2NhdGlvbi5zZWFyY2hcbiAgICAgKiBAcGFyYW0geyBzdHJpbmcgfSBrZXkg6ZyA6KaB5p+l6K+i55qE5Y+C5pWwXG4gICAgICogQHBhcmFtIHsgc3RyaW5nIH0gW3R5cGUgPSBicm93ZXJdIOexu+WeiyAnYnJvd2VyJyB8ICdoYXNoJ1xuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm5vcm1hbGl6ZVNlYXJjaCA9IGZ1bmN0aW9uIChrZXksIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gJ2Jyb3dlcic7IH1cbiAgICAgICAgdmFyIF9hID0gd2luZG93LmxvY2F0aW9uLCBzZWFyY2ggPSBfYS5zZWFyY2gsIGhhc2ggPSBfYS5oYXNoO1xuICAgICAgICB2YXIgdHlwZVZhbCA9IHR5cGUgPT09ICdoYXNoJyA/IGhhc2ggOiBzZWFyY2g7XG4gICAgICAgIGlmICghdHlwZVZhbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHJlc3VsdF9icm93ZXIgPSB0eXBlVmFsLm1hdGNoKG5ldyBSZWdFeHAoXCIoXFxcXD98XFxcXCYpXCIgKyBrZXkgKyBcIj0oW15cXFxcJl0rKVwiKSk7XG4gICAgICAgIGlmIChyZXN1bHRfYnJvd2VyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdF9icm93ZXJbMl07XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKSgpO1xuZXhwb3J0cy5ub3JtYWxpemVTZWFyY2ggPSBfbG9jYXRpb24ubm9ybWFsaXplU2VhcmNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2xvY2F0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX251bWJlciA9IG5ldyAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG5hbWUg5LiN6Laz5Lik5L2N6Ieq5bex5YmN57yAMFxuICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSB0YXJnZXROdW1cbiAgICAgKlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnBlcmZpeE51bWJlciA9IGZ1bmN0aW9uICh0YXJnZXROdW0pIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldE51bSA8IDEwID8gXCIwXCIgKyB0YXJnZXROdW0gOiBcIlwiICsgdGFyZ2V0TnVtO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQG5hbWUg5pWw5a2X5Yqg5Y2D5L2N5Li65YiG6ZqU56ymXG4gICAgICogQHBhcmFtIHsgbnVtYmVyIH0gdGFyZ2V0TnVtIOW9k+WJjeaVsOWtl1xuICAgICAqIEBwYXJhbSB7IG51bWJlciB9IFtmaXhMZW5ndGggPSDml6BdIOS/neeVmeWwj+aVsOeCueS9jVxuICAgICAqIEBwYXJhbSB7IHN0cmluZyB9IFtzaWduID0gJywnXSDliIbpmpTnrKblj7dcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb252ZXJ0VEhTU2VwYXJhdG9yID0gZnVuY3Rpb24gKHRhcmdldE51bSwgZml4TGVuZ3RoLCBzaWduKSB7XG4gICAgICAgIGlmICh0YXJnZXROdW0gPT09IHZvaWQgMCkgeyB0YXJnZXROdW0gPSAwOyB9XG4gICAgICAgIGlmIChzaWduID09PSB2b2lkIDApIHsgc2lnbiA9ICcsJzsgfVxuICAgICAgICB2YXIgcGFyc2VOdW0gPSAoZml4TGVuZ3RoIHx8IGZpeExlbmd0aCA9PT0gMCkgPyBOdW1iZXIodGFyZ2V0TnVtKS50b0ZpeGVkKGZpeExlbmd0aCkgOiB0YXJnZXROdW07XG4gICAgICAgIHZhciBfYSA9IHBhcnNlTnVtLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSwgaW50ZWdlciA9IF9hWzBdLCBkZWNpbWFscyA9IF9hWzFdO1xuICAgICAgICBpbnRlZ2VyID0gaW50ZWdlci5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBzaWduKTtcbiAgICAgICAgcmV0dXJuIGRlY2ltYWxzID8gaW50ZWdlciArIFwiLlwiICsgZGVjaW1hbHMgOiBpbnRlZ2VyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQG5hbWUg5pWw5a2X6L2s55m+5YiG5pWwXG4gICAgICogQHBhcmFtIHsgbnVtYmVyIH0gdGFyZ2V0TnVtIOW9k+WJjeaVsOWtl1xuICAgICAqIEBwYXJhbSB7IG51bWJlciB9IFtmaXhMZW5ndGggPSDml6BdIOS/neeVmeWwj+aVsOeCueS9jVxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbnZlcnRQZXJjZW50ID0gZnVuY3Rpb24gKHRhcmdldE51bSwgZml4TGVuZ3RoKSB7XG4gICAgICAgIGlmICh0YXJnZXROdW0gPT09IHZvaWQgMCkgeyB0YXJnZXROdW0gPSAwOyB9XG4gICAgICAgIHZhciBfdGFyZ2V0TnVtID0gdGFyZ2V0TnVtICogMTAwO1xuICAgICAgICB2YXIgcGFyc2VOdW0gPSAoZml4TGVuZ3RoIHx8IGZpeExlbmd0aCA9PT0gMCkgPyBOdW1iZXIoX3RhcmdldE51bSkudG9GaXhlZChmaXhMZW5ndGgpIDogX3RhcmdldE51bTtcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtICsgXCIlXCI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbmFtZSDmlbDlrZfkv53nlZnlsI/mlbDkvY1cbiAgICAgKiBAcGFyYW0geyBudW1iZXIgfCBzdHJpbmcgfSB0YXJnZXROdW0g5b2T5YmN5pWw5a2XXG4gICAgICogQHBhcmFtIHsgbnVtYmVyIH0gW2ZpeExlbmd0aCA9IDJdIOS/neeVmeWwj+aVsOeCueS9jVxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbnZlck51bVRvRml4ZWQgPSBmdW5jdGlvbiAodGFyZ2V0TnVtLCBmaXhMZW5ndGgpIHtcbiAgICAgICAgaWYgKHRhcmdldE51bSA9PT0gdm9pZCAwKSB7IHRhcmdldE51bSA9IDA7IH1cbiAgICAgICAgaWYgKGZpeExlbmd0aCA9PT0gdm9pZCAwKSB7IGZpeExlbmd0aCA9IDI7IH1cbiAgICAgICAgdmFyIHBhcnNlTnVtID0gTnVtYmVyKHRhcmdldE51bSk7XG4gICAgICAgIGlmIChpc05hTihwYXJzZU51bSkpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0TnVtO1xuICAgICAgICByZXR1cm4gcGFyc2VOdW0udG9GaXhlZChmaXhMZW5ndGgpO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpKCk7XG5leHBvcnRzLnBlcmZpeE51bWJlciA9IF9udW1iZXIucGVyZml4TnVtYmVyO1xuZXhwb3J0cy5jb252ZXJ0VEhTU2VwYXJhdG9yID0gX251bWJlci5jb252ZXJ0VEhTU2VwYXJhdG9yO1xuZXhwb3J0cy5jb252ZXJ0UGVyY2VudCA9IF9udW1iZXIuY29udmVydFBlcmNlbnQ7XG5leHBvcnRzLmNvbnZlck51bVRvRml4ZWQgPSBfbnVtYmVyLmNvbnZlck51bVRvRml4ZWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfbnVtYmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX3RpbWVyZCA9IG5ldyAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG5hbWUgZml4ZWRUaW1lcmQt5a6a5pe25Zmo5LiN5YeG5L+u5q2j5Ye95pWwXG4gICAgICogQHBhcmFtICB7IG51bWJlciB9IGR1cmF0aW9uIFvlrprml7blmajml7bpl7RdXG4gICAgICogQHBhcmFtICB7IGZ1bmN0aW9uIH0gaGFuZGxlRm4gW+WumuaXtuWZqOimgeWkhOeQhueahOWHveaVsF1cbiAgICAgKiBAcmV0dXJucyB7IHZvaWQgfVxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmZpeGVkVGltZXJkID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBoYW5kbGVGdW5jKSB7XG4gICAgICAgIHZhciBwcmV2VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIGZpeGVkRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRsZUZ1bmMoKTtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBjdXJyVGltZXN0YW1wIC0gcHJldlRpbWVzdGFtcCAtIGR1cmF0aW9uO1xuICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IDwgMCA/IDAgOiBvZmZzZXQ7XG4gICAgICAgICAgICBwcmV2VGltZXN0YW1wID0gY3VyclRpbWVzdGFtcDtcbiAgICAgICAgICAgIHZhciBmaXhlZFRpbWUgPSBkdXJhdGlvbiAtIG9mZnNldDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZml4ZWRGdW5jLCBmaXhlZFRpbWUpO1xuICAgICAgICB9O1xuICAgICAgICBzZXRUaW1lb3V0KGZpeGVkRnVuYywgZHVyYXRpb24pO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpKCk7XG5leHBvcnRzLmZpeGVkVGltZXJkID0gX3RpbWVyZC5maXhlZFRpbWVyZDtcbmV4cG9ydHMuZGVmYXVsdCA9IF90aW1lcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfdHlwZSA9IG5ldyAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG5hbWUgY2hlY2stYXJyYXlcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBwYXJhbSBpbnN0YW5jZW9mIEFycmF5IHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXJhbSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBjaGVjay1vYmplY3RcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc09iamVjdCA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICByZXR1cm4gcGFyYW0gIT09IG51bGwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhcmFtKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBjaGVjay11bmRlZmluZWRcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICByZXR1cm4gcGFyYW0gPT09IHZvaWQgMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBuYW1lIGNoZWNrLW51bWJlclxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXJhbSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpKCk7XG5leHBvcnRzLmlzQXJyYXkgPSBfdHlwZS5pc0FycmF5O1xuZXhwb3J0cy5pc09iamVjdCA9IF90eXBlLmlzT2JqZWN0O1xuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IF90eXBlLmlzVW5kZWZpbmVkO1xuZXhwb3J0cy5pc051bWJlciA9IF90eXBlLmlzTnVtYmVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX3R5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfdHlwZV8xID0gcmVxdWlyZShcIi4uLy4uL190eXBlXCIpO1xuLyoqXG4gKiBAbmFtZSBhcnJheVBhcmFtQ2hlY2st5qOA5p+l5Ye95pWw56ys5LiA5Liq5Y+C5pWw5piv5ZCm5Li65pWw57uEXG4gKi9cbmZ1bmN0aW9uIGFycmF5UGFyYW1DaGVjaygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdmFyIHRlbXBEZXNjcmlwdG9yID0gZGVzY3JpcHRvciwgdGVtcFZhbHVlID0gdGVtcERlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIHRlbXBEZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdFtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhcmFtQXJyID0gcmVzdFswXTtcbiAgICAgICAgICAgIGlmICghX3R5cGVfMS5pc0FycmF5KHBhcmFtQXJyKSB8fCBwYXJhbUFyciA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICByZXR1cm4gdGVtcFZhbHVlLmFwcGx5KHRoaXMsIHJlc3QpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xufVxuZXhwb3J0cy5hcnJheVBhcmFtQ2hlY2sgPSBhcnJheVBhcmFtQ2hlY2s7XG4iLCJpbXBvcnQgX2FycmF5LCB7IHNodWZmbGUgfSBmcm9tICcuLi8uLi9zcmMvX2FycmF5J1xuaW1wb3J0IF9kYXRlLCB7IHF1ZXJ5VGltZXpvbmVUaW1lIH0gZnJvbSAnLi4vLi4vc3JjL19kYXRlJztcbmltcG9ydCBfbG9jYXRpb24sIHsgbm9ybWFsaXplU2VhcmNoIH0gZnJvbSAnLi4vLi4vc3JjL19sb2NhdGlvbic7XG5pbXBvcnQgX251bWJlciBmcm9tICcuLi8uLi9zcmMvX251bWJlcic7XG5pbXBvcnQgX3RpbWVyZCwgeyBmaXhlZFRpbWVyZCB9IGZyb20gJy4uLy4uL3NyYy9fdGltZXJkJztcblxuLyoqXG4gKiBfYXJyYXlcbiAqL1xuLy8gY29uc3QgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2XTtcbi8vIGNvbnN0IHBhcnNlQXJyID0gX2FycmF5LnBhZ2luYXRpb24oYXJyLCAyLCAtMSk7XG4vLyBjb25zdCBwYXJzZUFyciA9IHNodWZmbGUoYXJyKTtcblxuLy8gY29uc29sZS5sb2cocGFyc2VBcnIpO1xuLy8gY29uc29sZS5sb2coX2FycmF5KTtcbi8vIGNvbnNvbGUubG9nKHNodWZmbGUpO1xuXG4vKipcbiAqIF9kYXRlXG4gKi9cbi8vIGNvbnNvbGUubG9nKHF1ZXJ5VGltZXpvbmVUaW1lKC0yLCAnMjAxOC0xMC0yMCcpKTtcblxuIC8qKlxuICAqIF9sb2NhdGlvblxuICAqL1xuLy8gY29uc29sZS5sb2cobm9ybWFsaXplU2VhcmNoKCdtb2RlbFR5cGVDb2RlJywgJ2hhc2gnKSk7XG5cblxuLyoqXG4gKiB0aW1lcmRcbiAqL1xuZml4ZWRUaW1lcmQoMjAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygyMyk7XG59KVxuIFxuLyoqXG4gKiBfbnVtYmVyXG4gKi9cbi8vIGNvbnNvbGUubG9nKF9udW1iZXIuY29udmVydFRIU1NlcGFyYXRvcignJykpO1xuLy8gY29uc29sZS5sb2coX251bWJlci5jb252ZXJ0UGVyY2VudCgnMS4wNDU2NDUnLCAwKSk7XG4vLyBjb25zb2xlLmxvZyhfbnVtYmVyLmNvbnZlcnRGaXhlZCgnenp6eicsIDMpKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==