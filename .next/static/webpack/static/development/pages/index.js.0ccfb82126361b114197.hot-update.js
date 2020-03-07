webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/shared/news-button/news-button.js":
/*!***********************************************!*\
  !*** ./src/shared/news-button/news-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_js_MyProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/js/MyProvider */ "./src/components/js/MyProvider.js");
/* harmony import */ var _components_js_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/js/App */ "./src/components/js/App.js");
var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/shared/news-button/news-button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class NewsButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    document.addEventListener("mouseover", function () {
      let newsButton = document.querySelector(".news-button");
      newsButton.classList.add("news-hovered");
    });
  }

  render() {
    return __jsx(_components_js_MyProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-135529581" + " " + "news-button-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-135529581" + " " + "news-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "News"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "135529581",
      __self: this
    }, ".news-button-parent.jsx-135529581{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.news-button.jsx-135529581{width:120px;font-family:Montserrat;font-size:25px;padding-left:20px;height:45px;position:relative;left:125px;bottom:1358px;background-color:black;color:white;border:black;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;background:linear-gradient(to bottom,rgb(212,212,245),rgb(47,164,231));-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:none;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.news-hovered.jsx-135529581{cursor:url('/balloon-wrench.svg');-webkit-transform:scale(1.23);-ms-transform:scale(1.23);transform:scale(1.23);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3NoYXJlZC9uZXdzLWJ1dHRvbi9uZXdzLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBR2tDLEFBTUQsQUFxQnNCLFlBcEJYLHNCQXFCRCxDQXBCUCxlQUNHLGtCQUNOLE1BVE8sTUFVRCxrQkFDUCxXQUNHLEdBZ0JsQixXQWYyQix1QkFDWCxZQUNBLFNBZFcsSUFlRixrREFDRixtQkFDd0QsMEJBaEIvRSw2Q0FpQmlDLDZCQUNPLG9DQUN4QixZQUNZLGdHQUM1QiIsImZpbGUiOiIvVXNlcnMvd2Vic2l0ZXMvRG9jdW1lbnRzL09FQS1OZXh0L3NyYy9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE15UHJvdmlkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9qcy9NeVByb3ZpZGVyJztcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvanMvQXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBuZXdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzLWJ1dHRvblwiKVxuICAgICAgICAgICAgbmV3c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3cy1ob3ZlcmVkXCIpXG4gICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNeVByb3ZpZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uLXBhcmVudFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJuZXdzLWJ1dHRvblwiPk5ld3M8L2gxPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIC5uZXdzLWJ1dHRvbi1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm5ld3MtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMzU4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjEyLDIxMiwyNDUpLCByZ2IoNDcsIDE2NCwgMjMxKSk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uZXdzLWhvdmVyZWQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHVybCgnL2JhbGxvb24td3JlbmNoLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L015UHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5OZXdzQnV0dG9uLmNvbnRleHRUeXBlID0gTXlDb250ZXh0OyJdfQ== */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/shared/news-button/news-button.js */")));
  }

}
NewsButton.contextType = _components_js_App__WEBPACK_IMPORTED_MODULE_3__["MyContext"];

/***/ })

})
//# sourceMappingURL=index.js.0ccfb82126361b114197.hot-update.js.map