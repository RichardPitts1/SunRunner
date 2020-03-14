module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/consumer/consumer.css":
/*!***********************************!*\
  !*** ./src/consumer/consumer.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consumer_consumer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consumer/consumer.css */ "./src/consumer/consumer.css");
/* harmony import */ var _consumer_consumer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_consumer_consumer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_consumer_dock_consumer_dock_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/consumer-dock/consumer-dock.css */ "./src/shared/consumer-dock/consumer-dock.css");
/* harmony import */ var _shared_consumer_dock_consumer_dock_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_consumer_dock_consumer_dock_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_consumer_financials_buttons_balance_button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/balance-button.css */ "./src/shared/consumer-financials-buttons/balance-button.css");
/* harmony import */ var _shared_consumer_financials_buttons_balance_button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shared_consumer_financials_buttons_balance_button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_tree_button_tree_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tree-button/tree-button.css */ "./src/shared/tree-button/tree-button.css");
/* harmony import */ var _shared_tree_button_tree_button_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shared_tree_button_tree_button_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_lawyers_button_lawyers_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button.css */ "./src/shared/lawyers-button/lawyers-button.css");
/* harmony import */ var _shared_lawyers_button_lawyers_button_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shared_lawyers_button_lawyers_button_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_doctors_button_doctors_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button.css */ "./src/shared/doctors-button/doctors-button.css");
/* harmony import */ var _shared_doctors_button_doctors_button_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shared_doctors_button_doctors_button_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
var _jsxFileName = "/Users/websites/Documents/SunRunner/src/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// pages/_app.js









const store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["default"]);
function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNews */ "./src/reducers/isNews.js");
/* harmony import */ var _isDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDashboard */ "./src/reducers/isDashboard.js");
/* harmony import */ var _isNextTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNextTemplate */ "./src/reducers/isNextTemplate.js");
/* harmony import */ var _isPreviousTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isPreviousTemplate */ "./src/reducers/isPreviousTemplate.js");
/* harmony import */ var _isBalloon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isBalloon.js */ "./src/reducers/isBalloon.js");
/* harmony import */ var _isNewsBalloon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isNewsBalloon */ "./src/reducers/isNewsBalloon.js");
/* harmony import */ var _isNewsContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isNewsContent */ "./src/reducers/isNewsContent.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);








const allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_7__["combineReducers"])({
  isNews: _isNews__WEBPACK_IMPORTED_MODULE_0__["default"],
  isDashboard: _isDashboard__WEBPACK_IMPORTED_MODULE_1__["default"],
  isNextTemplate: _isNextTemplate__WEBPACK_IMPORTED_MODULE_2__["default"],
  isPreviousTemplate: _isPreviousTemplate__WEBPACK_IMPORTED_MODULE_3__["default"],
  isBalloon: _isBalloon_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  isNewsBalloon: _isNewsBalloon__WEBPACK_IMPORTED_MODULE_5__["default"],
  isNewsContent: _isNewsContent__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

/***/ }),

/***/ "./src/reducers/isBalloon.js":
/*!***********************************!*\
  !*** ./src/reducers/isBalloon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isBalloon = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_BALLOON':
      return state = true;

    case 'CLICKED_BALLOON2':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isBalloon);

/***/ }),

/***/ "./src/reducers/isDashboard.js":
/*!*************************************!*\
  !*** ./src/reducers/isDashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isDashboard = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_DASHBOARD':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isDashboard);

/***/ }),

/***/ "./src/reducers/isNews.js":
/*!********************************!*\
  !*** ./src/reducers/isNews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNews = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_NEWS':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return 1;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNews);

/***/ }),

/***/ "./src/reducers/isNewsBalloon.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsBalloon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsBalloon = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_NEWS_BALLOON':
      return state = true;

    case 'CLICKED_NEWS_BALLOON2':
      return state = false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsBalloon);

/***/ }),

/***/ "./src/reducers/isNewsContent.js":
/*!***************************************!*\
  !*** ./src/reducers/isNewsContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNewsContent = (state = " ", action) => {
  switch (action.type) {
    case 'IS_NEWS_CONTENT':
      console.log("IsNewContent hit");
      state = action.inputText;
      console.log(state);
      return state;

    case 'IS_NEWS_CONTENT2':
      return state;

    default:
      return 2;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNewsContent); // Action:
// export const isNewsContent = (inputText) => {
//     return 
//         type: 'IS_NEWS_CONTENT',
//         inputText: inputText
//     }
// }
// const isNewsContent = (state = "", action) => {
//     switch (action.type) {
//         case 'IS_NEWS_CONTENT':
//             console.log("IsNewContent hit");
//             let inputValue = action.newsContent;
//             state = inputValue;    
//             return state;
//         case 'IS_NEWS_CONTENT2':
//             return state
//         default: 
//             return 2;
//     }
// };
// export default isNewsContent;

/***/ }),

/***/ "./src/reducers/isNextTemplate.js":
/*!****************************************!*\
  !*** ./src/reducers/isNextTemplate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNextTemplate = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_NEXT_TEMPLATE':
      return state = true;

    case 'CLICKED_NEXT_TEMPLATE2':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNextTemplate);

/***/ }),

/***/ "./src/reducers/isPreviousTemplate.js":
/*!********************************************!*\
  !*** ./src/reducers/isPreviousTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isPreviousTemplate = (state = false, action) => {
  switch (action.type) {
    case 'CLICKED_PREVIOUS_TEMPLATE':
      return state = true;

    case 'CLICKED_PREVIOUS_TEMPLATE2':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isPreviousTemplate);

/***/ }),

/***/ "./src/shared/consumer-dock/consumer-dock.css":
/*!****************************************************!*\
  !*** ./src/shared/consumer-dock/consumer-dock.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/consumer-financials-buttons/balance-button.css":
/*!*******************************************************************!*\
  !*** ./src/shared/consumer-financials-buttons/balance-button.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/doctors-button/doctors-button.css":
/*!******************************************************!*\
  !*** ./src/shared/doctors-button/doctors-button.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/lawyers-button/lawyers-button.css":
/*!******************************************************!*\
  !*** ./src/shared/lawyers-button/lawyers-button.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/tree-button/tree-button.css":
/*!************************************************!*\
  !*** ./src/shared/tree-button/tree-button.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map