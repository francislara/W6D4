/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

Window.prototype.$l = function (selector) {
  if(selector instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(selector));
  }
  return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(htmlArr) {
    this.htmlArr = htmlArr;
  }

  empty() {
    this.htmlArr.forEach( (el) => {
      el.html("");
    });
  }

  remove() {

  }

  attr(attribute, value) {
    let firstAttr = this.htmlArr[0].getAttribute(attribute);
    if ((firstAttr !== undefined) && (value === undefined)) {
      return firstAttr;
    } else if (value !== undefined) {
      this.htmlArr.forEach((el) => {
        if (el.getAttribute(attribute)) {
          el.setAttribute(attribute, value);
        }
      });
    }
  }

  addClass(...classNames) {
    this.htmlArr.forEach( (el) => {
      classNames.forEach( (className) => {
        el.classList.add(className);
      });
    });
  }

  removeClass(...classNames) {
    this.htmlArr.forEach( (el) => {
      classNames.forEach( (className) => {
        el.classList.remove(className);
      });
    });
  }

  html(string) {
    if(string !== undefined) {
      this.htmlArr.forEach( (el) => {
        el.innerHTML = string;
      });
    } else {
      return this.htmlArr[0].innerHTML;
    }
  }

  find() {

  }

  children() {
    let childrenArr = [];

    this.htmlArr.forEach( (el) => {
      childrenArr.push(el.children);
    });

    return new DOMNodeCollection(childrenArr);
  }

  parent() {

  }

  append(htmlEl) {
    this.htmlArr.forEach( (el) => {
      htmlEl.htmlArr.forEach( (el2) => {
        el.innerHTML += el2.outerHTML;
      });
    });
  }

}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);