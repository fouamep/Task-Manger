"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8abfe119690e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzAxOTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4YWJmZTExOTY5MGVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ \"(app-pages-browser)/./components/Navigation.tsx\");\n/* harmony import */ var _app_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/hooks/useMediaQuery */ \"(app-pages-browser)/./app/hooks/useMediaQuery.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const [Color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#fff\");\n    const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const colorIn = ()=>{\n        setColor(\"#FF4747\");\n        setTextColor(\"text-[#FF4747]\");\n    };\n    const colorOut = ()=>{\n        setColor(\"#fff\");\n        setTextColor(\"text-[#FFF]\");\n    };\n    const isAboveMediumScreens = (0,_app_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(min-width: 1024px)\");\n    const { signOut } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useClerk)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return(// <nav className=' bg-[#212022] w-[268px] flex flex-col place-content-center items-center '>\n    //     <div>gg</div>\n    //     <div>ff</div>\n    //     <div>fd</div>\n    // </nav>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isAboveMediumScreens ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \" bg-[#212022] rounded-3xl border border-[#436BF4]/[0.5] w-[300px] flex flex-col  py-[50px] justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex place-content-center w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/AllTasks\",\n                        className: \" font-extrabold text-[40px] tracking-[7.5px] px-[30px]\",\n                        children: \"Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex flex-col justify-between w-full \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        signOut(()=>{\n                            router.push(\"/signin\");\n                        });\n                    },\n                    onMouseEnter: colorIn,\n                    onMouseLeave: colorOut,\n                    className: \" px-[30px] flex space-x-[10px] items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: \"20\",\n                            height: \"20\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M10.001 13.375L13.376 10M13.376 10L10.001 6.625M13.376 10H1.00098M1.00098 4.65402V4.60022C1.00098 3.3401 1.00098 2.70957 1.24621 2.22827C1.46193 1.80491 1.80588 1.46095 2.22925 1.24524C2.71055 1 3.34108 1 4.6012 1H15.4012C16.6613 1 17.2905 1 17.7718 1.24524C18.1952 1.46095 18.5403 1.80491 18.756 2.22827C19.001 2.7091 19.001 3.33887 19.001 4.59652V15.404C19.001 16.6617 19.001 17.2905 18.756 17.7714C18.5403 18.1947 18.1952 18.5393 17.7718 18.755C17.291 19 16.6621 19 15.4045 19H4.5975C3.33984 19 2.71008 19 2.22925 18.755C1.80588 18.5393 1.46193 18.1944 1.24621 17.771C1.00098 17.2897 1.00098 16.6601 1.00098 15.4V15.3438\",\n                                stroke: Color,\n                                strokeWidth: \"2\",\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\"\n                            }, void 0, false, {\n                                fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \" text-[20px] \".concat(textColor, \" font-medium leading-[24px] font-Poppins\"),\n                            children: \"Log Out\"\n                        }, void 0, false, {\n                            fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/nfs/sgoinfre/goinfre/Perso/fbouanan/Task-Manger/components/Sidebar.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined) : \"\"\n    }, void 0, false));\n};\n_s(Sidebar, \"Wl5DNzA2GIEQMuj7Xe5QZ5pmzcI=\", false, function() {\n    return [\n        _app_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useClerk,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNGO0FBQ2lCO0FBQ3pCO0FBQ1k7QUFDRztBQUc1QyxNQUFNTyxVQUFVOztJQUNaLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVcsVUFBVTtRQUNaSCxTQUFTO1FBQ1RFLGFBQWE7SUFDakI7SUFDQSxNQUFNRSxXQUFXO1FBQ2JKLFNBQVM7UUFDVEUsYUFBYTtJQUNqQjtJQUNBLE1BQU1HLHVCQUF1Qlgsb0VBQWFBLENBQUM7SUFFM0MsTUFBTSxFQUFFWSxPQUFPLEVBQUUsR0FBR1YsdURBQVFBO0lBQzVCLE1BQU1XLFNBQVNWLDBEQUFTQTtJQUV4QixPQUNBLDZGQUE2RjtJQUM3RixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixTQUFTO2tCQUNUO2tCQUNLUSxxQ0FDRyw4REFBQ0c7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDZCxrREFBSUE7d0JBQUNnQixNQUFNO3dCQUFhRixXQUFVO2tDQUF5RDs7Ozs7Ozs7Ozs7OEJBRWhHLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ2hCLG1EQUFVQTs7Ozs7Ozs7Ozs4QkFFZiw4REFBQ21CO29CQUFPQyxTQUFTO3dCQUFPUCxRQUFROzRCQUFPQyxPQUFPTyxJQUFJLENBQUM7d0JBQVU7b0JBQUU7b0JBQUdDLGNBQWNaO29CQUFTYSxjQUFjWjtvQkFBVUssV0FBVTs7c0NBQ3ZILDhEQUFDUTs0QkFBSUMsT0FBTTs0QkFBNkJDLE9BQU07NEJBQUtDLFFBQU87NEJBQUtDLFNBQVE7NEJBQVlDLE1BQUs7c0NBQ3BGLDRFQUFDQztnQ0FBS0MsR0FBRTtnQ0FBa25CQyxRQUFRMUI7Z0NBQU8yQixhQUFZO2dDQUFJQyxlQUFjO2dDQUFRQyxnQkFBZTs7Ozs7Ozs7Ozs7c0NBRWxzQiw4REFBQ0M7NEJBQUVwQixXQUFXLGdCQUEwQixPQUFWUixXQUFVO3NDQUEyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSTNGOztBQUdaO0dBMUNNSDs7UUFXMkJKLGdFQUFhQTtRQUV0QkUsbURBQVFBO1FBQ2JDLHNEQUFTQTs7O0tBZHRCQztBQTRDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIudHN4PzZiYTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQC9hcHAvaG9va3MvdXNlTWVkaWFRdWVyeSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlQ2xlcmsgfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgTW9iaWxlSGVhZGVyQmFyIGZyb20gJy4vTW9iaWxlSGVhZGVyQmFyJztcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBbQ29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiI2ZmZlwiKTtcbiAgICBjb25zdCBbdGV4dENvbG9yLCBzZXRUZXh0Q29sb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgY29sb3JJbiA9ICgpID0+IHtcbiAgICAgICAgc2V0Q29sb3IoXCIjRkY0NzQ3XCIpXG4gICAgICAgIHNldFRleHRDb2xvcihcInRleHQtWyNGRjQ3NDddXCIpXG4gICAgfVxuICAgIGNvbnN0IGNvbG9yT3V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRDb2xvcihcIiNmZmZcIilcbiAgICAgICAgc2V0VGV4dENvbG9yKFwidGV4dC1bI0ZGRl1cIilcbiAgICB9XG4gICAgY29uc3QgaXNBYm92ZU1lZGl1bVNjcmVlbnMgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcblxuICAgIGNvbnN0IHsgc2lnbk91dCB9ID0gdXNlQ2xlcmsoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgLy8gPG5hdiBjbGFzc05hbWU9JyBiZy1bIzIxMjAyMl0gdy1bMjY4cHhdIGZsZXggZmxleC1jb2wgcGxhY2UtY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyICc+XG4gICAgLy8gICAgIDxkaXY+Z2c8L2Rpdj5cbiAgICAvLyAgICAgPGRpdj5mZjwvZGl2PlxuICAgIC8vICAgICA8ZGl2PmZkPC9kaXY+XG4gICAgLy8gPC9uYXY+XG4gICAgPD5cbiAgICAgICAge2lzQWJvdmVNZWRpdW1TY3JlZW5zID8gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9JyBiZy1bIzIxMjAyMl0gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1bIzQzNkJGNF0vWzAuNV0gdy1bMzAwcHhdIGZsZXggZmxleC1jb2wgIHB5LVs1MHB4XSBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZmxleCBwbGFjZS1jb250ZW50LWNlbnRlciB3LWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9BbGxUYXNrc1wifSBjbGFzc05hbWU9JyBmb250LWV4dHJhYm9sZCB0ZXh0LVs0MHB4XSB0cmFja2luZy1bNy41cHhdIHB4LVszMHB4XSc+VGFza3M8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgJz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NpZ25PdXQoKCkgPT4ge3JvdXRlci5wdXNoKFwiL3NpZ25pblwiKX0pfX0gb25Nb3VzZUVudGVyPXtjb2xvcklufSBvbk1vdXNlTGVhdmU9e2NvbG9yT3V0fSBjbGFzc05hbWU9JyBweC1bMzBweF0gZmxleCBzcGFjZS14LVsxMHB4XSBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuMDAxIDEzLjM3NUwxMy4zNzYgMTBNMTMuMzc2IDEwTDEwLjAwMSA2LjYyNU0xMy4zNzYgMTBIMS4wMDA5OE0xLjAwMDk4IDQuNjU0MDJWNC42MDAyMkMxLjAwMDk4IDMuMzQwMSAxLjAwMDk4IDIuNzA5NTcgMS4yNDYyMSAyLjIyODI3QzEuNDYxOTMgMS44MDQ5MSAxLjgwNTg4IDEuNDYwOTUgMi4yMjkyNSAxLjI0NTI0QzIuNzEwNTUgMSAzLjM0MTA4IDEgNC42MDEyIDFIMTUuNDAxMkMxNi42NjEzIDEgMTcuMjkwNSAxIDE3Ljc3MTggMS4yNDUyNEMxOC4xOTUyIDEuNDYwOTUgMTguNTQwMyAxLjgwNDkxIDE4Ljc1NiAyLjIyODI3QzE5LjAwMSAyLjcwOTEgMTkuMDAxIDMuMzM4ODcgMTkuMDAxIDQuNTk2NTJWMTUuNDA0QzE5LjAwMSAxNi42NjE3IDE5LjAwMSAxNy4yOTA1IDE4Ljc1NiAxNy43NzE0QzE4LjU0MDMgMTguMTk0NyAxOC4xOTUyIDE4LjUzOTMgMTcuNzcxOCAxOC43NTVDMTcuMjkxIDE5IDE2LjY2MjEgMTkgMTUuNDA0NSAxOUg0LjU5NzVDMy4zMzk4NCAxOSAyLjcxMDA4IDE5IDIuMjI5MjUgMTguNzU1QzEuODA1ODggMTguNTM5MyAxLjQ2MTkzIDE4LjE5NDQgMS4yNDYyMSAxNy43NzFDMS4wMDA5OCAxNy4yODk3IDEuMDAwOTggMTYuNjYwMSAxLjAwMDk4IDE1LjRWMTUuMzQzOFwiIHN0cm9rZT17Q29sb3J9IHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPiBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgIHRleHQtWzIwcHhdICR7dGV4dENvbG9yfSBmb250LW1lZGl1bSBsZWFkaW5nLVsyNHB4XSBmb250LVBvcHBpbnNgfT5Mb2cgT3V0PC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgKTogKFwiXCIpfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJ1c2VNZWRpYVF1ZXJ5IiwiTGluayIsInVzZUNsZXJrIiwidXNlUm91dGVyIiwiU2lkZWJhciIsIkNvbG9yIiwic2V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJzZXRUZXh0Q29sb3IiLCJjb2xvckluIiwiY29sb3JPdXQiLCJpc0Fib3ZlTWVkaXVtU2NyZWVucyIsInNpZ25PdXQiLCJyb3V0ZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});