/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/linksHelper.js":
/*!************************************!*\
  !*** ./src/modules/linksHelper.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var allLinks = document.querySelectorAll('a:link');
var header = document.querySelector('.header');
var linksHelper = function linksHelper() {
  allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = link.getAttribute('href');
      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      if (href !== '#' && href.startsWith('#')) {
        var sectionElement = document.querySelector(href);
        sectionElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
      if (link.classList.contains('header__nav-link')) {
        header.classList.toggle('header--open');
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linksHelper);

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var navBtn = document.querySelector('.header__nav-btn');
var header = document.querySelector('.header');
var navBar = function navBar() {
  navBtn.addEventListener('click', function () {
    header.classList.toggle('header--open');
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);

/***/ }),

/***/ "./src/modules/stickyNav.js":
/*!**********************************!*\
  !*** ./src/modules/stickyNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var heroSection = document.querySelector('.hero');
var stickyNav = function stickyNav() {
  var obs = new IntersectionObserver(function (entries) {
    var ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  }, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  });
  obs.observe(heroSection);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stickyNav);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/eating.jpg */ "./src/assets/eating.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  /* 10px / 16px = 0.625 = 62.5% */\n  font-size: 62.5%;\n  overflow-x: hidden;\n}\n@media (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media (max-width: 59em) {\n  html {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: \"Rubik\", sans-serif;\n  line-height: 1;\n  font-weight: 400;\n  color: #151010;\n  overflow-x: hidden;\n}\n\np {\n  margin-bottom: 1rem;\n}\n\nh1,\n.title--primary,\nh2,\n.title--secondary,\nh3,\n.title--tertiary,\nh4,\nh5 {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  color: #151010;\n}\n\nh1,\n.title--primary {\n  font-size: 5.2rem;\n  line-height: 1.05;\n  margin-bottom: 3.2rem;\n}\n\nh2,\n.title--secondary {\n  font-size: 4.4rem;\n  line-height: 1.2;\n  margin-bottom: 9.6rem;\n}\n@media (max-width: 75em) {\n  h2,\n  .title--secondary {\n    font-size: 3.6rem;\n  }\n}\n@media (max-width: 44em) {\n  h2,\n  .title--secondary {\n    margin-bottom: 4.8rem;\n  }\n}\n\nh3,\n.title--tertiary {\n  font-size: 3rem;\n  line-height: 1.2;\n  margin-bottom: 3.2rem;\n}\n@media (max-width: 75em) {\n  h3,\n  .title--tertiary {\n    font-size: 2.4rem;\n  }\n}\n\nh4,\n.title--sub {\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #ef5814;\n  text-transform: uppercase;\n  margin-bottom: 1.6rem;\n  letter-spacing: 0.75px;\n}\n\n.margin__right--small {\n  margin-right: 1.6rem !important;\n}\n.margin__bottom--md {\n  margin-bottom: 4.8rem !important;\n}\n\n.container {\n  max-width: 120rem;\n  padding: 0 3.2rem;\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  column-gap: 6.4rem;\n  row-gap: 9.6rem;\n}\n@media (max-width: 75em) {\n  .grid {\n    column-gap: 4.8rem;\n    row-gap: 6.4rem;\n  }\n}\n@media (max-width: 34em) {\n  .grid {\n    row-gap: 4.8rem;\n  }\n}\n.grid:last-child {\n  margin-bottom: 0;\n}\n.grid:not(:last-child) {\n  margin-bottom: 9.6rem;\n}\n.grid__cols--2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n@media (max-width: 34em) {\n  .grid__cols--2 {\n    grid-template-columns: 1fr;\n  }\n}\n.grid__cols--3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 44em) {\n  .grid__cols--3 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 34em) {\n  .grid__cols--3 {\n    grid-template-columns: 1fr;\n  }\n}\n.grid__cols--4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n@media (max-width: 44em) {\n  .grid__cols--4 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 34em) {\n  .grid__cols--4 {\n    grid-template-columns: 1fr;\n  }\n}\n.grid__cols--5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.grid--vertical-center {\n  align-items: center;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.link {\n  display: inline-block;\n  color: #ef5814;\n  text-decoration: none;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 2px;\n  transition: all 0.3s;\n}\n.link:hover, .link:active {\n  color: #c39556;\n  border-bottom: 1px solid transparent;\n}\n\n.btn {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: 600;\n  padding: 1.6rem 3.2rem;\n  border-radius: 9px;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.3s;\n}\n@media (max-width: 34em) {\n  .btn {\n    padding: 2.4rem 1.6rem;\n  }\n}\n.btn--fill {\n  background-color: #ef5814;\n  color: #f9f8f8;\n  border: 1px solid #ef5814;\n}\n.btn--fill:hover, .btn--fill:active {\n  color: #ef5814;\n  background-color: #f9f8f8;\n}\n.btn--outline {\n  background-color: #f9f8f8;\n  color: #151010;\n  border: 1px solid #fdf2e9;\n}\n.btn--outline:active, .btn--outline:hover {\n  box-shadow: inset 0 0 0 3px #f9f8f8;\n  border-color: #151010;\n}\n\n.list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1.6rem;\n}\n.list__item {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n  line-height: 1.2;\n}\n.list__icon {\n  width: 3rem;\n  height: 3rem;\n  color: #ef5814;\n}\n\n.tags {\n  margin-bottom: 1.2rem;\n  display: flex;\n  gap: 0.4rem;\n}\n.tags .tag {\n  display: inline-block;\n  padding: 0.4rem 0.8rem;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  color: #151010;\n  border-radius: 100px;\n  font-weight: 600;\n}\n.tags .tag--vegetarian {\n  background-color: #51cf66;\n}\n.tags .tag--vegan {\n  background-color: #94d82d;\n}\n.tags .tag--paleo {\n  background-color: #ffd43b;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fdf2e9;\n  height: 9.6rem;\n  padding: 0 4.8rem;\n  position: relative;\n}\n@media (max-width: 75em) {\n  .header {\n    padding: 0 3.2rem;\n  }\n}\n.header__logo-img {\n  height: 2.2rem;\n}\n@media (max-width: 59em) {\n  .header__nav {\n    background-color: #fdf2e9;\n    -webkit-backdrop-filter: blur(5px);\n    backdrop-filter: blur(10px);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    transform: translateX(100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.5s ease-in;\n    opacity: 0;\n    pointer-events: none;\n    visibility: hidden;\n  }\n}\n.header__nav-list {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 4.8rem;\n}\n@media (max-width: 75em) {\n  .header__nav-list {\n    gap: 3.2rem;\n  }\n}\n@media (max-width: 59em) {\n  .header__nav-list {\n    flex-direction: column;\n    gap: 4.8rem;\n  }\n}\n.header__nav-link:link, .header__nav-link:visited {\n  display: inline-block;\n  text-decoration: none;\n  color: #151010;\n  font-weight: 500;\n  font-size: 1.8rem;\n  transition: all 0.3s;\n}\n@media (max-width: 59em) {\n  .header__nav-link:link, .header__nav-link:visited {\n    font-size: 3rem;\n  }\n}\n.header__nav-link:hover, .header__nav-link:active {\n  color: #ef5814;\n}\n.header__nav-item-cta {\n  border: 1px solid #ef5814;\n}\n.header__nav-item-cta:link, .header__nav-item-cta:visited {\n  padding: 1.2rem 2.4rem;\n  border-radius: 9px;\n  color: #f9f8f8;\n  background-color: #ef5814;\n}\n.header__nav-item-cta:hover, .header__nav-item-cta:active {\n  background-color: #f9f8f8;\n  color: #ef5814;\n}\n.header__nav-btn {\n  border: none;\n  background: none;\n  cursor: pointer;\n  display: none;\n}\n@media (max-width: 59em) {\n  .header__nav-btn {\n    display: block;\n    z-index: 9999;\n  }\n}\n.header__nav-icon {\n  height: 4.8rem;\n  width: 4.8rem;\n  color: #151010;\n}\n.header__nav-icon[name=close-outline] {\n  display: none;\n}\n@media (max-width: 59em) {\n  .header--open .header__nav {\n    opacity: 1;\n    pointer-events: auto;\n    visibility: visible;\n    transform: translateX(0);\n  }\n}\n.header--open .header__nav-icon[name=close-outline] {\n  display: block;\n}\n.header--open .header__nav-icon[name=menu-outline] {\n  display: none;\n}\n\n.hero {\n  background-color: #fdf2e9;\n  padding: 4.8rem 0 9.6rem 0;\n}\n@media (max-width: 34em) {\n  .hero {\n    padding: 2.4rem 0 6.4rem 0;\n  }\n}\n.hero__inner {\n  max-width: 130rem;\n  margin: 0 auto;\n  padding: 0 3.2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 9.6rem;\n  align-items: center;\n}\n@media (max-width: 84em) {\n  .hero__inner {\n    max-width: 120rem;\n  }\n}\n@media (max-width: 75em) {\n  .hero__inner {\n    gap: 4.8rem;\n  }\n}\n@media (max-width: 59em) {\n  .hero__inner {\n    grid-template-columns: 1fr;\n    padding: 0 8rem;\n    gap: 6.4rem;\n  }\n}\n@media (max-width: 34em) {\n  .hero__inner {\n    padding: 0 3.2rem;\n  }\n}\n@media (max-width: 59em) {\n  .hero__container {\n    text-align: center;\n  }\n}\n.hero__text {\n  font-size: 2rem;\n  line-height: 1.6;\n  margin-bottom: 4.8rem;\n}\n.hero__delivered-container {\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n  margin-top: 8rem;\n}\n@media (max-width: 59em) {\n  .hero__delivered-container {\n    justify-content: center;\n    margin-top: 3.2rem;\n  }\n}\n.hero__delivered-images {\n  display: flex;\n}\n.hero__delivered-image {\n  height: 4.8rem;\n  width: 4.8rem;\n  border-radius: 50%;\n  margin-right: -1.6rem;\n  border: 3px solid #fdf2e9;\n}\n.hero__delivered-image:last-child {\n  margin: 0;\n}\n.hero__delivered-text {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: #151010;\n}\n.hero__delivered-text span {\n  color: #ef5814;\n  font-weight: 700;\n}\n@media (max-width: 59em) {\n  .hero__image-container {\n    text-align: center;\n  }\n}\n.hero__image {\n  width: 100%;\n}\n@media (max-width: 59em) {\n  .hero__image {\n    width: 60%;\n  }\n}\n@media (max-width: 34em) {\n  .hero__image {\n    width: 80%;\n  }\n}\n\n.featured {\n  padding: 4.8rem 0 3.2rem 0;\n}\n.featured__title {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 2.4rem;\n  color: #a8a7a7;\n}\n.featured__images {\n  display: flex;\n  justify-content: space-around;\n}\n.featured__image {\n  height: 3.2rem;\n  filter: brightness(0);\n  opacity: 50%;\n}\n@media (max-width: 59em) {\n  .featured__image {\n    height: 2.4rem;\n  }\n}\n@media (max-width: 34em) {\n  .featured__image {\n    height: 1.2rem;\n  }\n}\n\n.how-works {\n  padding: 9.6rem 0;\n}\n.how-works__step-number {\n  font-size: 8.6rem;\n  font-weight: 600;\n  color: #a8a7a7;\n  margin-bottom: 1.2rem;\n}\n@media (max-width: 59em) {\n  .how-works__step-number {\n    font-size: 7.4rem;\n  }\n}\n.how-works__step-text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n  color: #151010;\n}\n.how-works__step-image-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 34em) {\n  .how-works__step-image-container {\n    transform: translateY(2.4rem);\n  }\n}\n@media (max-width: 34em) {\n  .how-works__step-image-container:nth-child(2) {\n    grid-row: 1;\n  }\n}\n@media (max-width: 34em) {\n  .how-works__step-image-container:nth-child(6) {\n    grid-row: 5;\n  }\n}\n.how-works__step-image-container::before, .how-works__step-image-container::after {\n  content: \"\";\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.how-works__step-image-container::before {\n  width: 60%;\n  padding-bottom: 60%;\n  background-color: #fdf2e9;\n  z-index: -2;\n}\n.how-works__step-image-container::after {\n  width: 45%;\n  padding-bottom: 45%;\n  background-color: #d9b5a5;\n  z-index: -1;\n}\n.how-works__step-image {\n  width: 35%;\n}\n\n.meals {\n  padding: 9.6rem 0;\n}\n.meals__item {\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\n  border-radius: 11px;\n  overflow: hidden;\n  transition: all 0.4s;\n}\n.meals__item:hover {\n  transform: translateY(-1.2rem);\n  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\n}\n.meals__item-content {\n  padding: 3.2rem 4.8rem 4.8rem 4.8rem;\n}\n@media (max-width: 59em) {\n  .meals__item-content {\n    padding: 2.4rem 3.2rem 3.2rem 3.2rem;\n  }\n}\n.meals__item-title {\n  font-size: 2.4rem;\n  color: #151010;\n  font-weight: 600;\n  margin-bottom: 3.2rem;\n}\n.meals__item-attributes {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.meals__item-attribute {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n}\n.meals__item-icon {\n  height: 2.4rem;\n  width: 2.4rem;\n  color: #ef5814;\n}\n.meals__item-img {\n  width: 100%;\n}\n@media (max-width: 44em) {\n  .meals__diets {\n    grid-column: 1/-1;\n    justify-self: center;\n  }\n}\n.meals__btn-container {\n  text-align: center;\n  font-size: 1.8rem;\n}\n\n.testimonials {\n  background-color: #fdf2e9;\n  display: grid;\n  grid-template-columns: 55fr 45fr;\n  align-items: center;\n}\n@media (max-width: 59em) {\n  .testimonials {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonials__inner {\n  padding: 9.6rem;\n}\n@media (max-width: 75em) {\n  .testimonials__inner {\n    padding: 9.6rem 3.2rem;\n  }\n}\n.testimonials__items {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 4.8rem;\n  column-gap: 8rem;\n}\n@media (max-width: 34em) {\n  .testimonials__items {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonials__item-img {\n  width: 6.4rem;\n  border-radius: 50%;\n  margin-bottom: 1.2rem;\n}\n.testimonials__item-text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n  margin-bottom: 1.6rem;\n}\n.testimonials__item-name {\n  font-size: 1.6rem;\n  color: #a8a7a7;\n}\n.testimonials__gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.6rem;\n  padding: 1.6rem;\n}\n@media (max-width: 84em) {\n  .testimonials__gallery {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 59em) {\n  .testimonials__gallery {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n@media (max-width: 34em) {\n  .testimonials__gallery {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1.2rem;\n  }\n}\n.testimonials__gallery-item {\n  overflow: hidden;\n}\n.testimonials__gallery-img {\n  display: block;\n  width: 100%;\n  transition: all 0.4s;\n}\n.testimonials__gallery-img:hover {\n  transform: scale(1.1);\n}\n\n.pricing {\n  padding: 9.6rem 0;\n}\n.pricing__plan {\n  border-radius: 11px;\n  width: 75%;\n}\n@media (max-width: 44em) {\n  .pricing__plan {\n    width: 100%;\n  }\n}\n.pricing__plan--starter {\n  justify-self: end;\n  border: 2px solid #fdf2e9;\n  padding: 4.6rem;\n}\n.pricing__plan--complete {\n  background-color: #fdf2e9;\n  padding: 4.8rem;\n  position: relative;\n  overflow: hidden;\n}\n.pricing__plan--complete::after {\n  content: \"Best value\";\n  position: absolute;\n  top: 6%;\n  right: -18%;\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #333;\n  background-color: #ffd43b;\n  padding: 0.8rem 8rem;\n  transform: rotate(45deg);\n}\n.pricing__plan-header {\n  text-align: center;\n  margin-bottom: 4.8rem;\n}\n.pricing__plan-name {\n  color: #ef5814;\n  font-weight: 600;\n  font-size: 2rem;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n  margin-bottom: 3.2rem;\n}\n.pricing__plan-price {\n  font-size: 6.2rem;\n  font-weight: 600;\n  color: #151010;\n  margin-bottom: 1.6rem;\n}\n.pricing__plan-price span {\n  font-size: 3rem;\n  font-weight: 500;\n  margin-right: 0.8rem;\n}\n.pricing__plan-text {\n  font-size: 1.6rem;\n  line-height: 1.6;\n  color: #a8a7a7;\n}\n.pricing__plan-sing-up {\n  text-align: center;\n  margin-top: 4.8rem;\n}\n.pricing__plan-details {\n  font-size: 1.6rem;\n  line-height: 1.6;\n  text-align: center;\n}\n.pricing__feature-icon {\n  color: #f9f8f8;\n  height: 3.2rem;\n  width: 3.2rem;\n  background-color: #ef5814;\n  margin-bottom: 3.2rem;\n  padding: 1.6rem;\n  border-radius: 50%;\n}\n.pricing__feature-title {\n  font-size: 2.4rem;\n  color: #5d3e32;\n  font-weight: 700;\n  margin-bottom: 1.6rem;\n}\n.pricing__feature-text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n}\n\n.cta {\n  padding: 4.8rem 0 12.8rem;\n}\n.cta__inner {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);\n  border-radius: 11px;\n  background-image: linear-gradient(to right bottom, rgba(239, 88, 20, 0.8), #ef5814);\n  overflow: hidden;\n}\n@media (max-width: 59em) {\n  .cta__inner {\n    grid-template-columns: 3fr 2fr;\n  }\n}\n@media (max-width: 34em) {\n  .cta__inner {\n    grid-template-columns: 1fr;\n  }\n}\n.cta__text-container {\n  padding: 4.8rem 6.4rem 6.4rem 6.4rem;\n}\n@media (max-width: 34em) {\n  .cta__text-container {\n    padding: 3.2rem;\n  }\n}\n.cta__title {\n  color: inherit;\n  margin-bottom: 3.2rem;\n}\n.cta__text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n  margin-bottom: 4.8rem;\n}\n.cta__form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3.2rem;\n  row-gap: 2.4rem;\n}\n@media (max-width: 59em) {\n  .cta__form {\n    grid-template-columns: 1fr;\n  }\n}\n.cta__form-label {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 500;\n  margin-bottom: 1.2rem;\n}\n.cta__form-input {\n  width: 100%;\n  padding: 1.2rem;\n  font-size: 1.8rem;\n  font-family: inherit;\n  color: inherit;\n  border: none;\n  background-color: #fdf2e9;\n  border-radius: 9px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.cta__form-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);\n}\n.cta__form-input::placeholder {\n  color: #a8a7a7;\n}\n.cta__form-btn {\n  margin-top: 1.2rem;\n}\n.cta__img-container {\n  background-image: linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n}\n@media (max-width: 34em) {\n  .cta__img-container {\n    height: 32rem;\n    grid-row: 1;\n  }\n}\n\n.footer {\n  padding: 12.8rem 0;\n  border-top: 1px solid #d9b5a5;\n}\n.footer__inner {\n  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;\n}\n@media (max-width: 44em) {\n  .footer__inner {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.footer__nav {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n@media (max-width: 44em) {\n  .footer__nav {\n    grid-row: 1;\n    grid-column: span 2;\n    margin-bottom: 3.2rem;\n  }\n}\n.footer__nav--logo {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 44em) {\n  .footer__nav--logo {\n    grid-column: span 3;\n    grid-row: 2;\n  }\n}\n@media (max-width: 44em) {\n  .footer__nav--address {\n    grid-column: span 3;\n    grid-row: 2;\n  }\n}\n.footer__nav-heading {\n  font-size: 1.8rem;\n  font-weight: 500;\n  margin-bottom: 4rem;\n}\n.footer__nav-items {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n.footer__nav-contacts {\n  font-style: normal;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n.footer__nav-address {\n  margin-bottom: 2.4rem;\n  color: #a8a7a7;\n}\n.footer__link {\n  text-decoration: none;\n  font-size: 1.6rem;\n  color: #a8a7a7;\n  transition: all 0.3s;\n}\n.footer__link:hover {\n  color: #d9b5a5;\n}\n.footer__logo-link {\n  display: block;\n  margin-bottom: 3.2rem;\n}\n.footer__logo {\n  height: 2.2rem;\n}\n.footer__social-links {\n  list-style: none;\n  display: flex;\n  gap: 2.4rem;\n}\n.footer__social-icon {\n  list-style: none;\n  display: flex;\n  gap: 2.4rem;\n}\n.footer__copyright {\n  font-size: 1.4rem;\n  line-height: 1.6;\n  color: #a8a7a7;\n  margin-top: auto;\n}\n\n.sticky .header {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 8rem;\n  padding-top: 0;\n  padding-bottom: 0;\n  background-color: rgba(255, 255, 255, 0.97);\n  z-index: 999;\n  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);\n}\n.sticky .hero {\n  margin-top: 9.6rem;\n}", "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"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","sourcesContent":["// reset css\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote::before,\r\nblockquote::after,\r\nq::before,\r\nq::after {\r\n  content: '';\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n// colors\r\n$light-gray-1: #f9f8f8;\r\n$light-gray-2: #a8a7a7;\r\n$dark-gray-1: #151010;\r\n$twine-1: #fdf2e9;\r\n$twine-2: #d9b5a5;\r\n$twine-3: #c39556;\r\n$twine-4: #5d3e32;\r\n$secondary: #c42914;\r\n$primary: #ef5814;\r\n$vegetarian: #51cf66;\r\n$vegan: #94d82d;\r\n$paleo: #ffd43b;\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');\r\n\r\n// base styles\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  /* 10px / 16px = 0.625 = 62.5% */\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n\r\n  @media (max-width: 75em) {\r\n    font-size: 56.25%;\r\n  }\r\n\r\n  @media (max-width: 59em) {\r\n    font-size: 50%;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'Rubik', sans-serif;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  color: $dark-gray-1;\r\n  overflow-x: hidden;\r\n}\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1,\r\n.title--primary,\r\nh2,\r\n.title--secondary,\r\nh3,\r\n.title--tertiary,\r\nh4,\r\nh5 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  color: $dark-gray-1;\r\n}\r\n\r\nh1,\r\n.title--primary {\r\n  font-size: 5.2rem;\r\n  line-height: 1.05;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\nh2,\r\n.title--secondary {\r\n  font-size: 4.4rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 9.6rem;\r\n\r\n  @media (max-width: 75em) {\r\n    font-size: 3.6rem;\r\n  }\r\n\r\n  @media (max-width: 44em) {\r\n    margin-bottom: 4.8rem;\r\n  }\r\n}\r\n\r\nh3,\r\n.title--tertiary {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 3.2rem;\r\n\r\n  @media (max-width: 75em) {\r\n    font-size: 2.4rem;\r\n  }\r\n}\r\n\r\nh4,\r\n.title--sub {\r\n  font-size: 1.6rem;\r\n  font-weight: 500;\r\n  color: $primary;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.6rem;\r\n  letter-spacing: 0.75px;\r\n}\r\n\r\n.margin {\r\n  &__right {\r\n    &--small {\r\n      margin-right: 1.6rem !important;\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    &--md {\r\n      margin-bottom: 4.8rem !important;\r\n    }\r\n  }\r\n}\r\n\r\n.container {\r\n  max-width: 120rem;\r\n  padding: 0 3.2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  column-gap: 6.4rem;\r\n  row-gap: 9.6rem;\r\n\r\n  @media (max-width: 75em) {\r\n    column-gap: 4.8rem;\r\n    row-gap: 6.4rem;\r\n  }\r\n\r\n  @media (max-width: 34em) {\r\n    row-gap: 4.8rem;\r\n  }\r\n\r\n  &:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  &:not(:last-child) {\r\n    margin-bottom: 9.6rem;\r\n  }\r\n\r\n  &__cols {\r\n    &--2 {\r\n      grid-template-columns: repeat(2, 1fr);\r\n\r\n      @media (max-width: 34em) {\r\n        grid-template-columns: 1fr;\r\n      }\r\n    }\r\n\r\n    &--3 {\r\n      grid-template-columns: repeat(3, 1fr);\r\n\r\n      @media (max-width: 44em) {\r\n        grid-template-columns: repeat(2, 1fr);\r\n      }\r\n\r\n      @media (max-width: 34em) {\r\n        grid-template-columns: 1fr;\r\n      }\r\n    }\r\n\r\n    &--4 {\r\n      grid-template-columns: repeat(4, 1fr);\r\n\r\n      @media (max-width: 44em) {\r\n        grid-template-columns: repeat(2, 1fr);\r\n      }\r\n\r\n      @media (max-width: 34em) {\r\n        grid-template-columns: 1fr;\r\n      }\r\n    }\r\n\r\n    &--5 {\r\n      grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }\r\n\r\n  &--vertical-center {\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.link {\r\n  display: inline-block;\r\n  color: $primary;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid currentColor;\r\n  padding-bottom: 2px;\r\n  transition: all 0.3s;\r\n\r\n  &:hover,\r\n  &:active {\r\n    color: $twine-3;\r\n    border-bottom: 1px solid transparent;\r\n  }\r\n}\r\n\r\n// button styles\r\n.btn {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1.6rem 3.2rem;\r\n  border-radius: 9px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  transition: all 0.3s;\r\n\r\n  @media (max-width: 34em) {\r\n    padding: 2.4rem 1.6rem;\r\n  }\r\n\r\n  &--fill {\r\n    background-color: $primary;\r\n    color: $light-gray-1;\r\n    border: 1px solid $primary;\r\n\r\n    &:hover,\r\n    &:active {\r\n      color: $primary;\r\n      background-color: $light-gray-1;\r\n    }\r\n  }\r\n\r\n  &--outline {\r\n    background-color: $light-gray-1;\r\n    color: $dark-gray-1;\r\n    border: 1px solid $twine-1;\r\n\r\n    &:active,\r\n    &:hover {\r\n      box-shadow: inset 0 0 0 3px $light-gray-1;\r\n      border-color: $dark-gray-1;\r\n    }\r\n  }\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.6rem;\r\n\r\n  &__item {\r\n    font-size: 1.8rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  &__icon {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: $primary;\r\n  }\r\n}\r\n\r\n.tags {\r\n  margin-bottom: 1.2rem;\r\n  display: flex;\r\n  gap: 0.4rem;\r\n\r\n  & .tag {\r\n    display: inline-block;\r\n    padding: 0.4rem 0.8rem;\r\n    font-size: 1.2rem;\r\n    text-transform: uppercase;\r\n    color: $dark-gray-1;\r\n    border-radius: 100px;\r\n    font-weight: 600;\r\n\r\n    &--vegetarian {\r\n      background-color: $vegetarian;\r\n    }\r\n\r\n    &--vegan {\r\n      background-color: $vegan;\r\n    }\r\n\r\n    &--paleo {\r\n      background-color: $paleo;\r\n    }\r\n  }\r\n}\r\n\r\n// header\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: $twine-1;\r\n  height: 9.6rem;\r\n  padding: 0 4.8rem;\r\n  position: relative;\r\n\r\n  @media (max-width: 75em) {\r\n    padding: 0 3.2rem;\r\n  }\r\n\r\n  &__logo-img {\r\n    height: 2.2rem;\r\n  }\r\n\r\n  &__nav {\r\n    @media (max-width: 59em) {\r\n      background-color: $twine-1;\r\n      -webkit-backdrop-filter: blur(5px);\r\n      backdrop-filter: blur(10px);\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100vh;\r\n      transform: translateX(100%);\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      transition: all 0.5s ease-in;\r\n      opacity: 0;\r\n      pointer-events: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n\r\n  &__nav-list {\r\n    list-style: none;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4.8rem;\r\n\r\n    @media (max-width: 75em) {\r\n      gap: 3.2rem;\r\n    }\r\n\r\n    @media (max-width: 59em) {\r\n      flex-direction: column;\r\n      gap: 4.8rem;\r\n    }\r\n  }\r\n\r\n  &__nav-link {\r\n    &:link,\r\n    &:visited {\r\n      display: inline-block;\r\n      text-decoration: none;\r\n      color: $dark-gray-1;\r\n      font-weight: 500;\r\n      font-size: 1.8rem;\r\n      transition: all 0.3s;\r\n\r\n      @media (max-width: 59em) {\r\n        font-size: 3rem;\r\n      }\r\n    }\r\n\r\n    &:hover,\r\n    &:active {\r\n      color: $primary;\r\n    }\r\n  }\r\n\r\n  &__nav-item-cta {\r\n    border: 1px solid $primary;\r\n\r\n    &:link,\r\n    &:visited {\r\n      padding: 1.2rem 2.4rem;\r\n      border-radius: 9px;\r\n      color: $light-gray-1;\r\n      background-color: $primary;\r\n    }\r\n\r\n    &:hover,\r\n    &:active {\r\n      background-color: $light-gray-1;\r\n      color: $primary;\r\n    }\r\n  }\r\n\r\n  &__nav-btn {\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    display: none;\r\n\r\n    @media (max-width: 59em) {\r\n      display: block;\r\n      z-index: 9999;\r\n    }\r\n  }\r\n\r\n  &__nav-icon {\r\n    height: 4.8rem;\r\n    width: 4.8rem;\r\n    color: $dark-gray-1;\r\n\r\n    &[name='close-outline'] {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &--open {\r\n    & .header__nav {\r\n      @media (max-width: 59em) {\r\n        opacity: 1;\r\n        pointer-events: auto;\r\n        visibility: visible;\r\n        transform: translateX(0);\r\n      }\r\n    }\r\n\r\n    & .header__nav-icon[name='close-outline'] {\r\n      display: block;\r\n    }\r\n\r\n    & .header__nav-icon[name='menu-outline'] {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n\r\n// hero section\r\n.hero {\r\n  background-color: #fdf2e9;\r\n  padding: 4.8rem 0 9.6rem 0;\r\n\r\n  @media (max-width: 34em) {\r\n    padding: 2.4rem 0 6.4rem 0;\r\n  }\r\n\r\n  &__inner {\r\n    max-width: 130rem;\r\n    margin: 0 auto;\r\n    padding: 0 3.2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 9.6rem;\r\n    align-items: center;\r\n\r\n    @media (max-width: 84em) {\r\n      max-width: 120rem;\r\n    }\r\n\r\n    @media (max-width: 75em) {\r\n      gap: 4.8rem;\r\n    }\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: 1fr;\r\n      padding: 0 8rem;\r\n      gap: 6.4rem;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      padding: 0 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__container {\r\n    @media (max-width: 59em) {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__text {\r\n    font-size: 2rem;\r\n    line-height: 1.6;\r\n    margin-bottom: 4.8rem;\r\n  }\r\n\r\n  &__delivered-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n    margin-top: 8rem;\r\n\r\n    @media (max-width: 59em) {\r\n      justify-content: center;\r\n      margin-top: 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__delivered-images {\r\n    display: flex;\r\n  }\r\n\r\n  &__delivered-image {\r\n    height: 4.8rem;\r\n    width: 4.8rem;\r\n    border-radius: 50%;\r\n    margin-right: -1.6rem;\r\n    border: 3px solid #fdf2e9;\r\n\r\n    &:last-child {\r\n      margin: 0;\r\n    }\r\n  }\r\n\r\n  &__delivered-text {\r\n    font-size: 1.8rem;\r\n    font-weight: 600;\r\n    color: $dark-gray-1;\r\n\r\n    & span {\r\n      color: $primary;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n\r\n  &__image-container {\r\n    @media (max-width: 59em) {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    width: 100%;\r\n\r\n    @media (max-width: 59em) {\r\n      width: 60%;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      width: 80%;\r\n    }\r\n  }\r\n}\r\n\r\n// featured section\r\n.featured {\r\n  padding: 4.8rem 0 3.2rem 0;\r\n\r\n  &__title {\r\n    font-size: 1.4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.75px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-bottom: 2.4rem;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__images {\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  &__image {\r\n    height: 3.2rem;\r\n    filter: brightness(0);\r\n    opacity: 50%;\r\n\r\n    @media (max-width: 59em) {\r\n      height: 2.4rem;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      height: 1.2rem;\r\n    }\r\n  }\r\n}\r\n\r\n// how works section\r\n.how-works {\r\n  padding: 9.6rem 0;\r\n\r\n  &__step-number {\r\n    font-size: 8.6rem;\r\n    font-weight: 600;\r\n    color: $light-gray-2;\r\n    margin-bottom: 1.2rem;\r\n\r\n    @media (max-width: 59em) {\r\n      font-size: 7.4rem;\r\n    }\r\n  }\r\n\r\n  &__step-text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n    color: $dark-gray-1;\r\n  }\r\n\r\n  &__step-image-container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    @media (max-width: 34em) {\r\n      transform: translateY(2.4rem);\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      @media (max-width: 34em) {\r\n        grid-row: 1;\r\n      }\r\n    }\r\n\r\n    &:nth-child(6) {\r\n      @media (max-width: 34em) {\r\n        grid-row: 5;\r\n      }\r\n    }\r\n\r\n    &::before,\r\n    &::after {\r\n      content: '';\r\n      display: block;\r\n      border-radius: 50%;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n\r\n    &::before {\r\n      width: 60%;\r\n      padding-bottom: 60%;\r\n      background-color: $twine-1;\r\n      z-index: -2;\r\n    }\r\n\r\n    &::after {\r\n      width: 45%;\r\n      padding-bottom: 45%;\r\n      background-color: $twine-2;\r\n      z-index: -1;\r\n    }\r\n  }\r\n\r\n  &__step-image {\r\n    width: 35%;\r\n  }\r\n}\r\n\r\n// meals section\r\n.meals {\r\n  padding: 9.6rem 0;\r\n\r\n  &__item {\r\n    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n    border-radius: 11px;\r\n    overflow: hidden;\r\n    transition: all 0.4s;\r\n\r\n    &:hover {\r\n      transform: translateY(-1.2rem);\r\n      box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\r\n    }\r\n  }\r\n\r\n  &__item-content {\r\n    padding: 3.2rem 4.8rem 4.8rem 4.8rem;\r\n\r\n    @media (max-width: 59em) {\r\n      padding: 2.4rem 3.2rem 3.2rem 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__item-title {\r\n    font-size: 2.4rem;\r\n    color: $dark-gray-1;\r\n    font-weight: 600;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__item-attributes {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  }\r\n\r\n  &__item-attribute {\r\n    font-size: 1.8rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n  }\r\n\r\n  &__item-icon {\r\n    height: 2.4rem;\r\n    width: 2.4rem;\r\n    color: $primary;\r\n  }\r\n\r\n  &__item-img {\r\n    width: 100%;\r\n  }\r\n\r\n  &__diets {\r\n    @media (max-width: 44em) {\r\n      grid-column: 1 / -1;\r\n      justify-self: center;\r\n    }\r\n  }\r\n\r\n  &__btn-container {\r\n    text-align: center;\r\n    font-size: 1.8rem;\r\n  }\r\n}\r\n\r\n.testimonials {\r\n  background-color: $twine-1;\r\n  display: grid;\r\n  grid-template-columns: 55fr 45fr;\r\n  align-items: center;\r\n\r\n  @media (max-width: 59em) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  &__inner {\r\n    padding: 9.6rem;\r\n\r\n    @media (max-width: 75em) {\r\n      padding: 9.6rem 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__items {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: 4.8rem;\r\n    column-gap: 8rem;\r\n\r\n    @media (max-width: 34em) {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n\r\n  &__item-img {\r\n    width: 6.4rem;\r\n    border-radius: 50%;\r\n    margin-bottom: 1.2rem;\r\n  }\r\n\r\n  &__item-text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n    margin-bottom: 1.6rem;\r\n  }\r\n\r\n  &__item-name {\r\n    font-size: 1.6rem;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__gallery {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 1.6rem;\r\n    padding: 1.6rem;\r\n\r\n    @media (max-width: 84em) {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: repeat(6, 1fr);\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      grid-template-columns: repeat(4, 1fr);\r\n      gap: 1.2rem;\r\n    }\r\n  }\r\n\r\n  &__gallery-item {\r\n    overflow: hidden;\r\n  }\r\n\r\n  &__gallery-img {\r\n    display: block;\r\n    width: 100%;\r\n    transition: all 0.4s;\r\n\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n\r\n// pricing section\r\n.pricing {\r\n  padding: 9.6rem 0;\r\n\r\n  &__plan {\r\n    border-radius: 11px;\r\n    width: 75%;\r\n\r\n    @media (max-width: 44em) {\r\n      width: 100%;\r\n    }\r\n\r\n    &--starter {\r\n      justify-self: end;\r\n      border: 2px solid $twine-1;\r\n      padding: 4.6rem;\r\n    }\r\n\r\n    &--complete {\r\n      background-color: $twine-1;\r\n      padding: 4.8rem;\r\n      position: relative;\r\n      overflow: hidden;\r\n\r\n      &::after {\r\n        content: 'Best value';\r\n        position: absolute;\r\n        top: 6%;\r\n        right: -18%;\r\n        text-transform: uppercase;\r\n        font-size: 1.4rem;\r\n        font-weight: 700;\r\n        color: #333;\r\n        background-color: $paleo;\r\n        padding: 0.8rem 8rem;\r\n        transform: rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__plan-header {\r\n    text-align: center;\r\n    margin-bottom: 4.8rem;\r\n  }\r\n\r\n  &__plan-name {\r\n    color: $primary;\r\n    font-weight: 600;\r\n    font-size: 2rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.75px;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__plan-price {\r\n    font-size: 6.2rem;\r\n    font-weight: 600;\r\n    color: $dark-gray-1;\r\n    margin-bottom: 1.6rem;\r\n\r\n    & span {\r\n      font-size: 3rem;\r\n      font-weight: 500;\r\n      margin-right: 0.8rem;\r\n    }\r\n  }\r\n\r\n  &__plan-text {\r\n    font-size: 1.6rem;\r\n    line-height: 1.6;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__plan-sing-up {\r\n    text-align: center;\r\n    margin-top: 4.8rem;\r\n  }\r\n\r\n  &__plan-details {\r\n    font-size: 1.6rem;\r\n    line-height: 1.6;\r\n    text-align: center;\r\n  }\r\n\r\n  &__feature-icon {\r\n    color: $light-gray-1;\r\n    height: 3.2rem;\r\n    width: 3.2rem;\r\n    background-color: $primary;\r\n    margin-bottom: 3.2rem;\r\n    padding: 1.6rem;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  &__feature-title {\r\n    font-size: 2.4rem;\r\n    color: $twine-4;\r\n    font-weight: 700;\r\n    margin-bottom: 1.6rem;\r\n  }\r\n\r\n  &__feature-text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n  }\r\n}\r\n\r\n// cta section\r\n.cta {\r\n  padding: 4.8rem 0 12.8rem;\r\n\r\n  &__inner {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);\r\n    border-radius: 11px;\r\n    background-image: linear-gradient(to right bottom, rgba($primary, 0.8), $primary);\r\n    overflow: hidden;\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: 3fr 2fr;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n\r\n  &__text-container {\r\n    padding: 4.8rem 6.4rem 6.4rem 6.4rem;\r\n\r\n    @media (max-width: 34em) {\r\n      padding: 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    color: inherit;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n    margin-bottom: 4.8rem;\r\n  }\r\n\r\n  &__form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    column-gap: 3.2rem;\r\n    row-gap: 2.4rem;\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n\r\n  &__form-label {\r\n    display: block;\r\n    font-size: 1.6rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1.2rem;\r\n  }\r\n\r\n  &__form-input {\r\n    width: 100%;\r\n    padding: 1.2rem;\r\n    font-size: 1.8rem;\r\n    font-family: inherit;\r\n    color: inherit;\r\n    border: none;\r\n    background-color: $twine-1;\r\n    border-radius: 9px;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n\r\n    &:focus {\r\n      outline: none;\r\n      box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);\r\n    }\r\n\r\n    &::placeholder {\r\n      color: $light-gray-2;\r\n    }\r\n  }\r\n\r\n  &__form-btn {\r\n    margin-top: 1.2rem;\r\n  }\r\n\r\n  &__img-container {\r\n    background-image: linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('./assets/eating.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    @media (max-width: 34em) {\r\n      height: 32rem;\r\n      grid-row: 1;\r\n    }\r\n  }\r\n}\r\n\r\n// footer section\r\n.footer {\r\n  padding: 12.8rem 0;\r\n  border-top: 1px solid $twine-2;\r\n\r\n  &__inner {\r\n    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;\r\n\r\n    @media (max-width: 44em) {\r\n      grid-template-columns: repeat(6, 1fr);\r\n    }\r\n  }\r\n\r\n  &__nav {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n\r\n    @media (max-width: 44em) {\r\n      grid-row: 1;\r\n      grid-column: span 2;\r\n      margin-bottom: 3.2rem;\r\n    }\r\n\r\n    &--logo {\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      @media (max-width: 44em) {\r\n        grid-column: span 3;\r\n        grid-row: 2;\r\n      }\r\n    }\r\n\r\n    &--address {\r\n      @media (max-width: 44em) {\r\n        grid-column: span 3;\r\n        grid-row: 2;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__nav-heading {\r\n    font-size: 1.8rem;\r\n    font-weight: 500;\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n  &__nav-items {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__nav-contacts {\r\n    font-style: normal;\r\n    font-size: 1.6rem;\r\n    line-height: 1.6;\r\n  }\r\n\r\n  &__nav-address {\r\n    margin-bottom: 2.4rem;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__link {\r\n    text-decoration: none;\r\n    font-size: 1.6rem;\r\n    color: $light-gray-2;\r\n    transition: all 0.3s;\r\n\r\n    &:hover {\r\n      color: $twine-2;\r\n    }\r\n  }\r\n\r\n  &__logo-link {\r\n    display: block;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__logo {\r\n    height: 2.2rem;\r\n  }\r\n\r\n  &__social-links {\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__social-icon {\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__copyright {\r\n    font-size: 1.4rem;\r\n    line-height: 1.6;\r\n    color: $light-gray-2;\r\n    margin-top: auto;\r\n  }\r\n}\r\n\r\n.sticky {\r\n  & .header {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 8rem;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.97);\r\n    z-index: 999;\r\n    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);\r\n  }\r\n\r\n  & .hero {\r\n    margin-top: 9.6rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/app-1.png":
/*!******************************!*\
  !*** ./src/assets/app-1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/app-1.png";

/***/ }),

/***/ "./src/assets/app-2.png":
/*!******************************!*\
  !*** ./src/assets/app-2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/app-2.png";

/***/ }),

/***/ "./src/assets/app-3.png":
/*!******************************!*\
  !*** ./src/assets/app-3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/app-3.png";

/***/ }),

/***/ "./src/assets/eating.jpg":
/*!*******************************!*\
  !*** ./src/assets/eating.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eating.jpg";

/***/ }),

/***/ "./src/assets/featured-1.png":
/*!***********************************!*\
  !*** ./src/assets/featured-1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/featured-1.png";

/***/ }),

/***/ "./src/assets/featured-2.png":
/*!***********************************!*\
  !*** ./src/assets/featured-2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/featured-2.png";

/***/ }),

/***/ "./src/assets/featured-3.png":
/*!***********************************!*\
  !*** ./src/assets/featured-3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/featured-3.png";

/***/ }),

/***/ "./src/assets/featured-4.png":
/*!***********************************!*\
  !*** ./src/assets/featured-4.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/featured-4.png";

/***/ }),

/***/ "./src/assets/featured-5.png":
/*!***********************************!*\
  !*** ./src/assets/featured-5.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/featured-5.png";

/***/ }),

/***/ "./src/assets/hero-min.png":
/*!*********************************!*\
  !*** ./src/assets/hero-min.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hero-min.png";

/***/ }),

/***/ "./src/assets/hero.png":
/*!*****************************!*\
  !*** ./src/assets/hero.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hero.png";

/***/ }),

/***/ "./src/assets/hero.webp":
/*!******************************!*\
  !*** ./src/assets/hero.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hero.webp";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.png";

/***/ }),

/***/ "./src/assets/meal-1.jpg":
/*!*******************************!*\
  !*** ./src/assets/meal-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/meal-1.jpg";

/***/ }),

/***/ "./src/assets/meal-2.jpg":
/*!*******************************!*\
  !*** ./src/assets/meal-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/meal-2.jpg";

/***/ }),

/***/ "./src/assets/profile-1.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile-1.jpg";

/***/ }),

/***/ "./src/assets/profile-2.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile-2.jpg";

/***/ }),

/***/ "./src/assets/profile-3.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile-3.jpg";

/***/ }),

/***/ "./src/assets/profile-4.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile-4.jpg";

/***/ }),

/***/ "./src/assets/profile-5.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile-5.jpg";

/***/ }),

/***/ "./src/assets/profile-6.jpg":
/*!**********************************!*\
  !*** ./src/assets/profile-6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/profile-6.jpg";

/***/ }),

/***/ "./src/assets/testimonial-1.jpg":
/*!**************************************!*\
  !*** ./src/assets/testimonial-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonial-1.jpg";

/***/ }),

/***/ "./src/assets/testimonial-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/testimonial-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonial-2.jpg";

/***/ }),

/***/ "./src/assets/testimonial-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/testimonial-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonial-3.jpg";

/***/ }),

/***/ "./src/assets/testimonial-4.jpg":
/*!**************************************!*\
  !*** ./src/assets/testimonial-4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonial-4.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-1.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-1.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-1.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-10.jpg":
/*!************************************************!*\
  !*** ./src/assets/testimonials-gallery-10.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-10.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-11.jpg":
/*!************************************************!*\
  !*** ./src/assets/testimonials-gallery-11.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-11.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-12.jpg":
/*!************************************************!*\
  !*** ./src/assets/testimonials-gallery-12.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-12.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-2.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-2.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-3.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-3.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-3.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-4.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-4.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-4.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-5.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-5.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-5.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-6.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-6.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-6.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-7.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-7.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-7.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-8.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-8.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-8.jpg";

/***/ }),

/***/ "./src/assets/testimonials-gallery-9.jpg":
/*!***********************************************!*\
  !*** ./src/assets/testimonials-gallery-9.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/testimonials-gallery-9.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_profile_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/profile-1.jpg */ "./src/assets/profile-1.jpg");
/* harmony import */ var _assets_profile_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/profile-2.jpg */ "./src/assets/profile-2.jpg");
/* harmony import */ var _assets_profile_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/profile-3.jpg */ "./src/assets/profile-3.jpg");
/* harmony import */ var _assets_profile_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/profile-4.jpg */ "./src/assets/profile-4.jpg");
/* harmony import */ var _assets_profile_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/profile-5.jpg */ "./src/assets/profile-5.jpg");
/* harmony import */ var _assets_profile_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/profile-6.jpg */ "./src/assets/profile-6.jpg");
/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/hero.png */ "./src/assets/hero.png");
/* harmony import */ var _assets_hero_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/hero.webp */ "./src/assets/hero.webp");
/* harmony import */ var _assets_hero_min_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/hero-min.png */ "./src/assets/hero-min.png");
/* harmony import */ var _assets_featured_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/featured-1.png */ "./src/assets/featured-1.png");
/* harmony import */ var _assets_featured_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/featured-2.png */ "./src/assets/featured-2.png");
/* harmony import */ var _assets_featured_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/featured-3.png */ "./src/assets/featured-3.png");
/* harmony import */ var _assets_featured_4_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/featured-4.png */ "./src/assets/featured-4.png");
/* harmony import */ var _assets_featured_5_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/featured-5.png */ "./src/assets/featured-5.png");
/* harmony import */ var _assets_app_1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/app-1.png */ "./src/assets/app-1.png");
/* harmony import */ var _assets_app_2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/app-2.png */ "./src/assets/app-2.png");
/* harmony import */ var _assets_app_3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/app-3.png */ "./src/assets/app-3.png");
/* harmony import */ var _assets_meal_1_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/meal-1.jpg */ "./src/assets/meal-1.jpg");
/* harmony import */ var _assets_meal_2_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/meal-2.jpg */ "./src/assets/meal-2.jpg");
/* harmony import */ var _assets_testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/testimonial-1.jpg */ "./src/assets/testimonial-1.jpg");
/* harmony import */ var _assets_testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/testimonial-2.jpg */ "./src/assets/testimonial-2.jpg");
/* harmony import */ var _assets_testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/testimonial-3.jpg */ "./src/assets/testimonial-3.jpg");
/* harmony import */ var _assets_testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/testimonial-4.jpg */ "./src/assets/testimonial-4.jpg");
/* harmony import */ var _assets_testimonials_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/testimonials-gallery-1.jpg */ "./src/assets/testimonials-gallery-1.jpg");
/* harmony import */ var _assets_testimonials_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/testimonials-gallery-2.jpg */ "./src/assets/testimonials-gallery-2.jpg");
/* harmony import */ var _assets_testimonials_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/testimonials-gallery-3.jpg */ "./src/assets/testimonials-gallery-3.jpg");
/* harmony import */ var _assets_testimonials_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/testimonials-gallery-4.jpg */ "./src/assets/testimonials-gallery-4.jpg");
/* harmony import */ var _assets_testimonials_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/testimonials-gallery-5.jpg */ "./src/assets/testimonials-gallery-5.jpg");
/* harmony import */ var _assets_testimonials_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/testimonials-gallery-6.jpg */ "./src/assets/testimonials-gallery-6.jpg");
/* harmony import */ var _assets_testimonials_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/testimonials-gallery-7.jpg */ "./src/assets/testimonials-gallery-7.jpg");
/* harmony import */ var _assets_testimonials_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/testimonials-gallery-8.jpg */ "./src/assets/testimonials-gallery-8.jpg");
/* harmony import */ var _assets_testimonials_gallery_9_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/testimonials-gallery-9.jpg */ "./src/assets/testimonials-gallery-9.jpg");
/* harmony import */ var _assets_testimonials_gallery_10_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/testimonials-gallery-10.jpg */ "./src/assets/testimonials-gallery-10.jpg");
/* harmony import */ var _assets_testimonials_gallery_11_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/testimonials-gallery-11.jpg */ "./src/assets/testimonials-gallery-11.jpg");
/* harmony import */ var _assets_testimonials_gallery_12_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/testimonials-gallery-12.jpg */ "./src/assets/testimonials-gallery-12.jpg");
/* harmony import */ var _assets_eating_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/eating.jpg */ "./src/assets/eating.jpg");
/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/navbar.js */ "./src/modules/navbar.js");
/* harmony import */ var _modules_linksHelper_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/linksHelper.js */ "./src/modules/linksHelper.js");
/* harmony import */ var _modules_stickyNav_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/stickyNav.js */ "./src/modules/stickyNav.js");









































(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_38__["default"])();
(0,_modules_linksHelper_js__WEBPACK_IMPORTED_MODULE_39__["default"])();
(0,_modules_stickyNav_js__WEBPACK_IMPORTED_MODULE_40__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxhQUFhLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxVQUFVLGFBQWEsYUFBYSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FB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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDTTtBQUNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNMO0FBQ0M7QUFDRztBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTDtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBQ0E7QUFDakI7QUFFWTtBQUNVO0FBQ0o7QUFFL0NGLCtEQUFNLEVBQUU7QUFDUm5CLG9FQUFXLEVBQUU7QUFDYnFCLGtFQUFTLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmVnZm9vZC8uL3NyYy9tb2R1bGVzL2xpbmtzSGVscGVyLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL3NyYy9tb2R1bGVzL25hdmJhci5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9zcmMvbW9kdWxlcy9zdGlja3lOYXYuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vc3JjL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhOmxpbmsnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgbGlua3NIZWxwZXIgPSAoKSA9PiB7XG4gIGFsbExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICBpZiAoaHJlZiA9PT0gJyMnKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChocmVmICE9PSAnIycgJiYgaHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpO1xuICAgICAgICBzZWN0aW9uRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXJfX25hdi1saW5rJykpIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tb3BlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbmtzSGVscGVyO1xuIiwiY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LWJ0bicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5jb25zdCBuYXZCYXIgPSAoKSA9PiB7XG4gIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1vcGVuJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyO1xuIiwiY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuXG5jb25zdCBzdGlja3lOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG9icyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgY29uc3QgZW50ID0gZW50cmllc1swXTtcbiAgICAgIGlmIChlbnQuaXNJbnRlcnNlY3RpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XG4gICAgICB9XG4gICAgICBpZiAoZW50LmlzSW50ZXJzZWN0aW5nID09PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICByb290OiBudWxsLFxuICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgcm9vdE1hcmdpbjogJy04MHB4JyxcbiAgICB9LFxuICApO1xuICBvYnMub2JzZXJ2ZShoZXJvU2VjdGlvbik7XG59O1xuZXhwb3J0IGRlZmF1bHQgc3RpY2t5TmF2O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2VhdGluZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6OmJlZm9yZSxcXG5ibG9ja3F1b3RlOjphZnRlcixcXG5xOjpiZWZvcmUsXFxucTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgLyogMTBweCAvIDE2cHggPSAwLjYyNSA9IDYyLjUlICovXFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTYuMjUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDEsXFxuLnRpdGxlLS1wcmltYXJ5LFxcbmgyLFxcbi50aXRsZS0tc2Vjb25kYXJ5LFxcbmgzLFxcbi50aXRsZS0tdGVydGlhcnksXFxuaDQsXFxuaDUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbn1cXG5cXG5oMSxcXG4udGl0bGUtLXByaW1hcnkge1xcbiAgZm9udC1zaXplOiA1LjJyZW07XFxuICBsaW5lLWhlaWdodDogMS4wNTtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuXFxuaDIsXFxuLnRpdGxlLS1zZWNvbmRhcnkge1xcbiAgZm9udC1zaXplOiA0LjRyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgbWFyZ2luLWJvdHRvbTogOS42cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgaDIsXFxuICAudGl0bGUtLXNlY29uZGFyeSB7XFxuICAgIGZvbnQtc2l6ZTogMy42cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgaDIsXFxuICAudGl0bGUtLXNlY29uZGFyeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXG4gIH1cXG59XFxuXFxuaDMsXFxuLnRpdGxlLS10ZXJ0aWFyeSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgaDMsXFxuICAudGl0bGUtLXRlcnRpYXJ5IHtcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxuICB9XFxufVxcblxcbmg0LFxcbi50aXRsZS0tc3ViIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxufVxcblxcbi5tYXJnaW5fX3JpZ2h0LS1zbWFsbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNnJlbSAhaW1wb3J0YW50O1xcbn1cXG4ubWFyZ2luX19ib3R0b20tLW1kIHtcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwcmVtO1xcbiAgcGFkZGluZzogMCAzLjJyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDYuNHJlbTtcXG4gIHJvdy1nYXA6IDkuNnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIC5ncmlkIHtcXG4gICAgY29sdW1uLWdhcDogNC44cmVtO1xcbiAgICByb3ctZ2FwOiA2LjRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuZ3JpZCB7XFxuICAgIHJvdy1nYXA6IDQuOHJlbTtcXG4gIH1cXG59XFxuLmdyaWQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZ3JpZDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDkuNnJlbTtcXG59XFxuLmdyaWRfX2NvbHMtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ncmlkX19jb2xzLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5ncmlkX19jb2xzLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAuZ3JpZF9fY29scy0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuZ3JpZF9fY29scy0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uZ3JpZF9fY29scy0tNCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLmdyaWRfX2NvbHMtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmdyaWRfX2NvbHMtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLmdyaWRfX2NvbHMtLTUge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLmdyaWQtLXZlcnRpY2FsLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogI2VmNTgxNDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5saW5rOmhvdmVyLCAubGluazphY3RpdmUge1xcbiAgY29sb3I6ICNjMzk1NTY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmJ0biB7XFxuICAgIHBhZGRpbmc6IDIuNHJlbSAxLjZyZW07XFxuICB9XFxufVxcbi5idG4tLWZpbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTgxNDtcXG4gIGNvbG9yOiAjZjlmOGY4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmNTgxNDtcXG59XFxuLmJ0bi0tZmlsbDpob3ZlciwgLmJ0bi0tZmlsbDphY3RpdmUge1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGY4O1xcbn1cXG4uYnRuLS1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY4Zjg7XFxuICBjb2xvcjogIzE1MTAxMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGYyZTk7XFxufVxcbi5idG4tLW91dGxpbmU6YWN0aXZlLCAuYnRuLS1vdXRsaW5lOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCAjZjlmOGY4O1xcbiAgYm9yZGVyLWNvbG9yOiAjMTUxMDEwO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNnJlbTtcXG59XFxuLmxpc3RfX2l0ZW0ge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuLmxpc3RfX2ljb24ge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBjb2xvcjogI2VmNTgxNDtcXG59XFxuXFxuLnRhZ3Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG4udGFncyAudGFnIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzE1MTAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnRhZ3MgLnRhZy0tdmVnZXRhcmlhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFjZjY2O1xcbn1cXG4udGFncyAudGFnLS12ZWdhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkODJkO1xcbn1cXG4udGFncyAudGFnLS1wYWxlbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNDNiO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gIGhlaWdodDogOS42cmVtO1xcbiAgcGFkZGluZzogMCA0LjhyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMCAzLjJyZW07XFxuICB9XFxufVxcbi5oZWFkZXJfX2xvZ28taW1nIHtcXG4gIGhlaWdodDogMi4ycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlYWRlcl9fbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcbi5oZWFkZXJfX25hdi1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNC44cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgLmhlYWRlcl9fbmF2LWxpc3Qge1xcbiAgICBnYXA6IDMuMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZWFkZXJfX25hdi1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0LjhyZW07XFxuICB9XFxufVxcbi5oZWFkZXJfX25hdi1saW5rOmxpbmssIC5oZWFkZXJfX25hdi1saW5rOnZpc2l0ZWQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZWFkZXJfX25hdi1saW5rOmxpbmssIC5oZWFkZXJfX25hdi1saW5rOnZpc2l0ZWQge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcbi5oZWFkZXJfX25hdi1saW5rOmhvdmVyLCAuaGVhZGVyX19uYXYtbGluazphY3RpdmUge1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxufVxcbi5oZWFkZXJfX25hdi1pdGVtLWN0YSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWY1ODE0O1xcbn1cXG4uaGVhZGVyX19uYXYtaXRlbS1jdGE6bGluaywgLmhlYWRlcl9fbmF2LWl0ZW0tY3RhOnZpc2l0ZWQge1xcbiAgcGFkZGluZzogMS4ycmVtIDIuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGNvbG9yOiAjZjlmOGY4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTgxNDtcXG59XFxuLmhlYWRlcl9fbmF2LWl0ZW0tY3RhOmhvdmVyLCAuaGVhZGVyX19uYXYtaXRlbS1jdGE6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY4Zjg7XFxuICBjb2xvcjogI2VmNTgxNDtcXG59XFxuLmhlYWRlcl9fbmF2LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZWFkZXJfX25hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogOTk5OTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbmF2LWljb24ge1xcbiAgaGVpZ2h0OiA0LjhyZW07XFxuICB3aWR0aDogNC44cmVtO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxufVxcbi5oZWFkZXJfX25hdi1pY29uW25hbWU9Y2xvc2Utb3V0bGluZV0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZWFkZXItLW9wZW4gLmhlYWRlcl9fbmF2IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuLmhlYWRlci0tb3BlbiAuaGVhZGVyX19uYXYtaWNvbltuYW1lPWNsb3NlLW91dGxpbmVdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaGVhZGVyLS1vcGVuIC5oZWFkZXJfX25hdi1pY29uW25hbWU9bWVudS1vdXRsaW5lXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgcGFkZGluZzogNC44cmVtIDAgOS42cmVtIDA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuaGVybyB7XFxuICAgIHBhZGRpbmc6IDIuNHJlbSAwIDYuNHJlbSAwO1xcbiAgfVxcbn1cXG4uaGVyb19faW5uZXIge1xcbiAgbWF4LXdpZHRoOiAxMzByZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogOS42cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg0ZW0pIHtcXG4gIC5oZXJvX19pbm5lciB7XFxuICAgIG1heC13aWR0aDogMTIwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgLmhlcm9fX2lubmVyIHtcXG4gICAgZ2FwOiA0LjhyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVyb19faW5uZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMCA4cmVtO1xcbiAgICBnYXA6IDYuNHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5oZXJvX19pbm5lciB7XFxuICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlcm9fX2NvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLmhlcm9fX3RleHQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXG59XFxuLmhlcm9fX2RlbGl2ZXJlZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNnJlbTtcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVyb19fZGVsaXZlcmVkLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzLjJyZW07XFxuICB9XFxufVxcbi5oZXJvX19kZWxpdmVyZWQtaW1hZ2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZXJvX19kZWxpdmVyZWQtaW1hZ2Uge1xcbiAgaGVpZ2h0OiA0LjhyZW07XFxuICB3aWR0aDogNC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMS42cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZkZjJlOTtcXG59XFxuLmhlcm9fX2RlbGl2ZXJlZC1pbWFnZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmhlcm9fX2RlbGl2ZXJlZC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbn1cXG4uaGVyb19fZGVsaXZlcmVkLXRleHQgc3BhbiB7XFxuICBjb2xvcjogI2VmNTgxNDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVyb19faW1hZ2UtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG4uaGVyb19faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVyb19faW1hZ2Uge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmhlcm9fX2ltYWdlIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuLmZlYXR1cmVkIHtcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDMuMnJlbSAwO1xcbn1cXG4uZmVhdHVyZWRfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcbiAgY29sb3I6ICNhOGE3YTc7XFxufVxcbi5mZWF0dXJlZF9faW1hZ2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmZlYXR1cmVkX19pbWFnZSB7XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKTtcXG4gIG9wYWNpdHk6IDUwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gIH1cXG59XFxuXFxuLmhvdy13b3JrcyB7XFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXG59XFxuLmhvdy13b3Jrc19fc3RlcC1udW1iZXIge1xcbiAgZm9udC1zaXplOiA4LjZyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNhOGE3YTc7XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaG93LXdvcmtzX19zdGVwLW51bWJlciB7XFxuICAgIGZvbnQtc2l6ZTogNy40cmVtO1xcbiAgfVxcbn1cXG4uaG93LXdvcmtzX19zdGVwLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS44O1xcbiAgY29sb3I6ICMxNTEwMTA7XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjRyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lcjpudGgtY2hpbGQoNikge1xcbiAgICBncmlkLXJvdzogNTtcXG4gIH1cXG59XFxuLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXI6OmJlZm9yZSwgLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gIHotaW5kZXg6IC0yO1xcbn1cXG4uaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIHBhZGRpbmctYm90dG9tOiA0NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDliNWE1O1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtaW1hZ2Uge1xcbiAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLm1lYWxzIHtcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcbn1cXG4ubWVhbHNfX2l0ZW0ge1xcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuLm1lYWxzX19pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4ycmVtKTtcXG4gIGJveC1zaGFkb3c6IDAgMy4ycmVtIDYuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG4ubWVhbHNfX2l0ZW0tY29udGVudCB7XFxuICBwYWRkaW5nOiAzLjJyZW0gNC44cmVtIDQuOHJlbSA0LjhyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAubWVhbHNfX2l0ZW0tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIuNHJlbSAzLjJyZW0gMy4ycmVtIDMuMnJlbTtcXG4gIH1cXG59XFxuLm1lYWxzX19pdGVtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG4ubWVhbHNfX2l0ZW0tYXR0cmlidXRlcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcbi5tZWFsc19faXRlbS1hdHRyaWJ1dGUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS42cmVtO1xcbn1cXG4ubWVhbHNfX2l0ZW0taWNvbiB7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAyLjRyZW07XFxuICBjb2xvcjogI2VmNTgxNDtcXG59XFxuLm1lYWxzX19pdGVtLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5tZWFsc19fZGlldHMge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcbi5tZWFsc19fYnRuLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRlc3RpbW9uaWFscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTVmciA0NWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC50ZXN0aW1vbmlhbHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLnRlc3RpbW9uaWFsc19faW5uZXIge1xcbiAgcGFkZGluZzogOS42cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgLnRlc3RpbW9uaWFsc19faW5uZXIge1xcbiAgICBwYWRkaW5nOiA5LjZyZW0gMy4ycmVtO1xcbiAgfVxcbn1cXG4udGVzdGltb25pYWxzX19pdGVtcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcm93LWdhcDogNC44cmVtO1xcbiAgY29sdW1uLWdhcDogOHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC50ZXN0aW1vbmlhbHNfX2l0ZW1zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi50ZXN0aW1vbmlhbHNfX2l0ZW0taW1nIHtcXG4gIHdpZHRoOiA2LjRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcbi50ZXN0aW1vbmlhbHNfX2l0ZW0tdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxufVxcbi50ZXN0aW1vbmlhbHNfX2l0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbn1cXG4udGVzdGltb25pYWxzX19nYWxsZXJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxLjZyZW07XFxuICBwYWRkaW5nOiAxLjZyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NGVtKSB7XFxuICAudGVzdGltb25pYWxzX19nYWxsZXJ5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC50ZXN0aW1vbmlhbHNfX2dhbGxlcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLnRlc3RpbW9uaWFsc19fZ2FsbGVyeSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdhcDogMS4ycmVtO1xcbiAgfVxcbn1cXG4udGVzdGltb25pYWxzX19nYWxsZXJ5LWl0ZW0ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRlc3RpbW9uaWFsc19fZ2FsbGVyeS1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG4udGVzdGltb25pYWxzX19nYWxsZXJ5LWltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5wcmljaW5nIHtcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcbn1cXG4ucHJpY2luZ19fcGxhbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5wcmljaW5nX19wbGFuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5wcmljaW5nX19wbGFuLS1zdGFydGVyIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZkZjJlOTtcXG4gIHBhZGRpbmc6IDQuNnJlbTtcXG59XFxuLnByaWNpbmdfX3BsYW4tLWNvbXBsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICBwYWRkaW5nOiA0LjhyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJpY2luZ19fcGxhbi0tY29tcGxldGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJCZXN0IHZhbHVlXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNiU7XFxuICByaWdodDogLTE4JTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0M2I7XFxuICBwYWRkaW5nOiAwLjhyZW0gOHJlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLnByaWNpbmdfX3BsYW4taGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXG59XFxuLnByaWNpbmdfX3BsYW4tbmFtZSB7XFxuICBjb2xvcjogI2VmNTgxNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuLnByaWNpbmdfX3BsYW4tcHJpY2Uge1xcbiAgZm9udC1zaXplOiA2LjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxufVxcbi5wcmljaW5nX19wbGFuLXByaWNlIHNwYW4ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xcbn1cXG4ucHJpY2luZ19fcGxhbi10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbn1cXG4ucHJpY2luZ19fcGxhbi1zaW5nLXVwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQuOHJlbTtcXG59XFxuLnByaWNpbmdfX3BsYW4tZGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wcmljaW5nX19mZWF0dXJlLWljb24ge1xcbiAgY29sb3I6ICNmOWY4Zjg7XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIHdpZHRoOiAzLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1ODE0O1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ucHJpY2luZ19fZmVhdHVyZS10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGNvbG9yOiAjNWQzZTMyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXG59XFxuLnByaWNpbmdfX2ZlYXR1cmUtdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxufVxcblxcbi5jdGEge1xcbiAgcGFkZGluZzogNC44cmVtIDAgMTIuOHJlbTtcXG59XFxuLmN0YV9faW5uZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoMjM5LCA4OCwgMjAsIDAuOCksICNlZjU4MTQpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5jdGFfX2lubmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmN0YV9faW5uZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLmN0YV9fdGV4dC1jb250YWluZXIge1xcbiAgcGFkZGluZzogNC44cmVtIDYuNHJlbSA2LjRyZW0gNi40cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmN0YV9fdGV4dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAzLjJyZW07XFxuICB9XFxufVxcbi5jdGFfX3RpdGxlIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG4uY3RhX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXG59XFxuLmN0YV9fZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMy4ycmVtO1xcbiAgcm93LWdhcDogMi40cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmN0YV9fZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uY3RhX19mb3JtLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbn1cXG4uY3RhX19mb3JtLWlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5jdGFfX2Zvcm0taW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuOHJlbSByZ2JhKDI1MywgMjQyLCAyMzMsIDAuNSk7XFxufVxcbi5jdGFfX2Zvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbn1cXG4uY3RhX19mb3JtLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxLjJyZW07XFxufVxcbi5jdGFfX2ltZy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgyMzUsIDE1MSwgNzgsIDAuMzUpLCByZ2JhKDIzMCwgMTI1LCAzNCwgMC4zNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5jdGFfX2ltZy1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMycmVtO1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxMi44cmVtIDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5YjVhNTtcXG59XFxuLmZvb3Rlcl9faW5uZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxLjVmciAxZnIgMWZyIDFmcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5mb290ZXJfX2lubmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIH1cXG59XFxuLmZvb3Rlcl9fbmF2IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMi40cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLmZvb3Rlcl9fbmF2IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG4gIH1cXG59XFxuLmZvb3Rlcl9fbmF2LS1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLmZvb3Rlcl9fbmF2LS1sb2dvIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAuZm9vdGVyX19uYXYtLWFkZHJlc3Mge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgICBncmlkLXJvdzogMjtcXG4gIH1cXG59XFxuLmZvb3Rlcl9fbmF2LWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuLmZvb3Rlcl9fbmF2LWl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMi40cmVtO1xcbn1cXG4uZm9vdGVyX19uYXYtY29udGFjdHMge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG4uZm9vdGVyX19uYXYtYWRkcmVzcyB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxuICBjb2xvcjogI2E4YTdhNztcXG59XFxuLmZvb3Rlcl9fbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5mb290ZXJfX2xpbms6aG92ZXIge1xcbiAgY29sb3I6ICNkOWI1YTU7XFxufVxcbi5mb290ZXJfX2xvZ28tbGluayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuLmZvb3Rlcl9fbG9nbyB7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG59XFxuLmZvb3Rlcl9fc29jaWFsLWxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyLjRyZW07XFxufVxcbi5mb290ZXJfX3NvY2lhbC1pY29uIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyLjRyZW07XFxufVxcbi5mb290ZXJfX2NvcHlyaWdodCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBjb2xvcjogI2E4YTdhNztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5zdGlja3kgLmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOHJlbTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYm94LXNoYWRvdzogMCAxLjJyZW0gMy4ycmVtIHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcbi5zdGlja3kgLmhlcm8ge1xcbiAgbWFyZ2luLXRvcDogOS42cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQW1CQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBaEJGO0FBa0JFO0VBTEY7SUFNSSxpQkFBQTtFQWZGO0FBQ0Y7QUFpQkU7RUFURjtJQVVJLGNBQUE7RUFkRjtBQUNGOztBQWlCQTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0F0Q1k7RUF1Q1osa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxtQkFBQTtBQWRGOztBQWlCQTs7Ozs7Ozs7RUFR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QUE7SUFDQSxXQUFBO0VBakdOO0FBQ0Y7QUFxR007RUFERjtJQUVJLG1CQUFBO0lBQ0EsV0FBQTtFQWxHTjtBQUNGO0FBc0dFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcEdKO0FBdUdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBckdKO0FBd0dFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdEdKO0FBeUdFO0VBQ0UscUJBQUE7RUFDQSxjQXppQ1c7QUFrOEJmO0FBMEdFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBL2lDVztFQWdqQ1gsb0JBQUE7QUF4R0o7QUEwR0k7RUFDRSxjQWhqQ0k7QUF3OEJWO0FBNEdFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBMUdKO0FBNkdFO0VBQ0UsY0FBQTtBQTNHSjtBQThHRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUE1R0o7QUErR0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBN0dKO0FBZ0hFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBL2tDVztFQWdsQ1gsZ0JBQUE7QUE5R0o7O0FBbUhFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQWhISjtBQW1IRTtFQUNFLGtCQUFBO0FBakhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIHJlc2V0IGNzc1xcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG5kaXYsXFxyXFxuc3BhbixcXHJcXG5hcHBsZXQsXFxyXFxub2JqZWN0LFxcclxcbmlmcmFtZSxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxucHJlLFxcclxcbmEsXFxyXFxuYWJicixcXHJcXG5hY3JvbnltLFxcclxcbmFkZHJlc3MsXFxyXFxuYmlnLFxcclxcbmNpdGUsXFxyXFxuY29kZSxcXHJcXG5kZWwsXFxyXFxuZGZuLFxcclxcbmVtLFxcclxcbmltZyxcXHJcXG5pbnMsXFxyXFxua2JkLFxcclxcbnEsXFxyXFxucyxcXHJcXG5zYW1wLFxcclxcbnNtYWxsLFxcclxcbnN0cmlrZSxcXHJcXG5zdHJvbmcsXFxyXFxuc3ViLFxcclxcbnN1cCxcXHJcXG50dCxcXHJcXG52YXIsXFxyXFxuYixcXHJcXG51LFxcclxcbmksXFxyXFxuY2VudGVyLFxcclxcbmRsLFxcclxcbmR0LFxcclxcbmRkLFxcclxcbm9sLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbmZpZWxkc2V0LFxcclxcbmZvcm0sXFxyXFxubGFiZWwsXFxyXFxubGVnZW5kLFxcclxcbnRhYmxlLFxcclxcbmNhcHRpb24sXFxyXFxudGJvZHksXFxyXFxudGZvb3QsXFxyXFxudGhlYWQsXFxyXFxudHIsXFxyXFxudGgsXFxyXFxudGQsXFxyXFxuYXJ0aWNsZSxcXHJcXG5hc2lkZSxcXHJcXG5jYW52YXMsXFxyXFxuZGV0YWlscyxcXHJcXG5lbWJlZCxcXHJcXG5maWd1cmUsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5vdXRwdXQsXFxyXFxucnVieSxcXHJcXG5zZWN0aW9uLFxcclxcbnN1bW1hcnksXFxyXFxudGltZSxcXHJcXG5tYXJrLFxcclxcbmF1ZGlvLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmRldGFpbHMsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5maWd1cmUsXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5xIHtcXHJcXG4gIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTo6YmVmb3JlLFxcclxcbmJsb2NrcXVvdGU6OmFmdGVyLFxcclxcbnE6OmJlZm9yZSxcXHJcXG5xOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gY29sb3JzXFxyXFxuJGxpZ2h0LWdyYXktMTogI2Y5ZjhmODtcXHJcXG4kbGlnaHQtZ3JheS0yOiAjYThhN2E3O1xcclxcbiRkYXJrLWdyYXktMTogIzE1MTAxMDtcXHJcXG4kdHdpbmUtMTogI2ZkZjJlOTtcXHJcXG4kdHdpbmUtMjogI2Q5YjVhNTtcXHJcXG4kdHdpbmUtMzogI2MzOTU1NjtcXHJcXG4kdHdpbmUtNDogIzVkM2UzMjtcXHJcXG4kc2Vjb25kYXJ5OiAjYzQyOTE0O1xcclxcbiRwcmltYXJ5OiAjZWY1ODE0O1xcclxcbiR2ZWdldGFyaWFuOiAjNTFjZjY2O1xcclxcbiR2ZWdhbjogIzk0ZDgyZDtcXHJcXG4kcGFsZW86ICNmZmQ0M2I7XFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLy8gYmFzZSBzdHlsZXNcXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIC8qIDEwcHggLyAxNnB4ID0gMC42MjUgPSA2Mi41JSAqL1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTYuMjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbi50aXRsZS0tcHJpbWFyeSxcXHJcXG5oMixcXHJcXG4udGl0bGUtLXNlY29uZGFyeSxcXHJcXG5oMyxcXHJcXG4udGl0bGUtLXRlcnRpYXJ5LFxcclxcbmg0LFxcclxcbmg1IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG4udGl0bGUtLXByaW1hcnkge1xcclxcbiAgZm9udC1zaXplOiA1LjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4wNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIsXFxyXFxuLnRpdGxlLS1zZWNvbmRhcnkge1xcclxcbiAgZm9udC1zaXplOiA0LjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOS42cmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgzLFxcclxcbi50aXRsZS0tdGVydGlhcnkge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oNCxcXHJcXG4udGl0bGUtLXN1YiB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbiB7XFxyXFxuICAmX19yaWdodCB7XFxyXFxuICAgICYtLXNtYWxsIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuNnJlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19ib3R0b20ge1xcclxcbiAgICAmLS1tZCB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNC44cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBjb2x1bW4tZ2FwOiA2LjRyZW07XFxyXFxuICByb3ctZ2FwOiA5LjZyZW07XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICBjb2x1bW4tZ2FwOiA0LjhyZW07XFxyXFxuICAgIHJvdy1nYXA6IDYuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgIHJvdy1nYXA6IDQuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA5LjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb2xzIHtcXHJcXG4gICAgJi0tMiB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLTMge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tNCB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS01IHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLS12ZXJ0aWNhbC1jZW50ZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcblxcclxcbiAgJjpob3ZlcixcXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6ICR0d2luZS0zO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGJ1dHRvbiBzdHlsZXNcXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgIHBhZGRpbmc6IDIuNHJlbSAxLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLS1maWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLS1vdXRsaW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHR3aW5lLTE7XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlLFxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNnJlbTtcXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pY29uIHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFncyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjRyZW07XFxyXFxuXFxyXFxuICAmIC50YWcge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICAgJi0tdmVnZXRhcmlhbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZlZ2V0YXJpYW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdmVnYW4ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZWdhbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1wYWxlbyB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGVvO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGhlYWRlclxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMTtcXHJcXG4gIGhlaWdodDogOS42cmVtO1xcclxcbiAgcGFkZGluZzogMCA0LjhyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28taW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0xO1xcclxcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDQuOHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgICBnYXA6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiA0LjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1saW5rIHtcXHJcXG4gICAgJjpsaW5rLFxcclxcbiAgICAmOnZpc2l0ZWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1pdGVtLWN0YSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xcclxcblxcclxcbiAgICAmOmxpbmssXFxyXFxuICAgICY6dmlzaXRlZCB7XFxyXFxuICAgICAgcGFkZGluZzogMS4ycmVtIDIuNHJlbTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgICAgY29sb3I6ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtYnRuIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDQuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDQuOHJlbTtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG5cXHJcXG4gICAgJltuYW1lPSdjbG9zZS1vdXRsaW5lJ10ge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLW9wZW4ge1xcclxcbiAgICAmIC5oZWFkZXJfX25hdiB7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgLmhlYWRlcl9fbmF2LWljb25bbmFtZT0nY2xvc2Utb3V0bGluZSddIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIC5oZWFkZXJfX25hdi1pY29uW25hbWU9J21lbnUtb3V0bGluZSddIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGhlcm8gc2VjdGlvblxcclxcbi5oZXJvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICBwYWRkaW5nOiA0LjhyZW0gMCA5LjZyZW0gMDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgIHBhZGRpbmc6IDIuNHJlbSAwIDYuNHJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5uZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEzMHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogOS42cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODRlbSkge1xcclxcbiAgICAgIG1heC13aWR0aDogMTIwcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgICAgZ2FwOiA0LjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDhyZW07XFxyXFxuICAgICAgZ2FwOiA2LjRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RlbGl2ZXJlZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNnJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RlbGl2ZXJlZC1pbWFnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGVsaXZlcmVkLWltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiA0LjhyZW07XFxyXFxuICAgIHdpZHRoOiA0LjhyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMS42cmVtO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmRmMmU5O1xcclxcblxcclxcbiAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGVsaXZlcmVkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG5cXHJcXG4gICAgJiBzcGFuIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gZmVhdHVyZWQgc2VjdGlvblxcclxcbi5mZWF0dXJlZCB7XFxyXFxuICBwYWRkaW5nOiA0LjhyZW0gMCAzLjJyZW0gMDtcXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDMuMnJlbTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApO1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBob3cgd29ya3Mgc2VjdGlvblxcclxcbi5ob3ctd29ya3Mge1xcclxcbiAgcGFkZGluZzogOS42cmVtIDA7XFxyXFxuXFxyXFxuICAmX19zdGVwLW51bWJlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOC42cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNy40cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zdGVwLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3N0ZXAtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi40cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtcm93OiA1O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUsXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDYwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMTtcXHJcXG4gICAgICB6LWluZGV4OiAtMjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNDUlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0yO1xcclxcbiAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zdGVwLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gbWVhbHMgc2VjdGlvblxcclxcbi5tZWFscyB7XFxyXFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMnJlbSk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAzLjJyZW0gNi40cmVtIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0tY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDMuMnJlbSA0LjhyZW0gNC44cmVtIDQuOHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBwYWRkaW5nOiAyLjRyZW0gMy4ycmVtIDMuMnJlbSAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0tdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1hdHRyaWJ1dGVzIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1hdHRyaWJ1dGUge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gICAgd2lkdGg6IDIuNHJlbTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RpZXRzIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19idG4tY29udGFpbmVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU1ZnIgNDVmcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2lubmVyIHtcXHJcXG4gICAgcGFkZGluZzogOS42cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICAgIHBhZGRpbmc6IDkuNnJlbSAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICByb3ctZ2FwOiA0LjhyZW07XFxyXFxuICAgIGNvbHVtbi1nYXA6IDhyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0taW1nIHtcXHJcXG4gICAgd2lkdGg6IDYuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZ2FsbGVyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NGVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICAgIGdhcDogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19nYWxsZXJ5LWl0ZW0ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZ2FsbGVyeS1pbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gcHJpY2luZyBzZWN0aW9uXFxyXFxuLnByaWNpbmcge1xcclxcbiAgcGFkZGluZzogOS42cmVtIDA7XFxyXFxuXFxyXFxuICAmX19wbGFuIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1zdGFydGVyIHtcXHJcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkdHdpbmUtMTtcXHJcXG4gICAgICBwYWRkaW5nOiA0LjZyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tY29tcGxldGUge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0xO1xcclxcbiAgICAgIHBhZGRpbmc6IDQuOHJlbTtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnQmVzdCB2YWx1ZSc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDYlO1xcclxcbiAgICAgICAgcmlnaHQ6IC0xOCU7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZW87XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjhyZW0gOHJlbTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3BsYW4taGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wbGFuLW5hbWUge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGxhbi1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNi4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxuXFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3BsYW4tdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3BsYW4tc2luZy11cCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGxhbi1kZXRhaWxzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZlYXR1cmUtaWNvbiB7XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICBoZWlnaHQ6IDMuMnJlbTtcXHJcXG4gICAgd2lkdGg6IDMuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS42cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mZWF0dXJlLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICAgIGNvbG9yOiAkdHdpbmUtNDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZmVhdHVyZS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGN0YSBzZWN0aW9uXFxyXFxuLmN0YSB7XFxyXFxuICBwYWRkaW5nOiA0LjhyZW0gMCAxMi44cmVtO1xcclxcblxcclxcbiAgJl9faW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCByZ2JhKCRwcmltYXJ5LCAwLjgpLCAkcHJpbWFyeSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RleHQtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNC44cmVtIDYuNHJlbSA2LjRyZW0gNi40cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIHBhZGRpbmc6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxyXFxuICAgIHJvdy1nYXA6IDIuNHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9ybS1sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9ybS1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjhyZW0gcmdiYSgyNTMsIDI0MiwgMjMzLCAwLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9ybS1idG4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWctY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgyMzUsIDE1MSwgNzgsIDAuMzUpLCByZ2JhKDIzMCwgMTI1LCAzNCwgMC4zNSkpLCB1cmwoJy4vYXNzZXRzL2VhdGluZy5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIGhlaWdodDogMzJyZW07XFxyXFxuICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gZm9vdGVyIHNlY3Rpb25cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDEyLjhyZW0gMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdHdpbmUtMjtcXHJcXG5cXHJcXG4gICZfX2lubmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxLjVmciAxZnIgMWZyIDFmcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIuNHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1sb2dvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxyXFxuICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tYWRkcmVzcyB7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxyXFxuICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtaXRlbXMge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1jb250YWN0cyB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtYWRkcmVzcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogJHR3aW5lLTI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28tbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sb2dvIHtcXHJcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zb2NpYWwtbGlua3Mge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NvY2lhbC1pY29uIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb3B5cmlnaHQge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdGlja3kge1xcclxcbiAgJiAuaGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMS4ycmVtIDMuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuaGVybyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDkuNnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9wcm9maWxlLTIuanBnJztcbmltcG9ydCAnLi9hc3NldHMvcHJvZmlsZS0zLmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtNC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9wcm9maWxlLTUuanBnJztcbmltcG9ydCAnLi9hc3NldHMvcHJvZmlsZS02LmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2hlcm8ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaGVyby53ZWJwJztcbmltcG9ydCAnLi9hc3NldHMvaGVyby1taW4ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvZmVhdHVyZWQtMS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9mZWF0dXJlZC0yLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ZlYXR1cmVkLTMucG5nJztcbmltcG9ydCAnLi9hc3NldHMvZmVhdHVyZWQtNC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9mZWF0dXJlZC01LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0xLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0yLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0zLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL21lYWwtMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9tZWFsLTIuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWwtMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbC0yLmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFsLTMuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWwtNC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xLmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTIuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktMy5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS00LmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTUuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktNi5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS03LmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTguanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktOS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMi5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9lYXRpbmcuanBnJztcblxuaW1wb3J0IG5hdkJhciBmcm9tICcuL21vZHVsZXMvbmF2YmFyLmpzJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuL21vZHVsZXMvbGlua3NIZWxwZXIuanMnO1xuaW1wb3J0IHN0aWNreU5hdiBmcm9tICcuL21vZHVsZXMvc3RpY2t5TmF2LmpzJztcblxubmF2QmFyKCk7XG5saW5rc0hlbHBlcigpO1xuc3RpY2t5TmF2KCk7XG4iXSwibmFtZXMiOlsiYWxsTGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwibGlua3NIZWxwZXIiLCJmb3JFYWNoIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInN0YXJ0c1dpdGgiLCJzZWN0aW9uRWxlbWVudCIsInNjcm9sbEludG9WaWV3IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJuYXZCdG4iLCJuYXZCYXIiLCJoZXJvU2VjdGlvbiIsInN0aWNreU5hdiIsIm9icyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudCIsImlzSW50ZXJzZWN0aW5nIiwiYm9keSIsImFkZCIsInJlbW92ZSIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=