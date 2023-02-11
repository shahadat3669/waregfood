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

/***/ "./src/assets/cover.png":
/*!******************************!*\
  !*** ./src/assets/cover.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cover.png";

/***/ }),

/***/ "./src/assets/eating.jpg":
/*!*******************************!*\
  !*** ./src/assets/eating.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eating.jpg";

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.png";

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
/* harmony import */ var _assets_cover_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cover.png */ "./src/assets/cover.png");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_profile_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/profile-1.jpg */ "./src/assets/profile-1.jpg");
/* harmony import */ var _assets_profile_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/profile-2.jpg */ "./src/assets/profile-2.jpg");
/* harmony import */ var _assets_profile_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/profile-3.jpg */ "./src/assets/profile-3.jpg");
/* harmony import */ var _assets_profile_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/profile-4.jpg */ "./src/assets/profile-4.jpg");
/* harmony import */ var _assets_profile_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/profile-5.jpg */ "./src/assets/profile-5.jpg");
/* harmony import */ var _assets_profile_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/profile-6.jpg */ "./src/assets/profile-6.jpg");
/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/hero.png */ "./src/assets/hero.png");
/* harmony import */ var _assets_hero_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/hero.webp */ "./src/assets/hero.webp");
/* harmony import */ var _assets_hero_min_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/hero-min.png */ "./src/assets/hero-min.png");
/* harmony import */ var _assets_featured_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/featured-1.png */ "./src/assets/featured-1.png");
/* harmony import */ var _assets_featured_2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/featured-2.png */ "./src/assets/featured-2.png");
/* harmony import */ var _assets_featured_3_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/featured-3.png */ "./src/assets/featured-3.png");
/* harmony import */ var _assets_featured_4_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/featured-4.png */ "./src/assets/featured-4.png");
/* harmony import */ var _assets_featured_5_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/featured-5.png */ "./src/assets/featured-5.png");
/* harmony import */ var _assets_app_1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/app-1.png */ "./src/assets/app-1.png");
/* harmony import */ var _assets_app_2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/app-2.png */ "./src/assets/app-2.png");
/* harmony import */ var _assets_app_3_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/app-3.png */ "./src/assets/app-3.png");
/* harmony import */ var _assets_meal_1_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/meal-1.jpg */ "./src/assets/meal-1.jpg");
/* harmony import */ var _assets_meal_2_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/meal-2.jpg */ "./src/assets/meal-2.jpg");
/* harmony import */ var _assets_testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/testimonial-1.jpg */ "./src/assets/testimonial-1.jpg");
/* harmony import */ var _assets_testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/testimonial-2.jpg */ "./src/assets/testimonial-2.jpg");
/* harmony import */ var _assets_testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/testimonial-3.jpg */ "./src/assets/testimonial-3.jpg");
/* harmony import */ var _assets_testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/testimonial-4.jpg */ "./src/assets/testimonial-4.jpg");
/* harmony import */ var _assets_testimonials_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/testimonials-gallery-1.jpg */ "./src/assets/testimonials-gallery-1.jpg");
/* harmony import */ var _assets_testimonials_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/testimonials-gallery-2.jpg */ "./src/assets/testimonials-gallery-2.jpg");
/* harmony import */ var _assets_testimonials_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/testimonials-gallery-3.jpg */ "./src/assets/testimonials-gallery-3.jpg");
/* harmony import */ var _assets_testimonials_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/testimonials-gallery-4.jpg */ "./src/assets/testimonials-gallery-4.jpg");
/* harmony import */ var _assets_testimonials_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/testimonials-gallery-5.jpg */ "./src/assets/testimonials-gallery-5.jpg");
/* harmony import */ var _assets_testimonials_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/testimonials-gallery-6.jpg */ "./src/assets/testimonials-gallery-6.jpg");
/* harmony import */ var _assets_testimonials_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/testimonials-gallery-7.jpg */ "./src/assets/testimonials-gallery-7.jpg");
/* harmony import */ var _assets_testimonials_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/testimonials-gallery-8.jpg */ "./src/assets/testimonials-gallery-8.jpg");
/* harmony import */ var _assets_testimonials_gallery_9_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/testimonials-gallery-9.jpg */ "./src/assets/testimonials-gallery-9.jpg");
/* harmony import */ var _assets_testimonials_gallery_10_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/testimonials-gallery-10.jpg */ "./src/assets/testimonials-gallery-10.jpg");
/* harmony import */ var _assets_testimonials_gallery_11_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/testimonials-gallery-11.jpg */ "./src/assets/testimonials-gallery-11.jpg");
/* harmony import */ var _assets_testimonials_gallery_12_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assets/testimonials-gallery-12.jpg */ "./src/assets/testimonials-gallery-12.jpg");
/* harmony import */ var _assets_eating_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assets/eating.jpg */ "./src/assets/eating.jpg");
/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/navbar.js */ "./src/modules/navbar.js");
/* harmony import */ var _modules_linksHelper_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/linksHelper.js */ "./src/modules/linksHelper.js");
/* harmony import */ var _modules_stickyNav_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modules/stickyNav.js */ "./src/modules/stickyNav.js");











































(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_40__["default"])();
(0,_modules_linksHelper_js__WEBPACK_IMPORTED_MODULE_41__["default"])();
(0,_modules_stickyNav_js__WEBPACK_IMPORTED_MODULE_42__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxhQUFhLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxVQUFVLGFBQWEsYUFBYSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ087QUFDRTtBQUNIO0FBQ0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0w7QUFDQztBQUNHO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNMO0FBQ0E7QUFDQTtBQUNDO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUNqQjtBQUVZO0FBQ1U7QUFDSjtBQUUvQ0YsK0RBQU0sRUFBRTtBQUNSbkIsb0VBQVcsRUFBRTtBQUNicUIsa0VBQVMsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vc3JjL21vZHVsZXMvbGlua3NIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vc3JjL21vZHVsZXMvbmF2YmFyLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL3NyYy9tb2R1bGVzL3N0aWNreU5hdi5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9zcmMvbWFpbi5zY3NzPzRlNTMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dhcmVnZm9vZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2E6bGluaycpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5jb25zdCBsaW5rc0hlbHBlciA9ICgpID0+IHtcbiAgYWxsTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIGlmIChocmVmID09PSAnIycpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhyZWYgIT09ICcjJyAmJiBocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBjb25zdCBzZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZik7XG4gICAgICAgIHNlY3Rpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbmF2LWxpbmsnKSkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1vcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlua3NIZWxwZXI7XG4iLCJjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtYnRuJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5cbmNvbnN0IG5hdkJhciA9ICgpID0+IHtcbiAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLW9wZW4nKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXI7XG4iLCJjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG5cbmNvbnN0IHN0aWNreU5hdiA9ICgpID0+IHtcbiAgY29uc3Qgb2JzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBjb25zdCBlbnQgPSBlbnRyaWVzWzBdO1xuICAgICAgaWYgKGVudC5pc0ludGVyc2VjdGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbnQuaXNJbnRlcnNlY3RpbmcgPT09IHRydWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHJvb3Q6IG51bGwsXG4gICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICByb290TWFyZ2luOiAnLTgwcHgnLFxuICAgIH0sXG4gICk7XG4gIG9icy5vYnNlcnZlKGhlcm9TZWN0aW9uKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzdGlja3lOYXY7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZWF0aW5nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlLFxcbmJsb2NrcXVvdGU6OmFmdGVyLFxcbnE6OmJlZm9yZSxcXG5xOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiAxMHB4IC8gMTZweCA9IDAuNjI1ID0gNjIuNSUgKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1Ni4yNSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzE1MTAxMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSxcXG4udGl0bGUtLXByaW1hcnksXFxuaDIsXFxuLnRpdGxlLS1zZWNvbmRhcnksXFxuaDMsXFxuLnRpdGxlLS10ZXJ0aWFyeSxcXG5oNCxcXG5oNSB7XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbiAgY29sb3I6ICMxNTEwMTA7XFxufVxcblxcbmgxLFxcbi50aXRsZS0tcHJpbWFyeSB7XFxuICBmb250LXNpemU6IDUuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG5cXG5oMixcXG4udGl0bGUtLXNlY29uZGFyeSB7XFxuICBmb250LXNpemU6IDQuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBtYXJnaW4tYm90dG9tOiA5LjZyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICBoMixcXG4gIC50aXRsZS0tc2Vjb25kYXJ5IHtcXG4gICAgZm9udC1zaXplOiAzLjZyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICBoMixcXG4gIC50aXRsZS0tc2Vjb25kYXJ5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcbiAgfVxcbn1cXG5cXG5oMyxcXG4udGl0bGUtLXRlcnRpYXJ5IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICBoMyxcXG4gIC50aXRsZS0tdGVydGlhcnkge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gIH1cXG59XFxuXFxuaDQsXFxuLnRpdGxlLS1zdWIge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXG59XFxuXFxuLm1hcmdpbl9fcmlnaHQtLXNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogMS42cmVtICFpbXBvcnRhbnQ7XFxufVxcbi5tYXJnaW5fX2JvdHRvbS0tbWQge1xcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxuICBwYWRkaW5nOiAwIDMuMnJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogNi40cmVtO1xcbiAgcm93LWdhcDogOS42cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgLmdyaWQge1xcbiAgICBjb2x1bW4tZ2FwOiA0LjhyZW07XFxuICAgIHJvdy1nYXA6IDYuNHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ncmlkIHtcXG4gICAgcm93LWdhcDogNC44cmVtO1xcbiAgfVxcbn1cXG4uZ3JpZDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5ncmlkOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogOS42cmVtO1xcbn1cXG4uZ3JpZF9fY29scy0tMiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmdyaWRfX2NvbHMtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLmdyaWRfX2NvbHMtLTMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5ncmlkX19jb2xzLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ncmlkX19jb2xzLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5ncmlkX19jb2xzLS00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAuZ3JpZF9fY29scy0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuZ3JpZF9fY29scy0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uZ3JpZF9fY29scy0tNSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4uZ3JpZC0tdmVydGljYWwtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmxpbms6aG92ZXIsIC5saW5rOmFjdGl2ZSB7XFxuICBjb2xvcjogI2MzOTU1NjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuYnRuIHtcXG4gICAgcGFkZGluZzogMi40cmVtIDEuNnJlbTtcXG4gIH1cXG59XFxuLmJ0bi0tZmlsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1ODE0O1xcbiAgY29sb3I6ICNmOWY4Zjg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWY1ODE0O1xcbn1cXG4uYnRuLS1maWxsOmhvdmVyLCAuYnRuLS1maWxsOmFjdGl2ZSB7XFxuICBjb2xvcjogI2VmNTgxNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY4Zjg7XFxufVxcbi5idG4tLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkZjJlOTtcXG59XFxuLmJ0bi0tb3V0bGluZTphY3RpdmUsIC5idG4tLW91dGxpbmU6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICNmOWY4Zjg7XFxuICBib3JkZXItY29sb3I6ICMxNTEwMTA7XFxufVxcblxcbi5saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS42cmVtO1xcbn1cXG4ubGlzdF9faXRlbSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG4ubGlzdF9faWNvbiB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbn1cXG5cXG4udGFncyB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjRyZW07XFxufVxcbi50YWdzIC50YWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udGFncyAudGFnLS12ZWdldGFyaWFuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MWNmNjY7XFxufVxcbi50YWdzIC50YWctLXZlZ2FuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGQ4MmQ7XFxufVxcbi50YWdzIC50YWctLXBhbGVvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0M2I7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgaGVpZ2h0OiA5LjZyZW07XFxuICBwYWRkaW5nOiAwIDQuOHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbG9nby1pbWcge1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVhZGVyX19uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbmF2LWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0LjhyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAuaGVhZGVyX19uYXYtbGlzdCB7XFxuICAgIGdhcDogMy4ycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlYWRlcl9fbmF2LWxpc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQuOHJlbTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbmF2LWxpbms6bGluaywgLmhlYWRlcl9fbmF2LWxpbms6dmlzaXRlZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzE1MTAxMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlYWRlcl9fbmF2LWxpbms6bGluaywgLmhlYWRlcl9fbmF2LWxpbms6dmlzaXRlZCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbmF2LWxpbms6aG92ZXIsIC5oZWFkZXJfX25hdi1saW5rOmFjdGl2ZSB7XFxuICBjb2xvcjogI2VmNTgxNDtcXG59XFxuLmhlYWRlcl9fbmF2LWl0ZW0tY3RhIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZjU4MTQ7XFxufVxcbi5oZWFkZXJfX25hdi1pdGVtLWN0YTpsaW5rLCAuaGVhZGVyX19uYXYtaXRlbS1jdGE6dmlzaXRlZCB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMi40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgY29sb3I6ICNmOWY4Zjg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1ODE0O1xcbn1cXG4uaGVhZGVyX19uYXYtaXRlbS1jdGE6aG92ZXIsIC5oZWFkZXJfX25hdi1pdGVtLWN0YTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbn1cXG4uaGVhZGVyX19uYXYtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlYWRlcl9fbmF2LWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcbn1cXG4uaGVhZGVyX19uYXYtaWNvbiB7XFxuICBoZWlnaHQ6IDQuOHJlbTtcXG4gIHdpZHRoOiA0LjhyZW07XFxuICBjb2xvcjogIzE1MTAxMDtcXG59XFxuLmhlYWRlcl9fbmF2LWljb25bbmFtZT1jbG9zZS1vdXRsaW5lXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlYWRlci0tb3BlbiAuaGVhZGVyX19uYXYge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG4uaGVhZGVyLS1vcGVuIC5oZWFkZXJfX25hdi1pY29uW25hbWU9Y2xvc2Utb3V0bGluZV0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5oZWFkZXItLW9wZW4gLmhlYWRlcl9fbmF2LWljb25bbmFtZT1tZW51LW91dGxpbmVdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICBwYWRkaW5nOiA0LjhyZW0gMCA5LjZyZW0gMDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5oZXJvIHtcXG4gICAgcGFkZGluZzogMi40cmVtIDAgNi40cmVtIDA7XFxuICB9XFxufVxcbi5oZXJvX19pbm5lciB7XFxuICBtYXgtd2lkdGg6IDEzMHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAzLjJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA5LjZyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODRlbSkge1xcbiAgLmhlcm9fX2lubmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjByZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAuaGVyb19faW5uZXIge1xcbiAgICBnYXA6IDQuOHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZXJvX19pbm5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBwYWRkaW5nOiAwIDhyZW07XFxuICAgIGdhcDogNi40cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmhlcm9fX2lubmVyIHtcXG4gICAgcGFkZGluZzogMCAzLjJyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVyb19fY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG4uaGVyb19fdGV4dCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcbn1cXG4uaGVyb19fZGVsaXZlcmVkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS42cmVtO1xcbiAgbWFyZ2luLXRvcDogOHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZXJvX19kZWxpdmVyZWQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMuMnJlbTtcXG4gIH1cXG59XFxuLmhlcm9fX2RlbGl2ZXJlZC1pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhlcm9fX2RlbGl2ZXJlZC1pbWFnZSB7XFxuICBoZWlnaHQ6IDQuOHJlbTtcXG4gIHdpZHRoOiA0LjhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IC0xLjZyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmRmMmU5O1xcbn1cXG4uaGVyb19fZGVsaXZlcmVkLWltYWdlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaGVyb19fZGVsaXZlcmVkLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxufVxcbi5oZXJvX19kZWxpdmVyZWQtdGV4dCBzcGFuIHtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZXJvX19pbWFnZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbi5oZXJvX19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZXJvX19pbWFnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuaGVyb19faW1hZ2Uge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG5cXG4uZmVhdHVyZWQge1xcbiAgcGFkZGluZzogNC44cmVtIDAgMy4ycmVtIDA7XFxufVxcbi5mZWF0dXJlZF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxuICBjb2xvcjogI2E4YTdhNztcXG59XFxuLmZlYXR1cmVkX19pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZmVhdHVyZWRfX2ltYWdlIHtcXG4gIGhlaWdodDogMy4ycmVtO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApO1xcbiAgb3BhY2l0eTogNTAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmZlYXR1cmVkX19pbWFnZSB7XFxuICAgIGhlaWdodDogMi40cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmZlYXR1cmVkX19pbWFnZSB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgfVxcbn1cXG5cXG4uaG93LXdvcmtzIHtcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcbn1cXG4uaG93LXdvcmtzX19zdGVwLW51bWJlciB7XFxuICBmb250LXNpemU6IDguNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogI2E4YTdhNztcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5ob3ctd29ya3NfX3N0ZXAtbnVtYmVyIHtcXG4gICAgZm9udC1zaXplOiA3LjRyZW07XFxuICB9XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICBjb2xvcjogIzE1MTAxMDtcXG59XFxuLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNHJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLXJvdzogMTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyOm50aC1jaGlsZCg2KSB7XFxuICAgIGdyaWQtcm93OiA1O1xcbiAgfVxcbn1cXG4uaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lcjo6YmVmb3JlLCAuaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyOjpiZWZvcmUge1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgei1pbmRleDogLTI7XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyOjphZnRlciB7XFxuICB3aWR0aDogNDUlO1xcbiAgcGFkZGluZy1ib3R0b206IDQ1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWI1YTU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmhvdy13b3Jrc19fc3RlcC1pbWFnZSB7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4ubWVhbHMge1xcbiAgcGFkZGluZzogOS42cmVtIDA7XFxufVxcbi5tZWFsc19faXRlbSB7XFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG4ubWVhbHNfX2l0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjJyZW0pO1xcbiAgYm94LXNoYWRvdzogMCAzLjJyZW0gNi40cmVtIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcbi5tZWFsc19faXRlbS1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDMuMnJlbSA0LjhyZW0gNC44cmVtIDQuOHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5tZWFsc19faXRlbS1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMi40cmVtIDMuMnJlbSAzLjJyZW0gMy4ycmVtO1xcbiAgfVxcbn1cXG4ubWVhbHNfX2l0ZW0tdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBjb2xvcjogIzE1MTAxMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbi5tZWFsc19faXRlbS1hdHRyaWJ1dGVzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuLm1lYWxzX19pdGVtLWF0dHJpYnV0ZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjZyZW07XFxufVxcbi5tZWFsc19faXRlbS1pY29uIHtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDIuNHJlbTtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbn1cXG4ubWVhbHNfX2l0ZW0taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLm1lYWxzX19kaWV0cyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuLm1lYWxzX19idG4tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4udGVzdGltb25pYWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NWZyIDQ1ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLnRlc3RpbW9uaWFscyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4udGVzdGltb25pYWxzX19pbm5lciB7XFxuICBwYWRkaW5nOiA5LjZyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAudGVzdGltb25pYWxzX19pbm5lciB7XFxuICAgIHBhZGRpbmc6IDkuNnJlbSAzLjJyZW07XFxuICB9XFxufVxcbi50ZXN0aW1vbmlhbHNfX2l0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICByb3ctZ2FwOiA0LjhyZW07XFxuICBjb2x1bW4tZ2FwOiA4cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLnRlc3RpbW9uaWFsc19faXRlbXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLnRlc3RpbW9uaWFsc19faXRlbS1pbWcge1xcbiAgd2lkdGg6IDYuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXG59XFxuLnRlc3RpbW9uaWFsc19faXRlbS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXG59XFxuLnRlc3RpbW9uaWFsc19faXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6ICNhOGE3YTc7XFxufVxcbi50ZXN0aW1vbmlhbHNfX2dhbGxlcnkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDEuNnJlbTtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg0ZW0pIHtcXG4gIC50ZXN0aW1vbmlhbHNfX2dhbGxlcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLnRlc3RpbW9uaWFsc19fZ2FsbGVyeSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAudGVzdGltb25pYWxzX19nYWxsZXJ5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ2FwOiAxLjJyZW07XFxuICB9XFxufVxcbi50ZXN0aW1vbmlhbHNfX2dhbGxlcnktaXRlbSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGVzdGltb25pYWxzX19nYWxsZXJ5LWltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcbi50ZXN0aW1vbmlhbHNfX2dhbGxlcnktaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByaWNpbmcge1xcbiAgcGFkZGluZzogOS42cmVtIDA7XFxufVxcbi5wcmljaW5nX19wbGFuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLnByaWNpbmdfX3BsYW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLnByaWNpbmdfX3BsYW4tLXN0YXJ0ZXIge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmRmMmU5O1xcbiAgcGFkZGluZzogNC42cmVtO1xcbn1cXG4ucHJpY2luZ19fcGxhbi0tY29tcGxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gIHBhZGRpbmc6IDQuOHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcmljaW5nX19wbGFuLS1jb21wbGV0ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIkJlc3QgdmFsdWVcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2JTtcXG4gIHJpZ2h0OiAtMTglO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDQzYjtcXG4gIHBhZGRpbmc6IDAuOHJlbSA4cmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ucHJpY2luZ19fcGxhbi1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcbn1cXG4ucHJpY2luZ19fcGxhbi1uYW1lIHtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG4ucHJpY2luZ19fcGxhbi1wcmljZSB7XFxuICBmb250LXNpemU6IDYuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzE1MTAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXG59XFxuLnByaWNpbmdfX3BsYW4tcHJpY2Ugc3BhbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XFxufVxcbi5wcmljaW5nX19wbGFuLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgY29sb3I6ICNhOGE3YTc7XFxufVxcbi5wcmljaW5nX19wbGFuLXNpbmctdXAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNC44cmVtO1xcbn1cXG4ucHJpY2luZ19fcGxhbi1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByaWNpbmdfX2ZlYXR1cmUtaWNvbiB7XFxuICBjb2xvcjogI2Y5ZjhmODtcXG4gIGhlaWdodDogMy4ycmVtO1xcbiAgd2lkdGg6IDMuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU4MTQ7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuICBwYWRkaW5nOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5wcmljaW5nX19mZWF0dXJlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgY29sb3I6ICM1ZDNlMzI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcbn1cXG4ucHJpY2luZ19fZmVhdHVyZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuXFxuLmN0YSB7XFxuICBwYWRkaW5nOiA0LjhyZW0gMCAxMi44cmVtO1xcbn1cXG4uY3RhX19pbm5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgyMzksIDg4LCAyMCwgMC44KSwgI2VmNTgxNCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmN0YV9faW5uZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuY3RhX19pbm5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uY3RhX190ZXh0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA0LjhyZW0gNi40cmVtIDYuNHJlbSA2LjRyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuY3RhX190ZXh0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMuMnJlbTtcXG4gIH1cXG59XFxuLmN0YV9fdGl0bGUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbi5jdGFfX3RleHQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS44O1xcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcbn1cXG4uY3RhX19mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICByb3ctZ2FwOiAyLjRyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuY3RhX19mb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5jdGFfX2Zvcm0tbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcbi5jdGFfX2Zvcm0taW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxLjJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLmN0YV9fZm9ybS1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC44cmVtIHJnYmEoMjUzLCAyNDIsIDIzMywgMC41KTtcXG59XFxuLmN0YV9fZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNhOGE3YTc7XFxufVxcbi5jdGFfX2Zvcm0tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcXG59XFxuLmN0YV9faW1nLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCByZ2JhKDIzNSwgMTUxLCA3OCwgMC4zNSksIHJnYmEoMjMwLCAxMjUsIDM0LCAwLjM1KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmN0YV9faW1nLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzJyZW07XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDEyLjhyZW0gMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDliNWE1O1xcbn1cXG4uZm9vdGVyX19pbm5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDEuNWZyIDFmciAxZnIgMWZyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLmZvb3Rlcl9faW5uZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgfVxcbn1cXG4uZm9vdGVyX19uYXYge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyLjRyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAuZm9vdGVyX19uYXYge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbiAgfVxcbn1cXG4uZm9vdGVyX19uYXYtLWxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAuZm9vdGVyX19uYXYtLWxvZ28ge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgICBncmlkLXJvdzogMjtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5mb290ZXJfX25hdi0tYWRkcmVzcyB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgfVxcbn1cXG4uZm9vdGVyX19uYXYtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG4uZm9vdGVyX19uYXYtaXRlbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyLjRyZW07XFxufVxcbi5mb290ZXJfX25hdi1jb250YWN0cyB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcbi5mb290ZXJfX25hdi1hZGRyZXNzIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbn1cXG4uZm9vdGVyX19saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6ICNhOGE3YTc7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmZvb3Rlcl9fbGluazpob3ZlciB7XFxuICBjb2xvcjogI2Q5YjVhNTtcXG59XFxuLmZvb3Rlcl9fbG9nby1saW5rIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG4uZm9vdGVyX19sb2dvIHtcXG4gIGhlaWdodDogMi4ycmVtO1xcbn1cXG4uZm9vdGVyX19zb2NpYWwtbGlua3Mge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIuNHJlbTtcXG59XFxuLmZvb3Rlcl9fc29jaWFsLWljb24ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIuNHJlbTtcXG59XFxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnN0aWNreSAuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XFxuICB6LWluZGV4OiA5OTk7XFxuICBib3gtc2hhZG93OiAwIDEuMnJlbSAzLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG59XFxuLnN0aWNreSAuaGVybyB7XFxuICBtYXJnaW4tdG9wOiA5LjZyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLFlBQUE7QUFDRjs7QUFFQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBbUJBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFoQkY7QUFrQkU7RUFMRjtJQU1JLGlCQUFBO0VBZkY7QUFDRjtBQWlCRTtFQVRGO0lBVUksY0FBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXRDWTtFQXVDWixrQkFBQTtBQWRGOztBQWlCQTtF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LHNCQUFBO0FBbEdOO0FBb0dNO0VBSkY7SUFLSSxtQkFBQTtJQUNBLFdBQUE7RUFqR047QUFDRjtBQXFHTTtFQURGO0lBRUksbUJBQUE7SUFDQSxXQUFBO0VBbEdOO0FBQ0Y7QUFzR0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFwR0o7QUF1R0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFyR0o7QUF3R0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF0R0o7QUF5R0U7RUFDRSxxQkFBQTtFQUNBLGNBemlDVztBQWs4QmY7QUEwR0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0EvaUNXO0VBZ2pDWCxvQkFBQTtBQXhHSjtBQTBHSTtFQUNFLGNBaGpDSTtBQXc4QlY7QUE0R0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUExR0o7QUE2R0U7RUFDRSxjQUFBO0FBM0dKO0FBOEdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQTVHSjtBQStHRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUE3R0o7QUFnSEU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0Eva0NXO0VBZ2xDWCxnQkFBQTtBQTlHSjs7QUFtSEU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBaEhKO0FBbUhFO0VBQ0Usa0JBQUE7QUFqSEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gcmVzZXQgY3NzXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5vbCxcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbnEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxyXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxyXFxucTo6YmVmb3JlLFxcclxcbnE6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBjb2xvcnNcXHJcXG4kbGlnaHQtZ3JheS0xOiAjZjlmOGY4O1xcclxcbiRsaWdodC1ncmF5LTI6ICNhOGE3YTc7XFxyXFxuJGRhcmstZ3JheS0xOiAjMTUxMDEwO1xcclxcbiR0d2luZS0xOiAjZmRmMmU5O1xcclxcbiR0d2luZS0yOiAjZDliNWE1O1xcclxcbiR0d2luZS0zOiAjYzM5NTU2O1xcclxcbiR0d2luZS00OiAjNWQzZTMyO1xcclxcbiRzZWNvbmRhcnk6ICNjNDI5MTQ7XFxyXFxuJHByaW1hcnk6ICNlZjU4MTQ7XFxyXFxuJHZlZ2V0YXJpYW46ICM1MWNmNjY7XFxyXFxuJHZlZ2FuOiAjOTRkODJkO1xcclxcbiRwYWxlbzogI2ZmZDQzYjtcXHJcXG5cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vLyBiYXNlIHN0eWxlc1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLyogMTBweCAvIDE2cHggPSAwLjYyNSA9IDYyLjUlICovXFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiA1Ni4yNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuLnRpdGxlLS1wcmltYXJ5LFxcclxcbmgyLFxcclxcbi50aXRsZS0tc2Vjb25kYXJ5LFxcclxcbmgzLFxcclxcbi50aXRsZS0tdGVydGlhcnksXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbi50aXRsZS0tcHJpbWFyeSB7XFxyXFxuICBmb250LXNpemU6IDUuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMixcXHJcXG4udGl0bGUtLXNlY29uZGFyeSB7XFxyXFxuICBmb250LXNpemU6IDQuNHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5LjZyZW07XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICBmb250LXNpemU6IDMuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaDMsXFxyXFxuLnRpdGxlLS10ZXJ0aWFyeSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmg0LFxcclxcbi50aXRsZS0tc3ViIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luIHtcXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gICAgJi0tc21hbGwge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMS42cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvdHRvbSB7XFxyXFxuICAgICYtLW1kIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW0gIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTIwcmVtO1xcclxcbiAgcGFkZGluZzogMCAzLjJyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGNvbHVtbi1nYXA6IDYuNHJlbTtcXHJcXG4gIHJvdy1nYXA6IDkuNnJlbTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDQuOHJlbTtcXHJcXG4gICAgcm93LWdhcDogNi40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgcm93LWdhcDogNC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDkuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2NvbHMge1xcclxcbiAgICAmLS0yIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tMyB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS00IHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLTUge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLXZlcnRpY2FsLWNlbnRlciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuXFxyXFxuICAmOmhvdmVyLFxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBjb2xvcjogJHR3aW5lLTM7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gYnV0dG9uIHN0eWxlc1xcclxcbi5idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgcGFkZGluZzogMi40cmVtIDEuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLWZpbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xcclxcblxcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLW91dGxpbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdHdpbmUtMTtcXHJcXG5cXHJcXG4gICAgJjphY3RpdmUsXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS42cmVtO1xcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ljb24ge1xcclxcbiAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50YWdzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNHJlbTtcXHJcXG5cXHJcXG4gICYgLnRhZyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcblxcclxcbiAgICAmLS12ZWdldGFyaWFuIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVnZXRhcmlhbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS12ZWdhbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZlZ2FuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXBhbGVvIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZW87XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gaGVhZGVyXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0xO1xcclxcbiAgaGVpZ2h0OiA5LjZyZW07XFxyXFxuICBwYWRkaW5nOiAwIDQuOHJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbG9nby1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdiB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTE7XFxyXFxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtbGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNC44cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICAgIGdhcDogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDQuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWxpbmsge1xcclxcbiAgICAmOmxpbmssXFxyXFxuICAgICY6dmlzaXRlZCB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWl0ZW0tY3RhIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XFxyXFxuXFxyXFxuICAgICY6bGluayxcXHJcXG4gICAgJjp2aXNpdGVkIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxLjJyZW0gMi40cmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgICBjb2xvcjogJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1idG4ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtaWNvbiB7XFxyXFxuICAgIGhlaWdodDogNC44cmVtO1xcclxcbiAgICB3aWR0aDogNC44cmVtO1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcblxcclxcbiAgICAmW25hbWU9J2Nsb3NlLW91dGxpbmUnXSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tb3BlbiB7XFxyXFxuICAgICYgLmhlYWRlcl9fbmF2IHtcXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiAuaGVhZGVyX19uYXYtaWNvbltuYW1lPSdjbG9zZS1vdXRsaW5lJ10ge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgLmhlYWRlcl9fbmF2LWljb25bbmFtZT0nbWVudS1vdXRsaW5lJ10ge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gaGVybyBzZWN0aW9uXFxyXFxuLmhlcm8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDkuNnJlbSAwO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgcGFkZGluZzogMi40cmVtIDAgNi40cmVtIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTMwcmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAzLjJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiA5LjZyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NGVtKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMjByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgICBnYXA6IDQuOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgOHJlbTtcXHJcXG4gICAgICBnYXA6IDYuNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGVsaXZlcmVkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGVsaXZlcmVkLWltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kZWxpdmVyZWQtaW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDQuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDQuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjZyZW07XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZGYyZTk7XFxyXFxuXFxyXFxuICAgICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kZWxpdmVyZWQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcblxcclxcbiAgICAmIHNwYW4ge1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWFnZS1jb250YWluZXIge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBmZWF0dXJlZCBzZWN0aW9uXFxyXFxuLmZlYXR1cmVkIHtcXHJcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDMuMnJlbSAwO1xcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWFnZSB7XFxyXFxuICAgIGhlaWdodDogMy4ycmVtO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDUwJTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIGhlaWdodDogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGhvdyB3b3JrcyBzZWN0aW9uXFxyXFxuLmhvdy13b3JrcyB7XFxyXFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXHJcXG5cXHJcXG4gICZfX3N0ZXAtbnVtYmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA4LjZyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiA3LjRyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3N0ZXAtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc3RlcC1pbWFnZS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjRyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSxcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0xO1xcclxcbiAgICAgIHotaW5kZXg6IC0yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICB3aWR0aDogNDUlO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0NSU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTI7XFxyXFxuICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3N0ZXAtaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBtZWFscyBzZWN0aW9uXFxyXFxuLm1lYWxzIHtcXHJcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4ycmVtKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwIDMuMnJlbSA2LjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMy4ycmVtIDQuOHJlbSA0LjhyZW0gNC44cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIHBhZGRpbmc6IDIuNHJlbSAzLjJyZW0gMy4ycmVtIDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgICBjb2xvcjogJGRhcmstZ3JheS0xO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWF0dHJpYnV0ZXMge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWF0dHJpYnV0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0taWNvbiB7XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICB3aWR0aDogMi40cmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGlldHMge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J0bi1jb250YWluZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0xO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTVmciA0NWZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5uZXIge1xcclxcbiAgICBwYWRkaW5nOiA5LjZyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogOS42cmVtIDMuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIHJvdy1nYXA6IDQuOHJlbTtcXHJcXG4gICAgY29sdW1uLWdhcDogOHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1pbWcge1xcclxcbiAgICB3aWR0aDogNi40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0tdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19nYWxsZXJ5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICAgICAgZ2FwOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2dhbGxlcnktaXRlbSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19nYWxsZXJ5LWltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBwcmljaW5nIHNlY3Rpb25cXHJcXG4ucHJpY2luZyB7XFxyXFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXHJcXG5cXHJcXG4gICZfX3BsYW4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXN0YXJ0ZXIge1xcclxcbiAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR0d2luZS0xO1xcclxcbiAgICAgIHBhZGRpbmc6IDQuNnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1jb21wbGV0ZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTE7XFxyXFxuICAgICAgcGFkZGluZzogNC44cmVtO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICdCZXN0IHZhbHVlJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNiU7XFxyXFxuICAgICAgICByaWdodDogLTE4JTtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWxlbztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbSA4cmVtO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGxhbi1oZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3BsYW4tbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wbGFuLXByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiA2LjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG5cXHJcXG4gICAgJiBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGxhbi10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGxhbi1zaW5nLXVwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wbGFuLWRldGFpbHMge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZmVhdHVyZS1pY29uIHtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgIGhlaWdodDogMy4ycmVtO1xcclxcbiAgICB3aWR0aDogMy4ycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZlYXR1cmUtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgY29sb3I6ICR0d2luZS00O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mZWF0dXJlLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gY3RhIHNlY3Rpb25cXHJcXG4uY3RhIHtcXHJcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDEyLjhyZW07XFxyXFxuXFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoJHByaW1hcnksIDAuOCksICRwcmltYXJ5KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGV4dC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA0LjhyZW0gNi40cmVtIDYuNHJlbSA2LjRyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Zvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDMuMnJlbTtcXHJcXG4gICAgcm93LWdhcDogMi40cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mb3JtLWxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mb3JtLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuOHJlbSByZ2JhKDI1MywgMjQyLCAyMzMsIDAuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mb3JtLWJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltZy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCByZ2JhKDIzNSwgMTUxLCA3OCwgMC4zNSksIHJnYmEoMjMwLCAxMjUsIDM0LCAwLjM1KSksIHVybCgnLi9hc3NldHMvZWF0aW5nLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgaGVpZ2h0OiAzMnJlbTtcXHJcXG4gICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBmb290ZXIgc2VjdGlvblxcclxcbi5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMTIuOHJlbSAwO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR0d2luZS0yO1xcclxcblxcclxcbiAgJl9faW5uZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDEuNWZyIDFmciAxZnIgMWZyO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMi40cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLWxvZ28ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXHJcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1hZGRyZXNzIHtcXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXHJcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWhlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1pdGVtcyB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMi40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWNvbnRhY3RzIHtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1hZGRyZXNzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGNvbG9yOiAkdHdpbmUtMjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbG9nby1saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NvY2lhbC1saW5rcyB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMi40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc29jaWFsLWljb24ge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2NvcHlyaWdodCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0aWNreSB7XFxyXFxuICAmIC5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxLjJyZW0gMy4ycmVtIHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogOS42cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvY292ZXIucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9mYXZpY29uLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtMS5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtMi5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtMy5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtNC5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtNS5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtNi5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2hlcm8ucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9oZXJvLndlYnAnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2hlcm8tbWluLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvZmVhdHVyZWQtMS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ZlYXR1cmVkLTIucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9mZWF0dXJlZC0zLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvZmVhdHVyZWQtNC5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ZlYXR1cmVkLTUucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9hcHAtMS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0yLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvYXBwLTMucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWFsLTEuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWFsLTIuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLmpwZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWwtMi5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFsLTMuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbC00LmpwZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktMS5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTIuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0zLmpwZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktNC5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTUuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS02LmpwZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktNy5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTguanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS05LmpwZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktMTAuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMS5qcGcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTEyLmpwZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvZWF0aW5nLmpwZyc7XHJcblxyXG5pbXBvcnQgbmF2QmFyIGZyb20gJy4vbW9kdWxlcy9uYXZiYXIuanMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi9tb2R1bGVzL2xpbmtzSGVscGVyLmpzJztcclxuaW1wb3J0IHN0aWNreU5hdiBmcm9tICcuL21vZHVsZXMvc3RpY2t5TmF2LmpzJztcclxuXHJcbm5hdkJhcigpO1xyXG5saW5rc0hlbHBlcigpO1xyXG5zdGlja3lOYXYoKTtcclxuIl0sIm5hbWVzIjpbImFsbExpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGVyIiwicXVlcnlTZWxlY3RvciIsImxpbmtzSGVscGVyIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJzdGFydHNXaXRoIiwic2VjdGlvbkVsZW1lbnQiLCJzY3JvbGxJbnRvVmlldyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwibmF2QnRuIiwibmF2QmFyIiwiaGVyb1NlY3Rpb24iLCJzdGlja3lOYXYiLCJvYnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnQiLCJpc0ludGVyc2VjdGluZyIsImJvZHkiLCJhZGQiLCJyZW1vdmUiLCJyb290IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9