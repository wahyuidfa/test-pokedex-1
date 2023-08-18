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
exports.id = "pages/api/naturePoke";
exports.ids = ["pages/api/naturePoke"];
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

/***/ "(api)/./pages/api/naturePoke.js":
/*!*********************************!*\
  !*** ./pages/api/naturePoke.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"(api)/./config.js\");\n\nconst axios = __webpack_require__(/*! axios */ \"axios?6fac\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const id = parseFloat(req.query.id);\n    axios.get(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apiBaseUrl + `/nature/${id}`).then((res2)=>{\n        const response = res2.data;\n        if (response) res.status(200).json(response);\n    }).catch((err)=>{\n        res.status(400).json(err);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmF0dXJlUG9rZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUNsQyxNQUFNQyxRQUFRQyxtQkFBT0EsQ0FBQyx5QkFBTztBQUM3QixpRUFBZSxDQUFDQyxLQUFLQztJQUNuQixNQUFNQyxLQUFLQyxXQUFXSCxJQUFJSSxNQUFNRjtJQUNoQ0osTUFDR08sSUFBSVIsMERBQWlCUyxHQUFHLENBQUMsUUFBUSxFQUFFSixHQUFHLENBQUMsRUFDdkNLLEtBQUssQ0FBQ0M7UUFDTCxNQUFNQyxXQUFXRCxLQUFLRTtRQUN0QixJQUFJRCxVQUFVUixJQUFJVSxPQUFPLEtBQUtDLEtBQUtIO0lBQ3JDLEdBQ0NJLE1BQU0sQ0FBQ0M7UUFDTmIsSUFBSVUsT0FBTyxLQUFLQyxLQUFLRTtJQUN2QjtBQUNKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlZGV4LXRlc3QvLi9wYWdlcy9hcGkvbmF0dXJlUG9rZS5qcz8wZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUZsb2F0KHJlcS5xdWVyeS5pZCk7XHJcbiAgYXhpb3NcclxuICAgIC5nZXQoY29uZmlnLmFwaUJhc2VVcmwgKyBgL25hdHVyZS8ke2lkfWApXHJcbiAgICAudGhlbigocmVzMikgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlczIuZGF0YTtcclxuICAgICAgaWYgKHJlc3BvbnNlKSByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiYXhpb3MiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwiaWQiLCJwYXJzZUZsb2F0IiwicXVlcnkiLCJnZXQiLCJhcGlCYXNlVXJsIiwidGhlbiIsInJlczIiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/naturePoke.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/naturePoke.js"));
module.exports = __webpack_exports__;

})();