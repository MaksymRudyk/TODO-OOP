/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/todo.js */ \"./src/js/todo.js\");\n/* harmony import */ var _js_todo_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_todo_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://myproject/./src/app.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ (() => {

eval("let container = document.getElementById('render');\nlet input = document.getElementById('input');\nlet button = document.getElementById('button');\nlet postArr = [];\n\nclass Todo {\n   constructor() {\n\n   }\n   addPost(){\n      button.addEventListener('click', () => {\n           let date = new Date();\n           let post = {\n                id: `${date.getMilliseconds()}`,\n                text: `${input.value}`,\n                isCheck: false\n           }\n           postArr.push(post);\n           this.render();\n      });\n   }\n\n   deletePost(button){\n     button.addEventListener('click', (event) => {\n         let id = event.target.getAttribute('data-id');\n         postArr = postArr.filter((item)=>{\n             return item.id !== id;\n         })\n         this.render();\n     })\n   }\n\n   editPost(){\n\n   }\n\n   isCheck(checkbox){\n      checkbox.addEventListener('click', () =>{\n          let li = checkbox.parentElement;\n          let p = li.querySelector('.post-text')\n          p.classList.toggle('active');\n      })\n   }\n\n   render(){\n       container.innerHTML = '';\n       input.value = '';\n       postArr.forEach((item, index)=>{\n         container.innerHTML += `<li><p class=\"post-text\">${item.text}</p> <input class=\"post-checkbox\" type=\"checkbox\"> <button class=\"post-btn_delete\" data-id=\"${item.id}\">Delete Post</button></li>`\n     })\n       let AllDeleteBtn = document.querySelectorAll('.post-btn_delete');\n     AllDeleteBtn.forEach((button) => {\n           this.deletePost(button)\n       })\n       let AllCheckbox = document.querySelectorAll('.post-checkbox');\n       AllCheckbox.forEach((checkbox) => {\n          this.isCheck(checkbox);\n     })\n   }\n\n   // Без учета регистра\n   // validation (){\n   //     let bedWords = ['bitch','asshole'];\n   //     let valWord\n   //     document.addEventListener('keyup',() => {\n   //         if (input.value.length >= 6 ) {\n   //             button.disabled = false;\n   //         } else {\n   //             button.disabled = true;\n   //         }\n   //         for (let i in bedWords){\n   //             if (input.value.includes(bedWords[i])){\n   //                 console.log(input.value.includes(bedWords[i]));\n   //                 button.disabled = true;\n   //                 break;\n   //             }\n   //         }\n   //     })\n   // }\n\n   // Валидация на запрещенные слова\n    validation (){\n        let bedWords = /shit|fuck|bitch|asshole/i;\n        document.addEventListener('keyup',() => {\n            if (input.value.length >= 6 && !bedWords.test(input.value)) {\n                button.disabled = false;\n                console.log(bedWords.test(input.value));\n            } else {\n                button.disabled = true;\n            }\n        })\n    }\n}\nlet todo = new Todo();\ntodo.validation();\ntodo.addPost();\n\n\n\n\n\n\n\n//# sourceURL=webpack://myproject/./src/js/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;