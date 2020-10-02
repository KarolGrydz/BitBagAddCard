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

eval("var btn = document.querySelector('#addToCard');\n\nif (btn) {\n  var form = document.querySelector('#sylius-product-adding-to-cart');\n  var success = document.createElement('div');\n  var closeIcon = document.createElement('i');\n  var checkmarkIcon = document.createElement('i');\n  var content = document.createElement('div');\n  var header = document.createElement('div');\n  var body = document.createElement('p');\n  var divider = document.querySelector('header');\n  var cartPrice = document.querySelector('#sylius-cart-total');\n  success.classList.add('ui', 'icon', 'positive', 'message', 'sylius-flash-message');\n  closeIcon.classList.add('close', 'icon');\n  checkmarkIcon.classList.add('checkmark', 'icon');\n  content.classList.add('content');\n  header.classList.add('header');\n  content.appendChild(header);\n  content.appendChild(body);\n  header.innerHTML = 'Success';\n  body.innerHTML = 'Item has been added to cart';\n  closeIcon.addEventListener('click', function () {\n    return success.remove();\n  });\n  var productId = {\n    productId: form.action.slice(form.action.indexOf('=') + 1, form.action.length)\n  };\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    success.appendChild(closeIcon);\n    success.appendChild(checkmarkIcon);\n    success.appendChild(content);\n    divider.appendChild(success);\n    setTimeout(function () {\n      form.classList.remove('loading');\n    }, 500);\n    cartPrice.innerHTML = '$10';\n  });\n  btn.addEventListener('submit', function (e) {\n    e.preventDefault();\n    fetch(form.action, {\n      method: 'POST',\n      body: JSON.stringify(productId)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return console.log('success', data);\n    })[\"catch\"](function (err) {\n      return console.log('error', err);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwic3VjY2VzcyIsImNyZWF0ZUVsZW1lbnQiLCJjbG9zZUljb24iLCJjaGVja21hcmtJY29uIiwiY29udGVudCIsImhlYWRlciIsImJvZHkiLCJkaXZpZGVyIiwiY2FydFByaWNlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicHJvZHVjdElkIiwiYWN0aW9uIiwic2xpY2UiLCJpbmRleE9mIiwibGVuZ3RoIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQVo7O0FBQ0EsSUFBSUYsR0FBSixFQUFTO0FBQ1AsTUFBTUcsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQWI7QUFDQSxNQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDSSxhQUFULENBQXVCLEdBQXZCLENBQWxCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHTixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdEI7QUFDQSxNQUFNRyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBLE1BQU1JLE1BQU0sR0FBR1IsUUFBUSxDQUFDSSxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxNQUFNSyxJQUFJLEdBQUdULFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0EsTUFBTU0sT0FBTyxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQSxNQUFNVSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBbEI7QUFFQUUsU0FBTyxDQUFDUyxTQUFSLENBQWtCQyxHQUFsQixDQUNFLElBREYsRUFFRSxNQUZGLEVBR0UsVUFIRixFQUlFLFNBSkYsRUFLRSxzQkFMRjtBQVFBUixXQUFTLENBQUNPLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDLE1BQWpDO0FBQ0FQLGVBQWEsQ0FBQ00sU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsV0FBNUIsRUFBeUMsTUFBekM7QUFDQU4sU0FBTyxDQUFDSyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixTQUF0QjtBQUNBTCxRQUFNLENBQUNJLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0FBRUFOLFNBQU8sQ0FBQ08sV0FBUixDQUFvQk4sTUFBcEI7QUFDQUQsU0FBTyxDQUFDTyxXQUFSLENBQW9CTCxJQUFwQjtBQUVBRCxRQUFNLENBQUNPLFNBQVAsR0FBbUIsU0FBbkI7QUFDQU4sTUFBSSxDQUFDTSxTQUFMLEdBQWlCLDZCQUFqQjtBQUVBVixXQUFTLENBQUNXLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DO0FBQUEsV0FBTWIsT0FBTyxDQUFDYyxNQUFSLEVBQU47QUFBQSxHQUFwQztBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkEsYUFBUyxFQUFFaEIsSUFBSSxDQUFDaUIsTUFBTCxDQUFZQyxLQUFaLENBQ1RsQixJQUFJLENBQUNpQixNQUFMLENBQVlFLE9BQVosQ0FBb0IsR0FBcEIsSUFBMkIsQ0FEbEIsRUFFVG5CLElBQUksQ0FBQ2lCLE1BQUwsQ0FBWUcsTUFGSDtBQURLLEdBQWxCO0FBT0F2QixLQUFHLENBQUNpQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDTyxDQUFELEVBQU87QUFDbkNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBckIsV0FBTyxDQUFDVyxXQUFSLENBQW9CVCxTQUFwQjtBQUNBRixXQUFPLENBQUNXLFdBQVIsQ0FBb0JSLGFBQXBCO0FBQ0FILFdBQU8sQ0FBQ1csV0FBUixDQUFvQlAsT0FBcEI7QUFDQUcsV0FBTyxDQUFDSSxXQUFSLENBQW9CWCxPQUFwQjtBQUNBc0IsY0FBVSxDQUFDLFlBQU07QUFDZnZCLFVBQUksQ0FBQ1UsU0FBTCxDQUFlSyxNQUFmLENBQXNCLFNBQXRCO0FBQ0QsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUlBTixhQUFTLENBQUNJLFNBQVYsR0FBc0IsS0FBdEI7QUFDRCxHQVhEO0FBYUFoQixLQUFHLENBQUNpQixnQkFBSixDQUFxQixRQUFyQixFQUErQixVQUFDTyxDQUFELEVBQU87QUFDcENBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRSxTQUFLLENBQUN4QixJQUFJLENBQUNpQixNQUFOLEVBQWM7QUFDakJRLFlBQU0sRUFBRSxNQURTO0FBRWpCbEIsVUFBSSxFQUFFbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVYLFNBQWY7QUFGVyxLQUFkLENBQUwsQ0FJR1ksSUFKSCxDQUlRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBSlIsRUFLR0YsSUFMSCxDQUtRLFVBQUNHLElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixJQUF2QixDQUFWO0FBQUEsS0FMUixXQU1TLFVBQUNHLEdBQUQ7QUFBQSxhQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCQyxHQUFyQixDQUFUO0FBQUEsS0FOVDtBQU9ELEdBVEQ7QUFVRCIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0NhcmQnKTtcclxuaWYgKGJ0bikge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQnKTtcclxuICBjb25zdCBzdWNjZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNvbnN0IGNoZWNrbWFya0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IGNhcnRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtY2FydC10b3RhbCcpO1xyXG5cclxuICBzdWNjZXNzLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAndWknLFxyXG4gICAgJ2ljb24nLFxyXG4gICAgJ3Bvc2l0aXZlJyxcclxuICAgICdtZXNzYWdlJyxcclxuICAgICdzeWxpdXMtZmxhc2gtbWVzc2FnZSdcclxuICApO1xyXG5cclxuICBjbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnY2xvc2UnLCAnaWNvbicpO1xyXG4gIGNoZWNrbWFya0ljb24uY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJywgJ2ljb24nKTtcclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuICBoZWFkZXIuaW5uZXJIVE1MID0gJ1N1Y2Nlc3MnO1xyXG4gIGJvZHkuaW5uZXJIVE1MID0gJ0l0ZW0gaGFzIGJlZW4gYWRkZWQgdG8gY2FydCc7XHJcblxyXG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Y2Nlc3MucmVtb3ZlKCkpO1xyXG5cclxuICBjb25zdCBwcm9kdWN0SWQgPSB7XHJcbiAgICBwcm9kdWN0SWQ6IGZvcm0uYWN0aW9uLnNsaWNlKFxyXG4gICAgICBmb3JtLmFjdGlvbi5pbmRleE9mKCc9JykgKyAxLFxyXG4gICAgICBmb3JtLmFjdGlvbi5sZW5ndGhcclxuICAgICksXHJcbiAgfTtcclxuXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Y2Nlc3MuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcclxuICAgIHN1Y2Nlc3MuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrSWNvbik7XHJcbiAgICBzdWNjZXNzLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzdWNjZXNzKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgY2FydFByaWNlLmlubmVySFRNTCA9ICckMTAnO1xyXG4gIH0pO1xyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZldGNoKGZvcm0uYWN0aW9uLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0SWQpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJywgZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpKTtcclxuICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });