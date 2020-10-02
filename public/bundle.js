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
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var btn = document.querySelector('#addToCard');\n\nif (btn) {\n  var form = document.querySelector('#sylius-product-adding-to-cart');\n  var success = document.createElement('div');\n  var closeIcon = document.createElement('i');\n  var checkmarkIcon = document.createElement('i');\n  var content = document.createElement('div');\n  var header = document.createElement('div');\n  var body = document.createElement('p');\n  var divider = document.querySelector('header');\n  var cartPrice = document.querySelector('#sylius-cart-total');\n  success.classList.add('ui', 'icon', 'positive', 'message', 'sylius-flash-message');\n  closeIcon.classList.add('close', 'icon');\n  checkmarkIcon.classList.add('checkmark', 'icon');\n  content.classList.add('content');\n  header.classList.add('header');\n  content.appendChild(header);\n  content.appendChild(body);\n  header.innerHTML = 'Success';\n  body.innerHTML = 'Item has been added to cart';\n  closeIcon.addEventListener('click', function () {\n    return success.remove();\n  });\n  var productId = {\n    productId: form.action.slice(form.action.indexOf('=') + 1, form.action.length)\n  };\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    success.appendChild(closeIcon);\n    success.appendChild(checkmarkIcon);\n    success.appendChild(content);\n    divider.appendChild(success);\n    setTimeout(function () {\n      form.classList.remove('loading');\n    }, 500);\n    cartPrice.innerHTML = '$10';\n  });\n  btn.addEventListener('submit', function (e) {\n    e.preventDefault();\n    fetch(form.action, {\n      method: 'POST',\n      body: JSON.stringify(productId)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return console.log('success', data);\n    })[\"catch\"](function (err) {\n      return console.log('error', err);\n    });\n  });\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwic3VjY2VzcyIsImNyZWF0ZUVsZW1lbnQiLCJjbG9zZUljb24iLCJjaGVja21hcmtJY29uIiwiY29udGVudCIsImhlYWRlciIsImJvZHkiLCJkaXZpZGVyIiwiY2FydFByaWNlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicHJvZHVjdElkIiwiYWN0aW9uIiwic2xpY2UiLCJpbmRleE9mIiwibGVuZ3RoIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQVo7O0FBQ0EsSUFBSUYsR0FBSixFQUFTO0FBQ1AsTUFBTUcsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQWI7QUFDQSxNQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDSSxhQUFULENBQXVCLEdBQXZCLENBQWxCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHTixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdEI7QUFDQSxNQUFNRyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBLE1BQU1JLE1BQU0sR0FBR1IsUUFBUSxDQUFDSSxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxNQUFNSyxJQUFJLEdBQUdULFFBQVEs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dCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9DYXJkJyk7XHJcbmlmIChidG4pIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy1wcm9kdWN0LWFkZGluZy10by1jYXJ0Jyk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBjb25zdCBjaGVja21hcmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICBjb25zdCBjYXJ0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLWNhcnQtdG90YWwnKTtcclxuXHJcbiAgc3VjY2Vzcy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3VpJyxcclxuICAgICdpY29uJyxcclxuICAgICdwb3NpdGl2ZScsXHJcbiAgICAnbWVzc2FnZScsXHJcbiAgICAnc3lsaXVzLWZsYXNoLW1lc3NhZ2UnXHJcbiAgKTtcclxuXHJcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJywgJ2ljb24nKTtcclxuICBjaGVja21hcmtJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycsICdpY29uJyk7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcbiAgaGVhZGVyLmlubmVySFRNTCA9ICdTdWNjZXNzJztcclxuICBib2R5LmlubmVySFRNTCA9ICdJdGVtIGhhcyBiZWVuIGFkZGVkIHRvIGNhcnQnO1xyXG5cclxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdWNjZXNzLnJlbW92ZSgpKTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdElkID0ge1xyXG4gICAgcHJvZHVjdElkOiBmb3JtLmFjdGlvbi5zbGljZShcclxuICAgICAgZm9ybS5hY3Rpb24uaW5kZXhPZignPScpICsgMSxcclxuICAgICAgZm9ybS5hY3Rpb24ubGVuZ3RoXHJcbiAgICApLFxyXG4gIH07XHJcblxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWNjZXNzLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XHJcbiAgICBzdWNjZXNzLmFwcGVuZENoaWxkKGNoZWNrbWFya0ljb24pO1xyXG4gICAgc3VjY2Vzcy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQoc3VjY2Vzcyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIGNhcnRQcmljZS5pbm5lckhUTUwgPSAnJDEwJztcclxuICB9KTtcclxuXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmZXRjaChmb3JtLmFjdGlvbiwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvZHVjdElkKSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycsIGRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKSk7XHJcbiAgfSk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });