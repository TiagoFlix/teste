/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/elements/card/index.tsx":
/*!********************************************!*\
  !*** ./components/elements/card/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_contexts_userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/contexts/userContext */ \"./src/contexts/userContext/index.tsx\");\n\n\n\nfunction Card(user) {\n    const phoneReplaced = user.phone.replace(/[^0-9\\.]+/g, \"\");\n    const { dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_contexts_userContext__WEBPACK_IMPORTED_MODULE_2__.UsersContext);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: `master_container animate__animated animate__fadeInRight animate__delay-4s `,\n        __source: {\n            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"properties\",\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 41\n                        },\n                        __self: this,\n                        children: \"Nome:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: user.name\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"properties\",\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 41\n                        },\n                        __self: this,\n                        children: \"Email:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: `mailto:${user.email}`,\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            __source: {\n                                fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 46\n                            },\n                            __self: this,\n                            children: user.email\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"properties\",\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 41\n                        },\n                        __self: this,\n                        children: \"Telefone:\"\n                    }),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: `tel:${parseInt(phoneReplaced)}`,\n                        target: \"_blank\",\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 64\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            __source: {\n                                fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 123\n                            },\n                            __self: this,\n                            children: user.phone\n                        })\n                    }),\n                    \" \"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"properties\",\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 41\n                        },\n                        __self: this,\n                        children: \"CPF:\"\n                    }),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 59\n                        },\n                        __self: this,\n                        children: user.cpf\n                    }),\n                    \" \"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"excluir\",\n                onClick: ()=>{\n                    dispatch === null || dispatch === void 0 ? void 0 : dispatch({\n                        type: 'DeleteUser',\n                        payload: user\n                    });\n                },\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                    \"aria-hidden\": \"true\",\n                    focusable: \"false\",\n                    \"data-prefix\": \"fas\",\n                    \"data-icon\": \"trash\",\n                    className: \"svg-inline--fa fa-trash fa-w-14\",\n                    role: \"img\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    viewBox: \"0 0 448 512\",\n                    __source: {\n                        fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                        fill: \"currentColor\",\n                        d: \"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z\",\n                        __source: {\n                            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\components\\\\elements\\\\card\\\\index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 207\n                        },\n                        __self: this\n                    })\n                })\n            })\n        ]\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL2NhcmQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDa0M7QUFDOEI7QUFHekQsU0FBU0UsSUFBSSxDQUFDQyxJQUFVLEVBQUUsQ0FBQztJQUM5QixLQUFLLENBQUNDLGFBQWEsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sZUFBZSxDQUFFO0lBQ3pELEtBQUssQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUdQLGlEQUFVLENBQUNDLG1FQUFZO0lBRTVDLE1BQU0sdUVBQ0RPLENBQUc7UUFBQ0MsU0FBUyxHQUFHLDBFQUEwRTs7Ozs7Ozs7a0ZBQ3RGRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7eUZBQUVDLENBQUk7Ozs7Ozs7a0NBQUMsQ0FBSzs7eUZBQ3RDQSxDQUFJOzs7Ozs7O2tDQUFFUCxJQUFJLENBQUNRLElBQUk7Ozs7a0ZBQ2ZILENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7Ozt5RkFBRUMsQ0FBSTs7Ozs7OztrQ0FBQyxDQUFNOzt5RkFDdkNFLENBQUM7d0JBQUNDLElBQUksR0FBRyxPQUFPLEVBQUVWLElBQUksQ0FBQ1csS0FBSzs7Ozs7Ozt1R0FBS0osQ0FBSTs7Ozs7OztzQ0FBRVAsSUFBSSxDQUFDVyxLQUFLOzs7OztrRkFDakROLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7Ozt5RkFBRUMsQ0FBSTs7Ozs7OztrQ0FBQyxDQUFTOztvQkFBTyxDQUFDO3lGQUFDRSxDQUFDO3dCQUFDQyxJQUFJLEdBQUcsSUFBSSxFQUFFRSxRQUFRLENBQUNYLGFBQWE7d0JBQUtZLE1BQU0sRUFBQyxDQUFROzs7Ozs7O3VHQUFFTixDQUFJOzs7Ozs7O3NDQUFFUCxJQUFJLENBQUNFLEtBQUs7OztvQkFBWSxDQUFDOzs7a0ZBQzNJRyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7eUZBQUVDLENBQUk7Ozs7Ozs7a0NBQUMsQ0FBSTs7b0JBQU8sQ0FBQzt5RkFBQ0EsQ0FBSTs7Ozs7OztrQ0FBR1AsSUFBSSxDQUFDYyxHQUFHOztvQkFBUSxDQUFDOzs7aUZBQ3RFVCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUztnQkFBQ1MsT0FBTyxNQUFRLENBQUM7b0JBQ3JDWCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUtDLEdBTERBLElBQUksQ0FBSkEsQ0FLQyxHQUxEQSxRQUFRLENBQ0osQ0FBQzt3QkFDR1ksSUFBSSxFQUFFLENBQVk7d0JBQ2xCQyxPQUFPLEVBQUVqQixJQUFJO29CQUNqQixDQUFDO2dCQUVULENBQUM7Ozs7Ozs7K0ZBQ0lrQixDQUFHO29CQUFDQyxDQUFXLGNBQUMsQ0FBTTtvQkFBQ0MsU0FBUyxFQUFDLENBQU87b0JBQUNDLENBQVcsY0FBQyxDQUFLO29CQUFDQyxDQUFTLFlBQUMsQ0FBTztvQkFBQ2hCLFNBQVMsRUFBQyxDQUFpQztvQkFBQ2lCLElBQUksRUFBQyxDQUFLO29CQUFDQyxLQUFLLEVBQUMsQ0FBNEI7b0JBQUNDLE9BQU8sRUFBQyxDQUFhOzs7Ozs7O21HQUFFQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzt3QkFBQ0MsQ0FBQyxFQUFDLENBQTRPOzs7Ozs7Ozs7Ozs7QUFLdGQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYW53b3JrdGVzdGV0aWFnb2RpYXNtYWNpZWwvLi9jb21wb25lbnRzL2VsZW1lbnRzL2NhcmQvaW5kZXgudHN4PzNiMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL3NyYy9pbnRlcmZhY2VzL3VzZXInXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVXNlcnNDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRleHRzL3VzZXJDb250ZXh0J1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnN0IHBob25lUmVwbGFjZWQgPSB1c2VyLnBob25lLnJlcGxhY2UoL1teMC05XFwuXSsvZywgXCJcIilcclxuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoVXNlcnNDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFzdGVyX2NvbnRhaW5lciBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5SaWdodCBhbmltYXRlX19kZWxheS00cyBgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0aWVzXCI+PHNwYW4+Tm9tZTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPnt1c2VyLm5hbWV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXNcIj48c3Bhbj5FbWFpbDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9PjxzcGFuPnt1c2VyLmVtYWlsfTwvc3Bhbj48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydGllc1wiPjxzcGFuPlRlbGVmb25lOjwvc3Bhbj4gPGEgaHJlZj17YHRlbDoke3BhcnNlSW50KHBob25lUmVwbGFjZWQpfWB9IHRhcmdldD1cIl9ibGFua1wiPjxzcGFuPnt1c2VyLnBob25lfTwvc3Bhbj48L2E+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXNcIj48c3Bhbj5DUEY6PC9zcGFuPiA8c3BhbiA+e3VzZXIuY3BmfTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjbHVpclwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoPy4oXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRGVsZXRlVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHVzZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidHJhc2hcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS10cmFzaCBmYS13LTE0XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MzIgMzJIMzEybC05LjQtMTguN0EyNCAyNCAwIDAgMCAyODEuMSAwSDE2Ni44YTIzLjcyIDIzLjcyIDAgMCAwLTIxLjQgMTMuM0wxMzYgMzJIMTZBMTYgMTYgMCAwIDAgMCA0OHYzMmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZ6TTUzLjIgNDY3YTQ4IDQ4IDAgMCAwIDQ3LjkgNDVoMjQ1LjhhNDggNDggMCAwIDAgNDcuOS00NUw0MTYgMTI4SDMyelwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlVzZXJzQ29udGV4dCIsIkNhcmQiLCJ1c2VyIiwicGhvbmVSZXBsYWNlZCIsInBob25lIiwicmVwbGFjZSIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWUiLCJhIiwiaHJlZiIsImVtYWlsIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJjcGYiLCJvbkNsaWNrIiwidHlwZSIsInBheWxvYWQiLCJzdmciLCJhcmlhLWhpZGRlbiIsImZvY3VzYWJsZSIsImRhdGEtcHJlZml4IiwiZGF0YS1pY29uIiwicm9sZSIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJmaWxsIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/elements/card/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/elements/card */ \"./components/elements/card/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/contexts/userContext */ \"./src/contexts/userContext/index.tsx\");\n\n\n\n\n\nfunction HomePage() {\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_src_contexts_userContext__WEBPACK_IMPORTED_MODULE_4__.UsersContext);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"cadastrar-content container\",\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\pages\\\\index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: \"cadastrar\",\n                    href: \"/cadastro\",\n                    __source: {\n                        fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Cadastrar\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                id: \"card-list\",\n                __source: {\n                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\pages\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container\",\n                    __source: {\n                        fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        state && state.users.map(({ cpf , email , phone , name  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_elements_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                                name: name,\n                                email: email,\n                                phone: phone,\n                                cpf: cpf,\n                                __source: {\n                                    fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\pages\\\\index.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                },\n                                __self: this\n                            }, cpf)\n                        ),\n                        !state && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\pages\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 24\n                            },\n                            __self: this,\n                            children: \"Nada por aqui ;(\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvQjtBQUM4QjtBQUNoQjtBQUN3QjtBQUUzQyxRQUFRLENBQUNHLFFBQVEsR0FBRyxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEdBQUdILGlEQUFVLENBQUNDLG1FQUFZO0lBRXpDLE1BQU07O2lGQUVERyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNkI7Ozs7Ozs7K0ZBQ3pDQyxDQUFDO29CQUFDRCxTQUFTLEVBQUMsQ0FBVztvQkFBQ0UsSUFBSSxFQUFDLENBQVc7Ozs7Ozs7OEJBQUMsQ0FBUzs7O2lGQUdwREMsQ0FBTztnQkFBQ0MsRUFBRSxFQUFDLENBQVc7Ozs7Ozs7Z0dBQ3BCTCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7d0JBRXRCRixLQUFLLElBQUtBLEtBQUssQ0FBQ08sS0FBSyxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFDQyxHQUFHLEdBQUdDLEtBQUssR0FBR0MsS0FBSyxHQUFHQyxJQUFJLEVBQUUsQ0FBQyx3RUFDdkRoQiwyREFBSTtnQ0FFSGdCLElBQUksRUFBRUEsSUFBSTtnQ0FDVkYsS0FBSyxFQUFFQSxLQUFLO2dDQUNaQyxLQUFLLEVBQUVBLEtBQUs7Z0NBQ1pGLEdBQUcsRUFBRUEsR0FBRzs7Ozs7OzsrQkFKSEEsR0FBRzs7eUJBVVhULEtBQUsseUVBQU1hLENBQUM7Ozs7Ozs7c0NBQUMsQ0FBZ0I7Ozs7Ozs7QUFNMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYW53b3JrdGVzdGV0aWFnb2RpYXNtYWNpZWwvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbGVtZW50cy9jYXJkJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVc2Vyc0NvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFVzZXJzQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZGFzdHJhci1jb250ZW50IGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImNhZGFzdHJhclwiIGhyZWY9XCIvY2FkYXN0cm9cIj5DYWRhc3RyYXI8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJjYXJkLWxpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0ZSAmJiAgc3RhdGUudXNlcnMubWFwKCh7IGNwZiAsIGVtYWlsICwgcGhvbmUgLCBuYW1lICB9KSA9PiBcclxuICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjcGZ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgcGhvbmU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgY3BmPXtjcGZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIXN0YXRlICYmICg8cD5OYWRhIHBvciBhcXVpIDsoPC9wPilcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICApXHJcbn07Il0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VDb250ZXh0IiwiVXNlcnNDb250ZXh0IiwiSG9tZVBhZ2UiLCJzdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwic2VjdGlvbiIsImlkIiwidXNlcnMiLCJtYXAiLCJjcGYiLCJlbWFpbCIsInBob25lIiwibmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/contexts/userContext/index.tsx":
/*!********************************************!*\
  !*** ./src/contexts/userContext/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsersContext\": () => (/* binding */ UsersContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Actions = {\n    NewUser (State, Action) {\n        const user = Action.payload;\n        const storeData = (value)=>{\n            localStorage.setItem('@storage_users', JSON.stringify(value));\n        };\n        const newListUsers = [\n            ...State.users,\n            user\n        ];\n        storeData(newListUsers);\n        return {\n            ...State,\n            users: newListUsers\n        };\n    },\n    DeleteUser (State, Action) {\n        const user = Action.payload;\n        const storeData = (value)=>{\n            localStorage.setItem('@storage_users', JSON.stringify(value));\n        };\n        const deleteItemList = State.users.filter((userStorage)=>{\n            return userStorage.cpf !== user.cpf;\n        });\n        storeData(deleteItemList);\n        return {\n            ...State,\n            users: deleteItemList\n        };\n    },\n    SetInitialState (State, Action) {\n        return {\n            ...State,\n            users: [\n                Action.payload\n            ]\n        };\n    }\n};\nconst initialState = {\n    users: []\n};\nconst UsersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialState,\n    dispatch: ()=>null\n});\nfunction UserProvider({ children  }) {\n    function reducer(state, action) {\n        const fn = Actions[action.type];\n        return fn ? fn(state, action) : state;\n    }\n    const { 0: state1 , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    function getUsers() {\n        try {\n            const jsonValue = localStorage.getItem('@storage_users');\n            return jsonValue != null ? JSON.parse(jsonValue) : [];\n        } catch (e) {\n            console.log(e);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (()=>{\n            const users = getUsers();\n            dispatch({\n                type: 'SetInitialState',\n                payload: users\n            });\n        })();\n    }, []);\n    //need typescript\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersContext.Provider, {\n        value: {\n            state: state1,\n            dispatch\n        },\n        __source: {\n            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\src\\\\contexts\\\\userContext\\\\index.tsx\",\n            lineNumber: 105,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUY7QUF3QmpGLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFDQyxLQUFnQixFQUFFQyxNQUFrQixFQUFhLENBQUM7UUFDdEQsS0FBSyxDQUFDQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBTztRQUUzQixLQUFLLENBQUNDLFNBQVMsSUFBSUMsS0FBYSxHQUFLLENBQUM7WUFDbENDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQWdCLGlCQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osS0FBSztRQUMvRCxDQUFDO1FBRUQsS0FBSyxDQUFDSyxZQUFZLEdBQVcsQ0FBQztlQUFHVixLQUFLLENBQUNXLEtBQUs7WUFBRVQsSUFBSTtRQUFBLENBQUM7UUFDbkRFLFNBQVMsQ0FBQ00sWUFBWTtRQUV0QixNQUFNLENBQUMsQ0FBQztlQUNEVixLQUFLO1lBQ1JXLEtBQUssRUFBRUQsWUFBWTtRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUNERSxVQUFVLEVBQUNaLEtBQWdCLEVBQUVDLE1BQWtCLEVBQWEsQ0FBQztRQUN6RCxLQUFLLENBQUNDLElBQUksR0FBR0QsTUFBTSxDQUFDRSxPQUFPO1FBRTNCLEtBQUssQ0FBQ0MsU0FBUyxJQUFJQyxLQUFhLEdBQUssQ0FBQztZQUNsQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBZ0IsaUJBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixLQUFLO1FBQy9ELENBQUM7UUFDRCxLQUFLLENBQUNRLGNBQWMsR0FBR2IsS0FBSyxDQUFDVyxLQUFLLENBQUNHLE1BQU0sRUFBRUMsV0FBaUIsR0FBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQ0EsV0FBVyxDQUFDQyxHQUFHLEtBQUtkLElBQUksQ0FBQ2MsR0FBRztRQUN2QyxDQUFDO1FBRURaLFNBQVMsQ0FBQ1MsY0FBYztRQUV4QixNQUFNLENBQUMsQ0FBQztlQUNEYixLQUFLO1lBQ1JXLEtBQUssRUFBRUUsY0FBYztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUNESSxlQUFlLEVBQUNqQixLQUFnQixFQUFFQyxNQUFrQixFQUFhLENBQUM7UUFDOUQsTUFBTSxDQUFDLENBQUM7ZUFDREQsS0FBSztZQUNSVyxLQUFLLEVBQUUsQ0FBQ1Y7Z0JBQUFBLE1BQU0sQ0FBQ0UsT0FBTztZQUFBLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7QUFFTCxDQUFDO0FBRUQsS0FBSyxDQUFDZSxZQUFZLEdBQWMsQ0FBQztJQUM3QlAsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFTSxLQUFLLENBQUNRLFlBQVksaUJBQUd2QixvREFBYSxDQUF3RCxDQUFDO0lBQUN3QixLQUFLLEVBQUVGLFlBQVk7SUFBRUcsUUFBUSxNQUFRLElBQUk7QUFBQyxDQUFDO0FBRXZJLFNBQVNDLFlBQVksQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBaUIsQ0FBQyxFQUFFLENBQUM7YUFFL0NDLE9BQU8sQ0FBQ0osS0FBZ0IsRUFBRUssTUFBa0IsRUFBRSxDQUFDO1FBQ3BELEtBQUssQ0FBQ0MsRUFBRSxHQUFHNUIsT0FBTyxDQUFDMkIsTUFBTSxDQUFDRSxJQUFJO1FBQzlCLE1BQU0sQ0FBQ0QsRUFBRSxHQUFHQSxFQUFFLENBQUNOLEtBQUssRUFBRUssTUFBTSxJQUFJTCxLQUFLO0lBQ3pDLENBQUM7SUFFRCxLQUFLLE1BQUVBLE1BQUssTUFBRUMsUUFBUSxNQUFJMUIsaURBQVUsQ0FBQzZCLE9BQU8sRUFBRU4sWUFBWTthQUVqRFUsUUFBUSxHQUFHLENBQUM7UUFDakIsR0FBRyxDQUFDLENBQUM7WUFDRCxLQUFLLENBQUNDLFNBQVMsR0FBR3ZCLFlBQVksQ0FBQ3dCLE9BQU8sQ0FBQyxDQUFnQjtZQUN2RCxNQUFNLENBQUNELFNBQVMsSUFBSSxJQUFJLEdBQUdyQixJQUFJLENBQUN1QixLQUFLLENBQUNGLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLEtBQUssRUFBRUcsQ0FBQyxFQUFFLENBQUM7WUFDVEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFFRG5DLGdEQUFTLEtBQU8sQ0FBQzthQUNOLENBQUM7WUFDSixLQUFLLENBQUNjLEtBQUssR0FBR2lCLFFBQVE7WUFDdEJQLFFBQVEsQ0FDSixDQUFDO2dCQUNHTSxJQUFJLEVBQUUsQ0FBaUI7Z0JBQ3ZCeEIsT0FBTyxFQUFFUSxLQUFLO1lBQ2xCLENBQUM7UUFFVCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEVBQWlCO0lBQ2pCLE1BQU0sc0VBQ0RRLFlBQVksQ0FBQ2dCLFFBQVE7UUFBQzlCLEtBQUssRUFBRSxDQUFDO1lBQUNlLEtBQUssRUFBTEEsTUFBSztZQUFFQyxRQUFRO1FBQUMsQ0FBQzs7Ozs7OztrQkFDNUNFLFFBQVE7O0FBR3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFud29ya3Rlc3RldGlhZ29kaWFzbWFjaWVsLy4vc3JjL2NvbnRleHRzL3VzZXJDb250ZXh0L2luZGV4LnRzeD8yMjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCBEaXNwYXRjaCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3ZpZGVyc1Byb3BzIHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9XHJcblxyXG50eXBlIFVzZXJTdGF0ZSA9IHtcclxuICAgIHVzZXJzOiBVc2VyW10sXHJcbn1cclxuXHJcbnR5cGUgVXNlckFjdGlvbiA9XHJcbiAgICB8IHtcclxuICAgICAgICB0eXBlOiBcIk5ld1VzZXJcIjtcclxuICAgICAgICBwYXlsb2FkOiBVc2VyO1xyXG4gICAgfVxyXG4gICAgfCB7XHJcbiAgICAgICAgdHlwZTogXCJEZWxldGVVc2VyXCI7XHJcbiAgICAgICAgcGF5bG9hZDogVXNlcjtcclxuICAgIH1cclxuICAgIHwge1xyXG4gICAgICAgIHR5cGU6IFwiU2V0SW5pdGlhbFN0YXRlXCI7XHJcbiAgICAgICAgcGF5bG9hZDogVXNlcjtcclxuICAgIH07XHJcblxyXG5cclxuY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIE5ld1VzZXIoU3RhdGU6IFVzZXJTdGF0ZSwgQWN0aW9uOiBVc2VyQWN0aW9uKTogVXNlclN0YXRlIHtcclxuICAgICAgICBjb25zdCB1c2VyID0gQWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcmVEYXRhID0gKHZhbHVlOiBVc2VyW10pID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BzdG9yYWdlX3VzZXJzJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3TGlzdFVzZXJzOiBVc2VyW10gPSBbLi4uU3RhdGUudXNlcnMsIHVzZXJdXHJcbiAgICAgICAgc3RvcmVEYXRhKG5ld0xpc3RVc2VycylcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uU3RhdGUsXHJcbiAgICAgICAgICAgIHVzZXJzOiBuZXdMaXN0VXNlcnNcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgRGVsZXRlVXNlcihTdGF0ZTogVXNlclN0YXRlLCBBY3Rpb246IFVzZXJBY3Rpb24pOiBVc2VyU3RhdGUge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBBY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjb25zdCBzdG9yZURhdGEgPSAodmFsdWU6IFVzZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHN0b3JhZ2VfdXNlcnMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW1MaXN0ID0gU3RhdGUudXNlcnMuZmlsdGVyKCh1c2VyU3RvcmFnZTogVXNlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlclN0b3JhZ2UuY3BmICE9PSB1c2VyLmNwZlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHN0b3JlRGF0YShkZWxldGVJdGVtTGlzdClcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uU3RhdGUsXHJcbiAgICAgICAgICAgIHVzZXJzOiBkZWxldGVJdGVtTGlzdCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIFNldEluaXRpYWxTdGF0ZShTdGF0ZTogVXNlclN0YXRlLCBBY3Rpb246IFVzZXJBY3Rpb24pOiBVc2VyU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLlN0YXRlLFxyXG4gICAgICAgICAgICB1c2VyczogW0FjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XHJcbiAgICB1c2VyczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNlcnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7IHN0YXRlOiBVc2VyU3RhdGU7IGRpc3BhdGNoOiBEaXNwYXRjaDxVc2VyQWN0aW9uPjsgfT4oeyBzdGF0ZTogaW5pdGlhbFN0YXRlLCBkaXNwYXRjaDogKCkgPT4gbnVsbCB9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQcm92aWRlcnNQcm9wcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFVzZXJTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZm4gPSBBY3Rpb25zW2FjdGlvbi50eXBlXVxyXG4gICAgICAgIHJldHVybiBmbiA/IGZuKHN0YXRlLCBhY3Rpb24pIDogc3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25WYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdAc3RvcmFnZV91c2VycycpXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uVmFsdWUgIT0gbnVsbCA/IEpTT04ucGFyc2UoanNvblZhbHVlKSA6IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGdldFVzZXJzKClcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NldEluaXRpYWxTdGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdXNlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vbmVlZCB0eXBlc2NyaXB0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2Vyc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19ID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlcnNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiQWN0aW9ucyIsIk5ld1VzZXIiLCJTdGF0ZSIsIkFjdGlvbiIsInVzZXIiLCJwYXlsb2FkIiwic3RvcmVEYXRhIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0xpc3RVc2VycyIsInVzZXJzIiwiRGVsZXRlVXNlciIsImRlbGV0ZUl0ZW1MaXN0IiwiZmlsdGVyIiwidXNlclN0b3JhZ2UiLCJjcGYiLCJTZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJVc2Vyc0NvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZm4iLCJ0eXBlIiwiZ2V0VXNlcnMiLCJqc29uVmFsdWUiLCJnZXRJdGVtIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/userContext/index.tsx\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();