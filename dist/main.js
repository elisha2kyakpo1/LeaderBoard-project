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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const container = document.querySelector('.container');\nconst resultContainer = document.createElement('div');\nconst formContainer = document.createElement('div');\nconst form = document.createElement('form');\nconst contentContainer = document.createElement('div');\nconst title = document.createElement('hi');\nconst recentScores = document.createElement('h4');\nconst addYourScore = document.createElement('h4');\n\ncontainer.appendChild(contentContainer);\ncontainer.appendChild(title);\ncontentContainer.appendChild(formContainer);\nformContainer.appendChild(form);\ncontentContainer.appendChild(resultContainer);\nformContainer.appendChild(addYourScore);\nresultContainer.appendChild(recentScores);\n\ntitle.textContent = 'Leaderboard';\n\n//# sourceURL=webpack://leaderboard-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;