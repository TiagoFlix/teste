"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/userContext/index.tsx":
/*!********************************************!*\
  !*** ./src/contexts/userContext/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsersContext\": function() { return /* binding */ UsersContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nvar Actions = {\n    NewUser: function(State, Action) {\n        var user = Action.payload;\n        var storeData = function(value) {\n            localStorage.setItem('@storage_users', JSON.stringify(value));\n        };\n        var newListUsers = _toConsumableArray(State.users).concat([\n            user\n        ]);\n        storeData(newListUsers);\n        return _objectSpread({\n        }, State, {\n            users: newListUsers\n        });\n    },\n    DeleteUser: function(State, Action) {\n        var user = Action.payload;\n        var storeData = function(value) {\n            localStorage.setItem('@storage_users', JSON.stringify(value));\n        };\n        var deleteItemList = State.users.filter(function(userStorage) {\n            return userStorage.cpf !== user.cpf;\n        });\n        storeData(deleteItemList);\n        return _objectSpread({\n        }, State, {\n            users: deleteItemList\n        });\n    },\n    SetInitialState: function(State, Action) {\n        return _objectSpread({\n        }, State, {\n            users: [\n                Action.payload\n            ]\n        });\n    }\n};\nvar initialState = {\n    users: []\n};\nvar UsersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialState,\n    dispatch: function() {\n        return null;\n    }\n});\nfunction UserProvider(param) {\n    var children = param.children;\n    var reducer = function reducer(state, action) {\n        var fn = Actions[action.type];\n        return fn ? fn(state, action) : state;\n    };\n    var getUsers = function getUsers() {\n        try {\n            var jsonValue = localStorage.getItem('@storage_users');\n            return jsonValue != null ? JSON.parse(jsonValue) : [];\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState), state1 = ref[0], dispatch = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (function() {\n            var users = getUsers();\n            dispatch({\n                type: 'SetInitialState',\n                payload: users\n            });\n        })();\n    }, []);\n    //need typescript\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersContext.Provider, {\n        value: {\n            state: state1,\n            dispatch: dispatch\n        },\n        __source: {\n            fileName: \"C:\\\\old\\\\lean_test\\\\my-app\\\\src\\\\contexts\\\\userContext\\\\index.tsx\",\n            lineNumber: 106,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(UserProvider, \"fPKvVo1WePSSkqBu6pd5SIJ+qm8=\");\n_c = UserProvider;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmpGLEdBQUssQ0FBQ0csT0FBTyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFQQSxRQUFRQyxDQUFBQSxLQUFnQixFQUFFQyxNQUFrQixFQUFhLENBQUM7UUFDdEQsR0FBSyxDQUFDQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBTztRQUUzQixHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQWEsRUFBSyxDQUFDO1lBQ2xDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFnQixpQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLEtBQUs7UUFDL0QsQ0FBQztRQUVELEdBQUssQ0FBQ0ssWUFBWSxzQkFBZVYsS0FBSyxDQUFDVyxLQUFLLFNBQWYsQ0FBQztZQUFnQlQsSUFBSTtRQUFBLENBQUM7UUFDbkRFLFNBQVMsQ0FBQ00sWUFBWTtRQUV0QixNQUFNO1dBQ0NWLEtBQUs7WUFDUlcsS0FBSyxFQUFFRCxZQUFZOztJQUUzQixDQUFDO0lBQ0RFLFVBQVUsRUFBVkEsUUFBUSxDQUFHWixLQUFnQixFQUFFQyxNQUFrQixFQUFhLENBQUM7UUFDekQsR0FBSyxDQUFDQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBTztRQUUzQixHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQWEsRUFBSyxDQUFDO1lBQ2xDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFnQixpQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLEtBQUs7UUFDL0QsQ0FBQztRQUNELEdBQUssQ0FBQ1EsY0FBYyxHQUFHYixLQUFLLENBQUNXLEtBQUssQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBUEMsV0FBaUIsRUFBSyxDQUFDO1lBQzlELE1BQU0sQ0FBQ0EsV0FBVyxDQUFDQyxHQUFHLEtBQUtkLElBQUksQ0FBQ2MsR0FBRztRQUN2QyxDQUFDO1FBRURaLFNBQVMsQ0FBQ1MsY0FBYztRQUV4QixNQUFNO1dBQ0NiLEtBQUs7WUFDUlcsS0FBSyxFQUFFRSxjQUFjOztJQUU3QixDQUFDO0lBQ0RJLGVBQWUsRUFBZkEsUUFBUSxDQUFRakIsS0FBZ0IsRUFBRUMsTUFBa0IsRUFBYSxDQUFDO1FBQzlELE1BQU07V0FDQ0QsS0FBSztZQUNSVyxLQUFLLEVBQUUsQ0FBQ1Y7Z0JBQUFBLE1BQU0sQ0FBQ0UsT0FBTztZQUFBLENBQUM7O0lBRS9CLENBQUM7QUFFTCxDQUFDO0FBRUQsR0FBSyxDQUFDZSxZQUFZLEdBQWMsQ0FBQztJQUM3QlAsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFTSxHQUFLLENBQUNRLFlBQVksaUJBQUd2QixvREFBYSxDQUF3RCxDQUFDO0lBQUN3QixLQUFLLEVBQUVGLFlBQVk7SUFBRUcsUUFBUSxFQUFFLFFBQVE7UUFBRixNQUFNLENBQU4sSUFBSTs7QUFBQyxDQUFDO0FBRXZJLFNBQVNDLFlBQVksQ0FBQyxLQUE0QixFQUFFLENBQUM7UUFBN0JDLFFBQVEsR0FBVixLQUE0QixDQUExQkEsUUFBUTtRQUUxQkMsT0FBTyxHQUFoQixRQUFRLENBQUNBLE9BQU8sQ0FBQ0osS0FBZ0IsRUFBRUssTUFBa0IsRUFBRSxDQUFDO1FBQ3BELEdBQUssQ0FBQ0MsRUFBRSxHQUFHNUIsT0FBTyxDQUFDMkIsTUFBTSxDQUFDRSxJQUFJO1FBQzlCLE1BQU0sQ0FBQ0QsRUFBRSxHQUFHQSxFQUFFLENBQUNOLEtBQUssRUFBRUssTUFBTSxJQUFJTCxLQUFLO0lBQ3pDLENBQUM7UUFJUVEsUUFBUSxHQUFqQixRQUFRLENBQUNBLFFBQVEsR0FBRyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxDQUFDO1lBQ0QsR0FBSyxDQUFDQyxTQUFTLEdBQUd2QixZQUFZLENBQUN3QixPQUFPLENBQUMsQ0FBZ0I7WUFDdkQsTUFBTSxDQUFDRCxTQUFTLElBQUksSUFBSSxHQUFHckIsSUFBSSxDQUFDdUIsS0FBSyxDQUFDRixTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxLQUFLLEVBQUVHLENBQUMsRUFBRSxDQUFDO1lBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDOztJQVRELEdBQUssQ0FBcUJyQyxHQUFpQyxHQUFqQ0EsaURBQVUsQ0FBQzZCLE9BQU8sRUFBRU4sWUFBWSxHQUFuREUsTUFBSyxHQUFjekIsR0FBaUMsS0FBN0MwQixRQUFRLEdBQUkxQixHQUFpQztJQVczREUsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztTQUNaLFFBQVEsR0FBRixDQUFDO1lBQ0osR0FBSyxDQUFDYyxLQUFLLEdBQUdpQixRQUFRO1lBRXRCUCxRQUFRLENBQ0osQ0FBQztnQkFDR00sSUFBSSxFQUFFLENBQWlCO2dCQUN2QnhCLE9BQU8sRUFBRVEsS0FBSztZQUNsQixDQUFDO1FBRVQsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxFQUFpQjtJQUNqQixNQUFNLHNFQUNEUSxZQUFZLENBQUNnQixRQUFRO1FBQUM5QixLQUFLLEVBQUUsQ0FBQztZQUFDZSxLQUFLLEVBQUxBLE1BQUs7WUFBRUMsUUFBUSxFQUFSQSxRQUFRO1FBQUMsQ0FBQzs7Ozs7OztrQkFDNUNFLFFBQVE7O0FBR3JCLENBQUM7R0FyQ2VELFlBQVk7S0FBWkEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvdXNlckNvbnRleHQvaW5kZXgudHN4PzIyNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIERpc3BhdGNoIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXInXHJcblxyXG5pbnRlcmZhY2UgUHJvdmlkZXJzUHJvcHMgeyBjaGlsZHJlbjogUmVhY3ROb2RlIH1cclxuXHJcbnR5cGUgVXNlclN0YXRlID0ge1xyXG4gICAgdXNlcnM6IFVzZXJbXSxcclxufVxyXG5cclxudHlwZSBVc2VyQWN0aW9uID1cclxuICAgIHwge1xyXG4gICAgICAgIHR5cGU6IFwiTmV3VXNlclwiO1xyXG4gICAgICAgIHBheWxvYWQ6IFVzZXI7XHJcbiAgICB9XHJcbiAgICB8IHtcclxuICAgICAgICB0eXBlOiBcIkRlbGV0ZVVzZXJcIjtcclxuICAgICAgICBwYXlsb2FkOiBVc2VyO1xyXG4gICAgfVxyXG4gICAgfCB7XHJcbiAgICAgICAgdHlwZTogXCJTZXRJbml0aWFsU3RhdGVcIjtcclxuICAgICAgICBwYXlsb2FkOiBVc2VyO1xyXG4gICAgfTtcclxuXHJcblxyXG5jb25zdCBBY3Rpb25zID0ge1xyXG4gICAgTmV3VXNlcihTdGF0ZTogVXNlclN0YXRlLCBBY3Rpb246IFVzZXJBY3Rpb24pOiBVc2VyU3RhdGUge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBBY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjb25zdCBzdG9yZURhdGEgPSAodmFsdWU6IFVzZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHN0b3JhZ2VfdXNlcnMnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdMaXN0VXNlcnM6IFVzZXJbXSA9IFsuLi5TdGF0ZS51c2VycywgdXNlcl1cclxuICAgICAgICBzdG9yZURhdGEobmV3TGlzdFVzZXJzKVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5TdGF0ZSxcclxuICAgICAgICAgICAgdXNlcnM6IG5ld0xpc3RVc2Vyc1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBEZWxldGVVc2VyKFN0YXRlOiBVc2VyU3RhdGUsIEFjdGlvbjogVXNlckFjdGlvbik6IFVzZXJTdGF0ZSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IEFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3JlRGF0YSA9ICh2YWx1ZTogVXNlcltdKSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdAc3RvcmFnZV91c2VycycsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVsZXRlSXRlbUxpc3QgPSBTdGF0ZS51c2Vycy5maWx0ZXIoKHVzZXJTdG9yYWdlOiBVc2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyU3RvcmFnZS5jcGYgIT09IHVzZXIuY3BmXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3RvcmVEYXRhKGRlbGV0ZUl0ZW1MaXN0KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5TdGF0ZSxcclxuICAgICAgICAgICAgdXNlcnM6IGRlbGV0ZUl0ZW1MaXN0LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgU2V0SW5pdGlhbFN0YXRlKFN0YXRlOiBVc2VyU3RhdGUsIEFjdGlvbjogVXNlckFjdGlvbik6IFVzZXJTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uU3RhdGUsXHJcbiAgICAgICAgICAgIHVzZXJzOiBbQWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcclxuICAgIHVzZXJzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2Vyc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PHsgc3RhdGU6IFVzZXJTdGF0ZTsgZGlzcGF0Y2g6IERpc3BhdGNoPFVzZXJBY3Rpb24+OyB9Pih7IHN0YXRlOiBpbml0aWFsU3RhdGUsIGRpc3BhdGNoOiAoKSA9PiBudWxsIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJQcm92aWRlcih7IGNoaWxkcmVuIH06IFByb3ZpZGVyc1Byb3BzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogVXNlclN0YXRlLCBhY3Rpb246IFVzZXJBY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBmbiA9IEFjdGlvbnNbYWN0aW9uLnR5cGVdXHJcbiAgICAgICAgcmV0dXJuIGZuID8gZm4oc3RhdGUsIGFjdGlvbikgOiBzdGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvblZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BzdG9yYWdlX3VzZXJzJylcclxuICAgICAgICAgICAgcmV0dXJuIGpzb25WYWx1ZSAhPSBudWxsID8gSlNPTi5wYXJzZShqc29uVmFsdWUpIDogW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZ2V0VXNlcnMoKVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NldEluaXRpYWxTdGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdXNlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vbmVlZCB0eXBlc2NyaXB0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2Vyc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19ID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlcnNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiQWN0aW9ucyIsIk5ld1VzZXIiLCJTdGF0ZSIsIkFjdGlvbiIsInVzZXIiLCJwYXlsb2FkIiwic3RvcmVEYXRhIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0xpc3RVc2VycyIsInVzZXJzIiwiRGVsZXRlVXNlciIsImRlbGV0ZUl0ZW1MaXN0IiwiZmlsdGVyIiwidXNlclN0b3JhZ2UiLCJjcGYiLCJTZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJVc2Vyc0NvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZm4iLCJ0eXBlIiwiZ2V0VXNlcnMiLCJqc29uVmFsdWUiLCJnZXRJdGVtIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/userContext/index.tsx\n");

/***/ })

});