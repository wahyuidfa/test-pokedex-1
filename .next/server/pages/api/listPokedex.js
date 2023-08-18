"use strict";
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
exports.id = "pages/api/listPokedex";
exports.ids = ["pages/api/listPokedex"];
exports.modules = {

/***/ "axios?6fac":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    apiBaseUrl: \"https://pokeapi.co/api/v2\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFNBQVM7SUFDYkMsWUFBWTtBQUNkO0FBRUEsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4LXRlc3QvLi9jb25maWcuanM/YzJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpQmFzZVVybDogXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlCYXNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/listPokedex.js":
/*!**********************************!*\
  !*** ./pages/api/listPokedex.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"(api)/./config.js\");\n\nconst axios = __webpack_require__(/*! axios */ \"axios?6fac\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const url = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apiBaseUrl;\n    axios.get(`${url}/pokemon?limit=900`).then((res2)=>{\n        const response = res2.data;\n        if (response) res.status(200).json(response);\n    }).catch((err)=>{\n        res.status(400).json(err);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdFBva2VkZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDbEMsTUFBTUMsUUFBUUMsbUJBQU9BLENBQUMseUJBQU87QUFDN0IsaUVBQWUsQ0FBQ0MsS0FBS0M7SUFDbkIsTUFBTUMsTUFBTUwsMERBQWlCTTtJQUM3QkwsTUFDR00sSUFBSSxDQUFDLEVBQUVGLElBQUksa0JBQWtCLENBQUMsRUFDOUJHLEtBQUssQ0FBQ0M7UUFDTCxNQUFNQyxXQUFXRCxLQUFLRTtRQUN0QixJQUFJRCxVQUFVTixJQUFJUSxPQUFPLEtBQUtDLEtBQUtIO0lBQ3JDLEdBQ0NJLE1BQU0sQ0FBQ0M7UUFDTlgsSUFBSVEsT0FBTyxLQUFLQyxLQUFLRTtJQUN2QjtBQUNKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4LXRlc3QvLi9wYWdlcy9hcGkvbGlzdFBva2VkZXguanM/ZjFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGNvbmZpZy5hcGlCYXNlVXJsO1xyXG4gIGF4aW9zXHJcbiAgICAuZ2V0KGAke3VybH0vcG9rZW1vbj9saW1pdD05MDBgKVxyXG4gICAgLnRoZW4oKHJlczIpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXMyLmRhdGE7XHJcbiAgICAgIGlmIChyZXNwb25zZSkgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsImF4aW9zIiwicmVxdWlyZSIsInJlcSIsInJlcyIsInVybCIsImFwaUJhc2VVcmwiLCJnZXQiLCJ0aGVuIiwicmVzMiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/listPokedex.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listPokedex.js"));
module.exports = __webpack_exports__;

})();