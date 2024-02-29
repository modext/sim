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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=ThemeProvider!=!./node_modules/@mui/material/index.js":
/*!***************************************************************************************!*\
  !*** __barrel_optimize__?names=ThemeProvider!=!./node_modules/@mui/material/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _Users_mac_Documents_asses2_sim_frontend_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _Users_mac_Documents_asses2_sim_frontend_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ "./node_modules/@mui/material/styles/index.js");



/***/ }),

/***/ "__barrel_optimize__?names=createTheme,useMediaQuery!=!./node_modules/@mui/material/index.js":
/*!***************************************************************************************************!*\
  !*** __barrel_optimize__?names=createTheme,useMediaQuery!=!./node_modules/@mui/material/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTheme: () => (/* reexport safe */ _Users_mac_Documents_asses2_sim_frontend_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.createTheme),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Users_mac_Documents_asses2_sim_frontend_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMediaQuery */ \"./node_modules/@mui/material/node/useMediaQuery/index.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1jcmVhdGVUaGVtZSx1c2VNZWRpYVF1ZXJ5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanM/MDQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL2Fzc2VzMi9zaW0vZnJvbnRlbmQvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCIuL3VzZU1lZGlhUXVlcnlcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=createTheme,useMediaQuery!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./src/lib/themes/index.tsx":
/*!**********************************!*\
  !*** ./src/lib/themes/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=createTheme,useMediaQuery!=!@mui/material */ \"__barrel_optimize__?names=createTheme,useMediaQuery!=!./node_modules/@mui/material/index.js\");\n\n\nconst useTheme = ()=>{\n    const prefersDarkMode = (0,_barrel_optimize_names_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(\"(prefers-color-scheme: light)\");\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_barrel_optimize_names_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n            breakpoints: {\n                values: {\n                    xs: 0,\n                    xsm: 320,\n                    xsmm: 425,\n                    sm: 600,\n                    smm: 768,\n                    md: 900,\n                    mdm: 1024,\n                    lg: 1200,\n                    lgm: 1350,\n                    xl: 1536,\n                    xlm: 1980\n                }\n            },\n            palette: {\n                primary: {\n                    main: \"#222\",\n                    light: \"#525252\",\n                    dark: \"#111111\"\n                },\n                secondary: {\n                    main: \"#7e35fe\",\n                    light: \"#8036ff\"\n                },\n                background: {\n                    default: \"#fafafa\",\n                    paper: \"#fafafa80\"\n                },\n                tertiary: {\n                    main: \"#d1d5db\",\n                    light: \"#e6e6e6\"\n                },\n                success: {\n                    main: \"#03cc3b\"\n                }\n            },\n            typography: {\n                fontFamily: \"Roboto, system-ui, -apple-system, Segoe UI, Helvetica Neue, Noto Sans, Liberation Sans, Arial, sans-serif, Apple Color Emoji, NotoColorEmojiLimited, Segoe UI Emoji, Segoe UI Symbol\"\n            }\n        }), []);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3RoZW1lcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUtUO0FBcUN2QixNQUFNRyxXQUFXO0lBQ2YsTUFBTUMsa0JBQWtCRiw0R0FBYUEsQ0FBQztJQUN0QyxPQUFPRiw4Q0FBT0EsQ0FDWixJQUNFQywwR0FBV0EsQ0FBQztZQUNWSSxhQUFhO2dCQUNYQyxRQUFRO29CQUNOQyxJQUFJO29CQUNKQyxLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxJQUFJO29CQUNKQyxLQUFLO29CQUNMQyxJQUFJO29CQUNKQyxLQUFLO29CQUNMQyxJQUFJO29CQUNKQyxLQUFLO29CQUNMQyxJQUFJO29CQUNKQyxLQUFLO2dCQUNQO1lBQ0Y7WUFDQUMsU0FBUztnQkFDUEMsU0FBUztvQkFDUEMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQUMsV0FBVztvQkFDVEgsTUFBTTtvQkFDTkMsT0FBTztnQkFDVDtnQkFDQUcsWUFBWTtvQkFDVkMsU0FBUztvQkFDVEMsT0FBTztnQkFDVDtnQkFDQUMsVUFBVTtvQkFDUlAsTUFBTTtvQkFDTkMsT0FBTztnQkFDVDtnQkFDQU8sU0FBUztvQkFDUFIsTUFBTTtnQkFDUjtZQUNGO1lBQ0FTLFlBQVk7Z0JBQ1ZDLFlBQ0U7WUFDSjtRQUNGLElBQ0YsRUFBRTtBQUVOO0FBRUEsaUVBQWUzQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbGliL3RoZW1lcy9pbmRleC50c3g/MTkyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBjcmVhdGVUaGVtZSxcbiAgU2ltcGxlUGFsZXR0ZUNvbG9yT3B0aW9ucyxcbiAgdXNlTWVkaWFRdWVyeSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiIHtcbiAgaW50ZXJmYWNlIEJyZWFrcG9pbnRPdmVycmlkZXMge1xuICAgIHhzbTogdHJ1ZTtcbiAgICB4c21tOiB0cnVlO1xuICAgIHNtbTogdHJ1ZTtcbiAgICBtZG06IHRydWU7XG4gICAgbGdtOiB0cnVlO1xuICAgIHhsbTogdHJ1ZTtcbiAgfVxuXG4gIGludGVyZmFjZSBUaGVtZU9wdGlvbnMge1xuICAgIGJyZWFrcG9pbnRzPzoge1xuICAgICAgdmFsdWVzPzoge1xuICAgICAgICB4cz86IG51bWJlcjtcbiAgICAgICAgeHNtPzogbnVtYmVyO1xuICAgICAgICB4c21tPzogbnVtYmVyO1xuICAgICAgICBzbT86IG51bWJlcjtcbiAgICAgICAgc21tPzogbnVtYmVyO1xuICAgICAgICBtZD86IG51bWJlcjtcbiAgICAgICAgbWRtPzogbnVtYmVyO1xuICAgICAgICBsZz86IG51bWJlcjtcbiAgICAgICAgbGdtPzogbnVtYmVyO1xuICAgICAgICB4bD86IG51bWJlcjtcbiAgICAgICAgeGxtPzogbnVtYmVyO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgaW50ZXJmYWNlIFBhbGV0dGUge1xuICAgIHRlcnRpYXJ5OiBTaW1wbGVQYWxldHRlQ29sb3JPcHRpb25zO1xuICB9XG4gIGludGVyZmFjZSBQYWxldHRlT3B0aW9ucyB7XG4gICAgdGVydGlhcnk6IFNpbXBsZVBhbGV0dGVDb2xvck9wdGlvbnM7XG4gIH1cbn1cbmNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xuICBjb25zdCBwcmVmZXJzRGFya01vZGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIik7XG4gIHJldHVybiB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBjcmVhdGVUaGVtZSh7XG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICB4czogMCxcbiAgICAgICAgICAgIHhzbTogMzIwLFxuICAgICAgICAgICAgeHNtbTogNDI1LFxuICAgICAgICAgICAgc206IDYwMCxcbiAgICAgICAgICAgIHNtbTogNzY4LFxuICAgICAgICAgICAgbWQ6IDkwMCxcbiAgICAgICAgICAgIG1kbTogMTAyNCxcbiAgICAgICAgICAgIGxnOiAxMjAwLFxuICAgICAgICAgICAgbGdtOiAxMzUwLFxuICAgICAgICAgICAgeGw6IDE1MzYsXG4gICAgICAgICAgICB4bG06IDE5ODAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFsZXR0ZToge1xuICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgIG1haW46IFwiIzIyMlwiLFxuICAgICAgICAgICAgbGlnaHQ6IFwiIzUyNTI1MlwiLFxuICAgICAgICAgICAgZGFyazogXCIjMTExMTExXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46IFwiIzdlMzVmZVwiLFxuICAgICAgICAgICAgbGlnaHQ6IFwiIzgwMzZmZlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogXCIjZmFmYWZhXCIsXG4gICAgICAgICAgICBwYXBlcjogXCIjZmFmYWZhODBcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRlcnRpYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiBcIiNkMWQ1ZGJcIixcbiAgICAgICAgICAgIGxpZ2h0OiBcIiNlNmU2ZTZcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIG1haW46IFwiIzAzY2MzYlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgICBmb250RmFtaWx5OlxuICAgICAgICAgICAgXCJSb2JvdG8sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIEhlbHZldGljYSBOZXVlLCBOb3RvIFNhbnMsIExpYmVyYXRpb24gU2FucywgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBOb3RvQ29sb3JFbW9qaUxpbWl0ZWQsIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2xcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIFtdXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiY3JlYXRlVGhlbWUiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJwcmVmZXJzRGFya01vZGUiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInhzIiwieHNtIiwieHNtbSIsInNtIiwic21tIiwibWQiLCJtZG0iLCJsZyIsImxnbSIsInhsIiwieGxtIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibGlnaHQiLCJkYXJrIiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/themes/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ThemeProvider!=!@mui/material */ \"__barrel_optimize__?names=ThemeProvider!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _lib_themes_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/themes/index */ \"./src/lib/themes/index.tsx\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\");\n/* harmony import */ var _shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris/build/esm/styles.css */ \"./node_modules/@shopify/polaris/build/esm/styles.css\");\n/* harmony import */ var _shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_build_esm_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps: { ...pageProps } }) {\n    const theme = (0,_lib_themes_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__.AppProvider, {\n            i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6__,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n                theme: theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    enableColorScheme: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/asses2/sim/frontend/src/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/asses2/sim/frontend/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/asses2/sim/frontend/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/asses2/sim/frontend/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3FCO0FBRVA7QUFDRjtBQUVJO0FBQ0c7QUFDSDtBQUdoQyxTQUFTSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFHLEdBQUdBLFdBQVcsRUFBa0M7SUFDbkcsTUFBTUMsUUFBUU4sNkRBQVFBO0lBQ3RCLHFCQUFPO2tCQUNDLDRFQUFDQyx5REFBV0E7WUFBQ00sTUFBTUwsNkRBQUVBO3NCQUNqQiw0RUFBQ0gsNEZBQWFBO2dCQUFDTyxPQUFPQTswQkFDbEIsNEVBQUNSLGtFQUFXQTtvQkFBQ1UsaUJBQWlCOzhCQUMxQiw0RUFBQ0o7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vbGliL3RoZW1lcy9pbmRleCc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCBlbiBmcm9tIFwiQHNob3BpZnkvcG9sYXJpcy9sb2NhbGVzL2VuLmpzb25cIjtcbmltcG9ydCBcIkBzaG9waWZ5L3BvbGFyaXMvYnVpbGQvZXNtL3N0eWxlcy5jc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyAgLi4ucGFnZVByb3BzIH0gfTogQXBwUHJvcHM8eyBzZXNzaW9uOiBTZXNzaW9uIH0+KSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgICAgICA8QXBwUHJvdmlkZXIgaTE4bj17ZW59PlxuICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSBlbmFibGVDb2xvclNjaGVtZSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ3NzQmFzZWxpbmU+XG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPC9BcHBQcm92aWRlcj5cbiAgICA8Lz5cbn1cbiJdLCJuYW1lcyI6WyJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsIkFwcFByb3ZpZGVyIiwiZW4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImkxOG4iLCJlbmFibGVDb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useMediaQuery":
/*!********************************************!*\
  !*** external "@mui/system/useMediaQuery" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useMediaQuery");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@shopify/polaris");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@shopify","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();