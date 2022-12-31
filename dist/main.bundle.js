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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  /* 10px / 16px = 0.625 = 62.5% */\n  font-size: 62.5%;\n  overflow-x: hidden;\n}\n@media (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media (max-width: 59em) {\n  html {\n    font-size: 50%;\n  }\n}\n\nbody {\n  font-family: \"Rubik\", sans-serif;\n  line-height: 1;\n  font-weight: 400;\n  color: #151010;\n  overflow-x: hidden;\n}\n\np {\n  margin-bottom: 1rem;\n}\n\nh1,\n.title--primary,\nh2,\n.title--secondary,\nh3,\n.title--tertiary,\nh4,\nh5 {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  color: #151010;\n}\n\nh1,\n.title--primary {\n  font-size: 5.2rem;\n  line-height: 1.05;\n  margin-bottom: 3.2rem;\n}\n\nh2,\n.title--secondary {\n  font-size: 4.4rem;\n  line-height: 1.2;\n  margin-bottom: 9.6rem;\n}\n@media (max-width: 75em) {\n  h2,\n  .title--secondary {\n    font-size: 3.6rem;\n  }\n}\n@media (max-width: 44em) {\n  h2,\n  .title--secondary {\n    margin-bottom: 4.8rem;\n  }\n}\n\nh3,\n.title--tertiary {\n  font-size: 3rem;\n  line-height: 1.2;\n  margin-bottom: 3.2rem;\n}\n@media (max-width: 75em) {\n  h3,\n  .title--tertiary {\n    font-size: 2.4rem;\n  }\n}\n\nh4,\n.title--sub {\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #ef5814;\n  text-transform: uppercase;\n  margin-bottom: 1.6rem;\n  letter-spacing: 0.75px;\n}\n\n.margin__right--small {\n  margin-right: 1.6rem !important;\n}\n.margin__bottom--md {\n  margin-bottom: 4.8rem !important;\n}\n\n.container {\n  max-width: 120rem;\n  padding: 0 3.2rem;\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  column-gap: 6.4rem;\n  row-gap: 9.6rem;\n}\n@media (max-width: 75em) {\n  .grid {\n    column-gap: 4.8rem;\n    row-gap: 6.4rem;\n  }\n}\n@media (max-width: 34em) {\n  .grid {\n    row-gap: 4.8rem;\n  }\n}\n.grid:last-child {\n  margin-bottom: 0;\n}\n.grid:not(:last-child) {\n  margin-bottom: 9.6rem;\n}\n.grid__cols--2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n@media (max-width: 34em) {\n  .grid__cols--2 {\n    grid-template-columns: 1fr;\n  }\n}\n.grid__cols--3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 44em) {\n  .grid__cols--3 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 34em) {\n  .grid__cols--3 {\n    grid-template-columns: 1fr;\n  }\n}\n.grid__cols--4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n@media (max-width: 44em) {\n  .grid__cols--4 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 34em) {\n  .grid__cols--4 {\n    grid-template-columns: 1fr;\n  }\n}\n.grid__cols--5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.grid--vertical-center {\n  align-items: center;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.link {\n  display: inline-block;\n  color: #ef5814;\n  text-decoration: none;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 2px;\n  transition: all 0.3s;\n}\n.link:hover, .link:active {\n  color: #c39556;\n  border-bottom: 1px solid transparent;\n}\n\n.btn {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: 600;\n  padding: 1.6rem 3.2rem;\n  border-radius: 9px;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.3s;\n}\n@media (max-width: 34em) {\n  .btn {\n    padding: 2.4rem 1.6rem;\n  }\n}\n.btn--fill {\n  background-color: #ef5814;\n  color: #f9f8f8;\n  border: 1px solid #ef5814;\n}\n.btn--fill:hover, .btn--fill:active {\n  color: #ef5814;\n  background-color: #f9f8f8;\n}\n.btn--outline {\n  background-color: #f9f8f8;\n  color: #151010;\n  border: 1px solid #fdf2e9;\n}\n.btn--outline:active, .btn--outline:hover {\n  box-shadow: inset 0 0 0 3px #f9f8f8;\n  border-color: #151010;\n}\n\n.list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1.6rem;\n}\n.list__item {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n  line-height: 1.2;\n}\n.list__icon {\n  width: 3rem;\n  height: 3rem;\n  color: #ef5814;\n}\n\n.tags {\n  margin-bottom: 1.2rem;\n  display: flex;\n  gap: 0.4rem;\n}\n.tags .tag {\n  display: inline-block;\n  padding: 0.4rem 0.8rem;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  color: #151010;\n  border-radius: 100px;\n  font-weight: 600;\n}\n.tags .tag--vegetarian {\n  background-color: #51cf66;\n}\n.tags .tag--vegan {\n  background-color: #94d82d;\n}\n.tags .tag--paleo {\n  background-color: #ffd43b;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fdf2e9;\n  height: 9.6rem;\n  padding: 0 4.8rem;\n  position: relative;\n}\n@media (max-width: 75em) {\n  .header {\n    padding: 0 3.2rem;\n  }\n}\n.header__logo-img {\n  height: 2.2rem;\n}\n@media (max-width: 59em) {\n  .header__nav {\n    background-color: #fdf2e9;\n    -webkit-backdrop-filter: blur(5px);\n    backdrop-filter: blur(10px);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    transform: translateX(100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.5s ease-in;\n    opacity: 0;\n    pointer-events: none;\n    visibility: hidden;\n  }\n}\n.header__nav-list {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 4.8rem;\n}\n@media (max-width: 75em) {\n  .header__nav-list {\n    gap: 3.2rem;\n  }\n}\n@media (max-width: 59em) {\n  .header__nav-list {\n    flex-direction: column;\n    gap: 4.8rem;\n  }\n}\n.header__nav-link:link, .header__nav-link:visited {\n  display: inline-block;\n  text-decoration: none;\n  color: #151010;\n  font-weight: 500;\n  font-size: 1.8rem;\n  transition: all 0.3s;\n}\n@media (max-width: 59em) {\n  .header__nav-link:link, .header__nav-link:visited {\n    font-size: 3rem;\n  }\n}\n.header__nav-link:hover, .header__nav-link:active {\n  color: #ef5814;\n}\n.header__nav-item-cta {\n  border: 1px solid #ef5814;\n}\n.header__nav-item-cta:link, .header__nav-item-cta:visited {\n  padding: 1.2rem 2.4rem;\n  border-radius: 9px;\n  color: #f9f8f8;\n  background-color: #ef5814;\n}\n.header__nav-item-cta:hover, .header__nav-item-cta:active {\n  background-color: #f9f8f8;\n  color: #ef5814;\n}\n.header__nav-btn {\n  border: none;\n  background: none;\n  cursor: pointer;\n  display: none;\n}\n@media (max-width: 59em) {\n  .header__nav-btn {\n    display: block;\n    z-index: 9999;\n  }\n}\n.header__nav-icon {\n  height: 4.8rem;\n  width: 4.8rem;\n  color: #151010;\n}\n.header__nav-icon[name=close-outline] {\n  display: none;\n}\n@media (max-width: 59em) {\n  .header--open .header__nav {\n    opacity: 1;\n    pointer-events: auto;\n    visibility: visible;\n    transform: translateX(0);\n  }\n}\n.header--open .header__nav-icon[name=close-outline] {\n  display: block;\n}\n.header--open .header__nav-icon[name=menu-outline] {\n  display: none;\n}\n\n.hero {\n  background-color: #fdf2e9;\n  padding: 4.8rem 0 9.6rem 0;\n}\n@media (max-width: 34em) {\n  .hero {\n    padding: 2.4rem 0 6.4rem 0;\n  }\n}\n.hero__inner {\n  max-width: 130rem;\n  margin: 0 auto;\n  padding: 0 3.2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 9.6rem;\n  align-items: center;\n}\n@media (max-width: 84em) {\n  .hero__inner {\n    max-width: 120rem;\n  }\n}\n@media (max-width: 75em) {\n  .hero__inner {\n    gap: 4.8rem;\n  }\n}\n@media (max-width: 59em) {\n  .hero__inner {\n    grid-template-columns: 1fr;\n    padding: 0 8rem;\n    gap: 6.4rem;\n  }\n}\n@media (max-width: 34em) {\n  .hero__inner {\n    padding: 0 3.2rem;\n  }\n}\n@media (max-width: 59em) {\n  .hero__container {\n    text-align: center;\n  }\n}\n.hero__text {\n  font-size: 2rem;\n  line-height: 1.6;\n  margin-bottom: 4.8rem;\n}\n.hero__delivered-container {\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n  margin-top: 8rem;\n}\n@media (max-width: 59em) {\n  .hero__delivered-container {\n    justify-content: center;\n    margin-top: 3.2rem;\n  }\n}\n.hero__delivered-images {\n  display: flex;\n}\n.hero__delivered-image {\n  height: 4.8rem;\n  width: 4.8rem;\n  border-radius: 50%;\n  margin-right: -1.6rem;\n  border: 3px solid #fdf2e9;\n}\n.hero__delivered-image:last-child {\n  margin: 0;\n}\n.hero__delivered-text {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: #151010;\n}\n.hero__delivered-text span {\n  color: #ef5814;\n  font-weight: 700;\n}\n@media (max-width: 59em) {\n  .hero__image-container {\n    text-align: center;\n  }\n}\n.hero__image {\n  width: 100%;\n}\n@media (max-width: 59em) {\n  .hero__image {\n    width: 60%;\n  }\n}\n@media (max-width: 34em) {\n  .hero__image {\n    width: 80%;\n  }\n}\n\n.featured {\n  padding: 4.8rem 0 3.2rem 0;\n}\n.featured__title {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 2.4rem;\n  color: #a8a7a7;\n}\n.featured__images {\n  display: flex;\n  justify-content: space-around;\n}\n.featured__image {\n  height: 3.2rem;\n  filter: brightness(0);\n  opacity: 50%;\n}\n@media (max-width: 59em) {\n  .featured__image {\n    height: 2.4rem;\n  }\n}\n@media (max-width: 34em) {\n  .featured__image {\n    height: 1.2rem;\n  }\n}\n\n.how-works {\n  padding: 9.6rem 0;\n}\n.how-works__step-number {\n  font-size: 8.6rem;\n  font-weight: 600;\n  color: #a8a7a7;\n  margin-bottom: 1.2rem;\n}\n@media (max-width: 59em) {\n  .how-works__step-number {\n    font-size: 7.4rem;\n  }\n}\n.how-works__step-text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n  color: #151010;\n}\n.how-works__step-image-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 34em) {\n  .how-works__step-image-container {\n    transform: translateY(2.4rem);\n  }\n}\n@media (max-width: 34em) {\n  .how-works__step-image-container:nth-child(2) {\n    grid-row: 1;\n  }\n}\n@media (max-width: 34em) {\n  .how-works__step-image-container:nth-child(6) {\n    grid-row: 5;\n  }\n}\n.how-works__step-image-container::before, .how-works__step-image-container::after {\n  content: \"\";\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.how-works__step-image-container::before {\n  width: 60%;\n  padding-bottom: 60%;\n  background-color: #fdf2e9;\n  z-index: -2;\n}\n.how-works__step-image-container::after {\n  width: 45%;\n  padding-bottom: 45%;\n  background-color: #d9b5a5;\n  z-index: -1;\n}\n.how-works__step-image {\n  width: 35%;\n}\n\n.meals {\n  padding: 9.6rem 0;\n}\n.meals__item {\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\n  border-radius: 11px;\n  overflow: hidden;\n  transition: all 0.4s;\n}\n.meals__item:hover {\n  transform: translateY(-1.2rem);\n  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\n}\n.meals__item-content {\n  padding: 3.2rem 4.8rem 4.8rem 4.8rem;\n}\n@media (max-width: 59em) {\n  .meals__item-content {\n    padding: 2.4rem 3.2rem 3.2rem 3.2rem;\n  }\n}\n.meals__item-title {\n  font-size: 2.4rem;\n  color: #151010;\n  font-weight: 600;\n  margin-bottom: 3.2rem;\n}\n.meals__item-attributes {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.meals__item-attribute {\n  font-size: 1.8rem;\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n}\n.meals__item-icon {\n  height: 2.4rem;\n  width: 2.4rem;\n  color: #ef5814;\n}\n.meals__item-img {\n  width: 100%;\n}\n@media (max-width: 44em) {\n  .meals__diets {\n    grid-column: 1/-1;\n    justify-self: center;\n  }\n}\n.meals__btn-container {\n  text-align: center;\n  font-size: 1.8rem;\n}\n\n.testimonials {\n  background-color: #fdf2e9;\n  display: grid;\n  grid-template-columns: 55fr 45fr;\n  align-items: center;\n}\n@media (max-width: 59em) {\n  .testimonials {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonials__inner {\n  padding: 9.6rem;\n}\n@media (max-width: 75em) {\n  .testimonials__inner {\n    padding: 9.6rem 3.2rem;\n  }\n}\n.testimonials__items {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 4.8rem;\n  column-gap: 8rem;\n}\n@media (max-width: 34em) {\n  .testimonials__items {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonials__item-img {\n  width: 6.4rem;\n  border-radius: 50%;\n  margin-bottom: 1.2rem;\n}\n.testimonials__item-text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n  margin-bottom: 1.6rem;\n}\n.testimonials__item-name {\n  font-size: 1.6rem;\n  color: #a8a7a7;\n}\n.testimonials__gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.6rem;\n  padding: 1.6rem;\n}\n@media (max-width: 84em) {\n  .testimonials__gallery {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 59em) {\n  .testimonials__gallery {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n@media (max-width: 34em) {\n  .testimonials__gallery {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1.2rem;\n  }\n}\n.testimonials__gallery-item {\n  overflow: hidden;\n}\n.testimonials__gallery-img {\n  display: block;\n  width: 100%;\n  transition: all 0.4s;\n}\n.testimonials__gallery-img:hover {\n  transform: scale(1.1);\n}\n\n.pricing {\n  padding: 9.6rem 0;\n}\n.pricing__plan {\n  border-radius: 11px;\n  width: 75%;\n}\n@media (max-width: 44em) {\n  .pricing__plan {\n    width: 100%;\n  }\n}\n.pricing__plan--starter {\n  justify-self: end;\n  border: 2px solid #fdf2e9;\n  padding: 4.6rem;\n}\n.pricing__plan--complete {\n  background-color: #fdf2e9;\n  padding: 4.8rem;\n  position: relative;\n  overflow: hidden;\n}\n.pricing__plan--complete::after {\n  content: \"Best value\";\n  position: absolute;\n  top: 6%;\n  right: -18%;\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #333;\n  background-color: #ffd43b;\n  padding: 0.8rem 8rem;\n  transform: rotate(45deg);\n}\n.pricing__plan-header {\n  text-align: center;\n  margin-bottom: 4.8rem;\n}\n.pricing__plan-name {\n  color: #ef5814;\n  font-weight: 600;\n  font-size: 2rem;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n  margin-bottom: 3.2rem;\n}\n.pricing__plan-price {\n  font-size: 6.2rem;\n  font-weight: 600;\n  color: #151010;\n  margin-bottom: 1.6rem;\n}\n.pricing__plan-price span {\n  font-size: 3rem;\n  font-weight: 500;\n  margin-right: 0.8rem;\n}\n.pricing__plan-text {\n  font-size: 1.6rem;\n  line-height: 1.6;\n  color: #a8a7a7;\n}\n.pricing__plan-sing-up {\n  text-align: center;\n  margin-top: 4.8rem;\n}\n.pricing__plan-details {\n  font-size: 1.6rem;\n  line-height: 1.6;\n  text-align: center;\n}\n.pricing__feature-icon {\n  color: #f9f8f8;\n  height: 3.2rem;\n  width: 3.2rem;\n  background-color: #ef5814;\n  margin-bottom: 3.2rem;\n  padding: 1.6rem;\n  border-radius: 50%;\n}\n.pricing__feature-title {\n  font-size: 2.4rem;\n  color: #5d3e32;\n  font-weight: 700;\n  margin-bottom: 1.6rem;\n}\n.pricing__feature-text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n}\n\n.cta {\n  padding: 4.8rem 0 12.8rem;\n}\n.cta__inner {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);\n  border-radius: 11px;\n  background-image: linear-gradient(to right bottom, rgba(239, 88, 20, 0.8), #ef5814);\n  overflow: hidden;\n}\n@media (max-width: 59em) {\n  .cta__inner {\n    grid-template-columns: 3fr 2fr;\n  }\n}\n@media (max-width: 34em) {\n  .cta__inner {\n    grid-template-columns: 1fr;\n  }\n}\n.cta__text-container {\n  padding: 4.8rem 6.4rem 6.4rem 6.4rem;\n}\n@media (max-width: 34em) {\n  .cta__text-container {\n    padding: 3.2rem;\n  }\n}\n.cta__title {\n  color: inherit;\n  margin-bottom: 3.2rem;\n}\n.cta__text {\n  font-size: 1.8rem;\n  line-height: 1.8;\n  margin-bottom: 4.8rem;\n}\n.cta__form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3.2rem;\n  row-gap: 2.4rem;\n}\n@media (max-width: 59em) {\n  .cta__form {\n    grid-template-columns: 1fr;\n  }\n}\n.cta__form-label {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 500;\n  margin-bottom: 1.2rem;\n}\n.cta__form-input {\n  width: 100%;\n  padding: 1.2rem;\n  font-size: 1.8rem;\n  font-family: inherit;\n  color: inherit;\n  border: none;\n  background-color: #fdf2e9;\n  border-radius: 9px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.cta__form-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);\n}\n.cta__form-input::placeholder {\n  color: #a8a7a7;\n}\n.cta__form-btn {\n  margin-top: 1.2rem;\n}\n.cta__img-container {\n  background-image: linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n}\n@media (max-width: 34em) {\n  .cta__img-container {\n    height: 32rem;\n    grid-row: 1;\n  }\n}\n\n.footer {\n  padding: 12.8rem 0;\n  border-top: 1px solid #d9b5a5;\n}\n.footer__inner {\n  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;\n}\n@media (max-width: 44em) {\n  .footer__inner {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.footer__nav {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n@media (max-width: 44em) {\n  .footer__nav {\n    grid-row: 1;\n    grid-column: span 2;\n    margin-bottom: 3.2rem;\n  }\n}\n.footer__nav--logo {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 44em) {\n  .footer__nav--logo {\n    grid-column: span 3;\n    grid-row: 2;\n  }\n}\n@media (max-width: 44em) {\n  .footer__nav--address {\n    grid-column: span 3;\n    grid-row: 2;\n  }\n}\n.footer__nav-heading {\n  font-size: 1.8rem;\n  font-weight: 500;\n  margin-bottom: 4rem;\n}\n.footer__nav-items {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n}\n.footer__nav-contacts {\n  font-style: normal;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n.footer__nav-address {\n  margin-bottom: 2.4rem;\n  color: #a8a7a7;\n}\n.footer__link {\n  text-decoration: none;\n  font-size: 1.6rem;\n  color: #a8a7a7;\n  transition: all 0.3s;\n}\n.footer__link:hover {\n  color: #d9b5a5;\n}\n.footer__logo-link {\n  display: block;\n  margin-bottom: 3.2rem;\n}\n.footer__logo {\n  height: 2.2rem;\n}\n.footer__social-links {\n  list-style: none;\n  display: flex;\n  gap: 2.4rem;\n}\n.footer__social-icon {\n  list-style: none;\n  display: flex;\n  gap: 2.4rem;\n}\n.footer__copyright {\n  font-size: 1.4rem;\n  line-height: 1.6;\n  color: #a8a7a7;\n  margin-top: auto;\n}\n\n.sticky .header {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 8rem;\n  padding-top: 0;\n  padding-bottom: 0;\n  background-color: rgba(255, 255, 255, 0.97);\n  z-index: 999;\n  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);\n}\n.sticky .hero {\n  margin-top: 9.6rem;\n}", "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,wBAAA;AACF;;AAEA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AACF;;AAEA;;EAEE,gBAAA;AACF;;AAEA;;EAEE,YAAA;AACF;;AAEA;;;;EAIE,WAAA;EACA,aAAA;AACF;;AAEA;EACE,yBAAA;EACA,iBAAA;AACF;;AAmBA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAhBF;;AAmBA;EACE,gCAAA;EACA,gBAAA;EACA,kBAAA;AAhBF;AAkBE;EALF;IAMI,iBAAA;EAfF;AACF;AAiBE;EATF;IAUI,cAAA;EAdF;AACF;;AAiBA;EACE,gCAAA;EACA,cAAA;EACA,gBAAA;EACA,cAtCY;EAuCZ,kBAAA;AAdF;;AAiBA;EACE,mBAAA;AAdF;;AAiBA;;;;;;;;EAQE,gCAAA;EACA,gBAAA;EACA,sBAAA;EACA,cAzDY;AA2Cd;;AAiBA;;EAEE,iBAAA;EACA,iBAAA;EACA,qBAAA;AAdF;;AAiBA;;EAEE,iBAAA;EACA,gBAAA;EACA,qBAAA;AAdF;AAgBE;EANF;;IAOI,iBAAA;EAZF;AACF;AAcE;EAVF;;IAWI,qBAAA;EAVF;AACF;;AAaA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AAVF;AAYE;EANF;;IAOI,iBAAA;EARF;AACF;;AAWA;;EAEE,iBAAA;EACA,gBAAA;EACA,cA3FQ;EA4FR,yBAAA;EACA,qBAAA;EACA,sBAAA;AARF;;AAaI;EACE,+BAAA;AAVN;AAeI;EACE,gCAAA;AAbN;;AAkBA;EACE,iBAAA;EACA,iBAAA;EACA,cAAA;AAfF;;AAkBA;EACE,aAAA;EACA,kBAAA;EACA,eAAA;AAfF;AAiBE;EALF;IAMI,kBAAA;IACA,eAAA;EAdF;AACF;AAgBE;EAVF;IAWI,eAAA;EAbF;AACF;AAeE;EACE,gBAAA;AAbJ;AAgBE;EACE,qBAAA;AAdJ;AAkBI;EACE,qCAAA;AAhBN;AAkBM;EAHF;IAII,0BAAA;EAfN;AACF;AAkBI;EACE,qCAAA;AAhBN;AAkBM;EAHF;IAII,qCAAA;EAfN;AACF;AAiBM;EAPF;IAQI,0BAAA;EAdN;AACF;AAiBI;EACE,qCAAA;AAfN;AAiBM;EAHF;IAII,qCAAA;EAdN;AACF;AAgBM;EAPF;IAQI,0BAAA;EAbN;AACF;AAgBI;EACE,qCAAA;AAdN;AAkBE;EACE,mBAAA;AAhBJ;;AAoBA;EACE,kBAAA;AAjBF;;AAoBA;EACE,qBAAA;EACA,cA5LQ;EA6LR,qBAAA;EACA,qCAAA;EACA,mBAAA;EACA,oBAAA;AAjBF;AAmBE;EAEE,cAvMM;EAwMN,oCAAA;AAlBJ;;AAuBA;EACE,qBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,oBAAA;EACA,oBAAA;AApBF;AAsBE;EAZF;IAaI,sBAAA;EAnBF;AACF;AAqBE;EACE,yBA3NM;EA4NN,cApOW;EAqOX,yBAAA;AAnBJ;AAqBI;EAEE,cAjOI;EAkOJ,yBA1OS;AAsNf;AAwBE;EACE,yBA/OW;EAgPX,cA9OU;EA+OV,yBAAA;AAtBJ;AAwBI;EAEE,mCAAA;EACA,qBApPQ;AA6Nd;;AA4BA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAzBF;AA2BE;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AAzBJ;AA4BE;EACE,WAAA;EACA,YAAA;EACA,cApQM;AA0OV;;AA8BA;EACE,qBAAA;EACA,aAAA;EACA,WAAA;AA3BF;AA6BE;EACE,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAxRU;EAyRV,oBAAA;EACA,gBAAA;AA3BJ;AA6BI;EACE,yBAtRO;AA2Pb;AA8BI;EACE,yBAzRE;AA6PR;AA+BI;EACE,yBA5RE;AA+PR;;AAmCA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBA9SQ;EA+SR,cAAA;EACA,iBAAA;EACA,kBAAA;AAhCF;AAkCE;EATF;IAUI,iBAAA;EA/BF;AACF;AAiCE;EACE,cAAA;AA/BJ;AAmCI;EADF;IAEI,yBA7TI;IA8TJ,kCAAA;IACA,2BAAA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,aAAA;IACA,2BAAA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,4BAAA;IACA,UAAA;IACA,oBAAA;IACA,kBAAA;EAhCJ;AACF;AAmCE;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;AAjCJ;AAmCI;EANF;IAOI,WAAA;EAhCJ;AACF;AAkCI;EAVF;IAWI,sBAAA;IACA,WAAA;EA/BJ;AACF;AAmCI;EAEE,qBAAA;EACA,qBAAA;EACA,cAtWQ;EAuWR,gBAAA;EACA,iBAAA;EACA,oBAAA;AAlCN;AAoCM;EATF;IAUI,eAAA;EAjCN;AACF;AAoCI;EAEE,cA5WI;AAyUV;AAuCE;EACE,yBAAA;AArCJ;AAuCI;EAEE,sBAAA;EACA,kBAAA;EACA,cA/XS;EAgYT,yBAxXI;AAkVV;AAyCI;EAEE,yBArYS;EAsYT,cA9XI;AAsVV;AA4CE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AA1CJ;AA4CI;EANF;IAOI,cAAA;IACA,aAAA;EAzCJ;AACF;AA4CE;EACE,cAAA;EACA,aAAA;EACA,cAvZU;AA6Wd;AA4CI;EACE,aAAA;AA1CN;AAgDM;EADF;IAEI,UAAA;IACA,oBAAA;IACA,mBAAA;IACA,wBAAA;EA7CN;AACF;AAgDI;EACE,cAAA;AA9CN;AAiDI;EACE,aAAA;AA/CN;;AAqDA;EACE,yBAAA;EACA,0BAAA;AAlDF;AAoDE;EAJF;IAKI,0BAAA;EAjDF;AACF;AAmDE;EACE,iBAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;AAjDJ;AAmDI;EATF;IAUI,iBAAA;EAhDJ;AACF;AAkDI;EAbF;IAcI,WAAA;EA/CJ;AACF;AAiDI;EAjBF;IAkBI,0BAAA;IACA,eAAA;IACA,WAAA;EA9CJ;AACF;AAgDI;EAvBF;IAwBI,iBAAA;EA7CJ;AACF;AAiDI;EADF;IAEI,kBAAA;EA9CJ;AACF;AAiDE;EACE,eAAA;EACA,gBAAA;EACA,qBAAA;AA/CJ;AAkDE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AAhDJ;AAkDI;EANF;IAOI,uBAAA;IACA,kBAAA;EA/CJ;AACF;AAkDE;EACE,aAAA;AAhDJ;AAmDE;EACE,cAAA;EACA,aAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;AAjDJ;AAmDI;EACE,SAAA;AAjDN;AAqDE;EACE,iBAAA;EACA,gBAAA;EACA,cAlgBU;AA+cd;AAqDI;EACE,cA/fI;EAggBJ,gBAAA;AAnDN;AAwDI;EADF;IAEI,kBAAA;EArDJ;AACF;AAwDE;EACE,WAAA;AAtDJ;AAwDI;EAHF;IAII,UAAA;EArDJ;AACF;AAuDI;EAPF;IAQI,UAAA;EApDJ;AACF;;AAyDA;EACE,0BAAA;AAtDF;AAwDE;EACE,iBAAA;EACA,yBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAziBW;AAmff;AAyDE;EACE,aAAA;EACA,6BAAA;AAvDJ;AA0DE;EACE,cAAA;EACA,qBAAA;EACA,YAAA;AAxDJ;AA0DI;EALF;IAMI,cAAA;EAvDJ;AACF;AAyDI;EATF;IAUI,cAAA;EAtDJ;AACF;;AA2DA;EACE,iBAAA;AAxDF;AA0DE;EACE,iBAAA;EACA,gBAAA;EACA,cAvkBW;EAwkBX,qBAAA;AAxDJ;AA0DI;EANF;IAOI,iBAAA;EAvDJ;AACF;AA0DE;EACE,iBAAA;EACA,gBAAA;EACA,cAjlBU;AAyhBd;AA2DE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAzDJ;AA2DI;EANF;IAOI,6BAAA;EAxDJ;AACF;AA2DM;EADF;IAEI,WAAA;EAxDN;AACF;AA4DM;EADF;IAEI,WAAA;EAzDN;AACF;AA4DI;EAEE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AA3DN;AA8DI;EACE,UAAA;EACA,mBAAA;EACA,yBAvnBI;EAwnBJ,WAAA;AA5DN;AA+DI;EACE,UAAA;EACA,mBAAA;EACA,yBA7nBI;EA8nBJ,WAAA;AA7DN;AAiEE;EACE,UAAA;AA/DJ;;AAoEA;EACE,iBAAA;AAjEF;AAmEE;EACE,gDAAA;EACA,mBAAA;EACA,gBAAA;EACA,oBAAA;AAjEJ;AAmEI;EACE,8BAAA;EACA,+CAAA;AAjEN;AAqEE;EACE,oCAAA;AAnEJ;AAqEI;EAHF;IAII,oCAAA;EAlEJ;AACF;AAqEE;EACE,iBAAA;EACA,cAnqBU;EAoqBV,gBAAA;EACA,qBAAA;AAnEJ;AAsEE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AApEJ;AAuEE;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;AArEJ;AAwEE;EACE,cAAA;EACA,aAAA;EACA,cAnrBM;AA6mBV;AAyEE;EACE,WAAA;AAvEJ;AA2EI;EADF;IAEI,iBAAA;IACA,oBAAA;EAxEJ;AACF;AA2EE;EACE,kBAAA;EACA,iBAAA;AAzEJ;;AA6EA;EACE,yBA7sBQ;EA8sBR,aAAA;EACA,gCAAA;EACA,mBAAA;AA1EF;AA4EE;EANF;IAOI,0BAAA;EAzEF;AACF;AA2EE;EACE,eAAA;AAzEJ;AA2EI;EAHF;IAII,sBAAA;EAxEJ;AACF;AA2EE;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AAzEJ;AA2EI;EANF;IAOI,0BAAA;EAxEJ;AACF;AA2EE;EACE,aAAA;EACA,kBAAA;EACA,qBAAA;AAzEJ;AA4EE;EACE,iBAAA;EACA,gBAAA;EACA,qBAAA;AA1EJ;AA6EE;EACE,iBAAA;EACA,cAzvBW;AA8qBf;AA8EE;EACE,aAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;AA5EJ;AA8EI;EANF;IAOI,qCAAA;EA3EJ;AACF;AA6EI;EAVF;IAWI,qCAAA;EA1EJ;AACF;AA4EI;EAdF;IAeI,qCAAA;IACA,WAAA;EAzEJ;AACF;AA4EE;EACE,gBAAA;AA1EJ;AA6EE;EACE,cAAA;EACA,WAAA;EACA,oBAAA;AA3EJ;AA6EI;EACE,qBAAA;AA3EN;;AAiFA;EACE,iBAAA;AA9EF;AAgFE;EACE,mBAAA;EACA,UAAA;AA9EJ;AAgFI;EAJF;IAKI,WAAA;EA7EJ;AACF;AA+EI;EACE,iBAAA;EACA,yBAAA;EACA,eAAA;AA7EN;AAgFI;EACE,yBAhzBI;EAizBJ,eAAA;EACA,kBAAA;EACA,gBAAA;AA9EN;AAgFM;EACE,qBAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EACA,yBAtzBA;EAuzBA,oBAAA;EACA,wBAAA;AA9ER;AAmFE;EACE,kBAAA;EACA,qBAAA;AAjFJ;AAoFE;EACE,cAt0BM;EAu0BN,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;AAlFJ;AAqFE;EACE,iBAAA;EACA,gBAAA;EACA,cAv1BU;EAw1BV,qBAAA;AAnFJ;AAqFI;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;AAnFN;AAuFE;EACE,iBAAA;EACA,gBAAA;EACA,cAr2BW;AAgxBf;AAwFE;EACE,kBAAA;EACA,kBAAA;AAtFJ;AAyFE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AAvFJ;AA0FE;EACE,cAr3BW;EAs3BX,cAAA;EACA,aAAA;EACA,yBAh3BM;EAi3BN,qBAAA;EACA,eAAA;EACA,kBAAA;AAxFJ;AA2FE;EACE,iBAAA;EACA,cA13BM;EA23BN,gBAAA;EACA,qBAAA;AAzFJ;AA4FE;EACE,iBAAA;EACA,gBAAA;AA1FJ;;AA+FA;EACE,yBAAA;AA5FF;AA8FE;EACE,aAAA;EACA,8BAAA;EACA,+CAAA;EACA,mBAAA;EACA,mFAAA;EACA,gBAAA;AA5FJ;AA8FI;EARF;IASI,8BAAA;EA3FJ;AACF;AA6FI;EAZF;IAaI,0BAAA;EA1FJ;AACF;AA6FE;EACE,oCAAA;AA3FJ;AA6FI;EAHF;IAII,eAAA;EA1FJ;AACF;AA6FE;EACE,cAAA;EACA,qBAAA;AA3FJ;AA8FE;EACE,iBAAA;EACA,gBAAA;EACA,qBAAA;AA5FJ;AA+FE;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,eAAA;AA7FJ;AA+FI;EANF;IAOI,0BAAA;EA5FJ;AACF;AA+FE;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;AA7FJ;AAgGE;EACE,WAAA;EACA,eAAA;EACA,iBAAA;EACA,oBAAA;EACA,cAAA;EACA,YAAA;EACA,yBAz8BM;EA08BN,kBAAA;EACA,wCAAA;AA9FJ;AAgGI;EACE,aAAA;EACA,iDAAA;AA9FN;AAiGI;EACE,cAr9BS;AAs3Bf;AAmGE;EACE,kBAAA;AAjGJ;AAoGE;EACE,+IAAA;EACA,sBAAA;EACA,2BAAA;AAlGJ;AAoGI;EALF;IAMI,aAAA;IACA,WAAA;EAjGJ;AACF;;AAsGA;EACE,kBAAA;EACA,6BAAA;AAnGF;AAqGE;EACE,8CAAA;AAnGJ;AAqGI;EAHF;IAII,qCAAA;EAlGJ;AACF;AAqGE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAnGJ;AAqGI;EANF;IAOI,WAAA;IACA,mBAAA;IACA,qBAAA;EAlGJ;AACF;AAoGI;EACE,aAAA;EACA,sBAAA;AAlGN;AAoGM;EAJF;IAKI,mBAAA;IACA,WAAA;EAjGN;AACF;AAqGM;EADF;IAEI,mBAAA;IACA,WAAA;EAlGN;AACF;AAsGE;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;AApGJ;AAuGE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AArGJ;AAwGE;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;AAtGJ;AAyGE;EACE,qBAAA;EACA,cAziCW;AAk8Bf;AA0GE;EACE,qBAAA;EACA,iBAAA;EACA,cA/iCW;EAgjCX,oBAAA;AAxGJ;AA0GI;EACE,cAhjCI;AAw8BV;AA4GE;EACE,cAAA;EACA,qBAAA;AA1GJ;AA6GE;EACE,cAAA;AA3GJ;AA8GE;EACE,gBAAA;EACA,aAAA;EACA,WAAA;AA5GJ;AA+GE;EACE,gBAAA;EACA,aAAA;EACA,WAAA;AA7GJ;AAgHE;EACE,iBAAA;EACA,gBAAA;EACA,cA/kCW;EAglCX,gBAAA;AA9GJ;;AAmHE;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,2CAAA;EACA,YAAA;EACA,+CAAA;AAhHJ;AAmHE;EACE,kBAAA;AAjHJ","sourcesContent":["// reset css\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote::before,\r\nblockquote::after,\r\nq::before,\r\nq::after {\r\n  content: '';\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n// colors\r\n$light-gray-1: #f9f8f8;\r\n$light-gray-2: #a8a7a7;\r\n$dark-gray-1: #151010;\r\n$twine-1: #fdf2e9;\r\n$twine-2: #d9b5a5;\r\n$twine-3: #c39556;\r\n$twine-4: #5d3e32;\r\n$secondary: #c42914;\r\n$primary: #ef5814;\r\n$vegetarian: #51cf66;\r\n$vegan: #94d82d;\r\n$paleo: #ffd43b;\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');\r\n\r\n// base styles\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  /* 10px / 16px = 0.625 = 62.5% */\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n\r\n  @media (max-width: 75em) {\r\n    font-size: 56.25%;\r\n  }\r\n\r\n  @media (max-width: 59em) {\r\n    font-size: 50%;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'Rubik', sans-serif;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  color: $dark-gray-1;\r\n  overflow-x: hidden;\r\n}\r\n\r\np {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh1,\r\n.title--primary,\r\nh2,\r\n.title--secondary,\r\nh3,\r\n.title--tertiary,\r\nh4,\r\nh5 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  color: $dark-gray-1;\r\n}\r\n\r\nh1,\r\n.title--primary {\r\n  font-size: 5.2rem;\r\n  line-height: 1.05;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\nh2,\r\n.title--secondary {\r\n  font-size: 4.4rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 9.6rem;\r\n\r\n  @media (max-width: 75em) {\r\n    font-size: 3.6rem;\r\n  }\r\n\r\n  @media (max-width: 44em) {\r\n    margin-bottom: 4.8rem;\r\n  }\r\n}\r\n\r\nh3,\r\n.title--tertiary {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 3.2rem;\r\n\r\n  @media (max-width: 75em) {\r\n    font-size: 2.4rem;\r\n  }\r\n}\r\n\r\nh4,\r\n.title--sub {\r\n  font-size: 1.6rem;\r\n  font-weight: 500;\r\n  color: $primary;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.6rem;\r\n  letter-spacing: 0.75px;\r\n}\r\n\r\n.margin {\r\n  &__right {\r\n    &--small {\r\n      margin-right: 1.6rem !important;\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    &--md {\r\n      margin-bottom: 4.8rem !important;\r\n    }\r\n  }\r\n}\r\n\r\n.container {\r\n  max-width: 120rem;\r\n  padding: 0 3.2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  column-gap: 6.4rem;\r\n  row-gap: 9.6rem;\r\n\r\n  @media (max-width: 75em) {\r\n    column-gap: 4.8rem;\r\n    row-gap: 6.4rem;\r\n  }\r\n\r\n  @media (max-width: 34em) {\r\n    row-gap: 4.8rem;\r\n  }\r\n\r\n  &:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  &:not(:last-child) {\r\n    margin-bottom: 9.6rem;\r\n  }\r\n\r\n  &__cols {\r\n    &--2 {\r\n      grid-template-columns: repeat(2, 1fr);\r\n\r\n      @media (max-width: 34em) {\r\n        grid-template-columns: 1fr;\r\n      }\r\n    }\r\n\r\n    &--3 {\r\n      grid-template-columns: repeat(3, 1fr);\r\n\r\n      @media (max-width: 44em) {\r\n        grid-template-columns: repeat(2, 1fr);\r\n      }\r\n\r\n      @media (max-width: 34em) {\r\n        grid-template-columns: 1fr;\r\n      }\r\n    }\r\n\r\n    &--4 {\r\n      grid-template-columns: repeat(4, 1fr);\r\n\r\n      @media (max-width: 44em) {\r\n        grid-template-columns: repeat(2, 1fr);\r\n      }\r\n\r\n      @media (max-width: 34em) {\r\n        grid-template-columns: 1fr;\r\n      }\r\n    }\r\n\r\n    &--5 {\r\n      grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }\r\n\r\n  &--vertical-center {\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.link {\r\n  display: inline-block;\r\n  color: $primary;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid currentColor;\r\n  padding-bottom: 2px;\r\n  transition: all 0.3s;\r\n\r\n  &:hover,\r\n  &:active {\r\n    color: $twine-3;\r\n    border-bottom: 1px solid transparent;\r\n  }\r\n}\r\n\r\n// button styles\r\n.btn {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1.6rem 3.2rem;\r\n  border-radius: 9px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  transition: all 0.3s;\r\n\r\n  @media (max-width: 34em) {\r\n    padding: 2.4rem 1.6rem;\r\n  }\r\n\r\n  &--fill {\r\n    background-color: $primary;\r\n    color: $light-gray-1;\r\n    border: 1px solid $primary;\r\n\r\n    &:hover,\r\n    &:active {\r\n      color: $primary;\r\n      background-color: $light-gray-1;\r\n    }\r\n  }\r\n\r\n  &--outline {\r\n    background-color: $light-gray-1;\r\n    color: $dark-gray-1;\r\n    border: 1px solid $twine-1;\r\n\r\n    &:active,\r\n    &:hover {\r\n      box-shadow: inset 0 0 0 3px $light-gray-1;\r\n      border-color: $dark-gray-1;\r\n    }\r\n  }\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.6rem;\r\n\r\n  &__item {\r\n    font-size: 1.8rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  &__icon {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: $primary;\r\n  }\r\n}\r\n\r\n.tags {\r\n  margin-bottom: 1.2rem;\r\n  display: flex;\r\n  gap: 0.4rem;\r\n\r\n  & .tag {\r\n    display: inline-block;\r\n    padding: 0.4rem 0.8rem;\r\n    font-size: 1.2rem;\r\n    text-transform: uppercase;\r\n    color: $dark-gray-1;\r\n    border-radius: 100px;\r\n    font-weight: 600;\r\n\r\n    &--vegetarian {\r\n      background-color: $vegetarian;\r\n    }\r\n\r\n    &--vegan {\r\n      background-color: $vegan;\r\n    }\r\n\r\n    &--paleo {\r\n      background-color: $paleo;\r\n    }\r\n  }\r\n}\r\n\r\n// header\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: $twine-1;\r\n  height: 9.6rem;\r\n  padding: 0 4.8rem;\r\n  position: relative;\r\n\r\n  @media (max-width: 75em) {\r\n    padding: 0 3.2rem;\r\n  }\r\n\r\n  &__logo-img {\r\n    height: 2.2rem;\r\n  }\r\n\r\n  &__nav {\r\n    @media (max-width: 59em) {\r\n      background-color: $twine-1;\r\n      -webkit-backdrop-filter: blur(5px);\r\n      backdrop-filter: blur(10px);\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100vh;\r\n      transform: translateX(100%);\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      transition: all 0.5s ease-in;\r\n      opacity: 0;\r\n      pointer-events: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n\r\n  &__nav-list {\r\n    list-style: none;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4.8rem;\r\n\r\n    @media (max-width: 75em) {\r\n      gap: 3.2rem;\r\n    }\r\n\r\n    @media (max-width: 59em) {\r\n      flex-direction: column;\r\n      gap: 4.8rem;\r\n    }\r\n  }\r\n\r\n  &__nav-link {\r\n    &:link,\r\n    &:visited {\r\n      display: inline-block;\r\n      text-decoration: none;\r\n      color: $dark-gray-1;\r\n      font-weight: 500;\r\n      font-size: 1.8rem;\r\n      transition: all 0.3s;\r\n\r\n      @media (max-width: 59em) {\r\n        font-size: 3rem;\r\n      }\r\n    }\r\n\r\n    &:hover,\r\n    &:active {\r\n      color: $primary;\r\n    }\r\n  }\r\n\r\n  &__nav-item-cta {\r\n    border: 1px solid $primary;\r\n\r\n    &:link,\r\n    &:visited {\r\n      padding: 1.2rem 2.4rem;\r\n      border-radius: 9px;\r\n      color: $light-gray-1;\r\n      background-color: $primary;\r\n    }\r\n\r\n    &:hover,\r\n    &:active {\r\n      background-color: $light-gray-1;\r\n      color: $primary;\r\n    }\r\n  }\r\n\r\n  &__nav-btn {\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    display: none;\r\n\r\n    @media (max-width: 59em) {\r\n      display: block;\r\n      z-index: 9999;\r\n    }\r\n  }\r\n\r\n  &__nav-icon {\r\n    height: 4.8rem;\r\n    width: 4.8rem;\r\n    color: $dark-gray-1;\r\n\r\n    &[name='close-outline'] {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &--open {\r\n    & .header__nav {\r\n      @media (max-width: 59em) {\r\n        opacity: 1;\r\n        pointer-events: auto;\r\n        visibility: visible;\r\n        transform: translateX(0);\r\n      }\r\n    }\r\n\r\n    & .header__nav-icon[name='close-outline'] {\r\n      display: block;\r\n    }\r\n\r\n    & .header__nav-icon[name='menu-outline'] {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n\r\n// hero section\r\n.hero {\r\n  background-color: #fdf2e9;\r\n  padding: 4.8rem 0 9.6rem 0;\r\n\r\n  @media (max-width: 34em) {\r\n    padding: 2.4rem 0 6.4rem 0;\r\n  }\r\n\r\n  &__inner {\r\n    max-width: 130rem;\r\n    margin: 0 auto;\r\n    padding: 0 3.2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 9.6rem;\r\n    align-items: center;\r\n\r\n    @media (max-width: 84em) {\r\n      max-width: 120rem;\r\n    }\r\n\r\n    @media (max-width: 75em) {\r\n      gap: 4.8rem;\r\n    }\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: 1fr;\r\n      padding: 0 8rem;\r\n      gap: 6.4rem;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      padding: 0 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__container {\r\n    @media (max-width: 59em) {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__text {\r\n    font-size: 2rem;\r\n    line-height: 1.6;\r\n    margin-bottom: 4.8rem;\r\n  }\r\n\r\n  &__delivered-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n    margin-top: 8rem;\r\n\r\n    @media (max-width: 59em) {\r\n      justify-content: center;\r\n      margin-top: 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__delivered-images {\r\n    display: flex;\r\n  }\r\n\r\n  &__delivered-image {\r\n    height: 4.8rem;\r\n    width: 4.8rem;\r\n    border-radius: 50%;\r\n    margin-right: -1.6rem;\r\n    border: 3px solid #fdf2e9;\r\n\r\n    &:last-child {\r\n      margin: 0;\r\n    }\r\n  }\r\n\r\n  &__delivered-text {\r\n    font-size: 1.8rem;\r\n    font-weight: 600;\r\n    color: $dark-gray-1;\r\n\r\n    & span {\r\n      color: $primary;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n\r\n  &__image-container {\r\n    @media (max-width: 59em) {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    width: 100%;\r\n\r\n    @media (max-width: 59em) {\r\n      width: 60%;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      width: 80%;\r\n    }\r\n  }\r\n}\r\n\r\n// featured section\r\n.featured {\r\n  padding: 4.8rem 0 3.2rem 0;\r\n\r\n  &__title {\r\n    font-size: 1.4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.75px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-bottom: 2.4rem;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__images {\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  &__image {\r\n    height: 3.2rem;\r\n    filter: brightness(0);\r\n    opacity: 50%;\r\n\r\n    @media (max-width: 59em) {\r\n      height: 2.4rem;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      height: 1.2rem;\r\n    }\r\n  }\r\n}\r\n\r\n// how works section\r\n.how-works {\r\n  padding: 9.6rem 0;\r\n\r\n  &__step-number {\r\n    font-size: 8.6rem;\r\n    font-weight: 600;\r\n    color: $light-gray-2;\r\n    margin-bottom: 1.2rem;\r\n\r\n    @media (max-width: 59em) {\r\n      font-size: 7.4rem;\r\n    }\r\n  }\r\n\r\n  &__step-text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n    color: $dark-gray-1;\r\n  }\r\n\r\n  &__step-image-container {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    @media (max-width: 34em) {\r\n      transform: translateY(2.4rem);\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      @media (max-width: 34em) {\r\n        grid-row: 1;\r\n      }\r\n    }\r\n\r\n    &:nth-child(6) {\r\n      @media (max-width: 34em) {\r\n        grid-row: 5;\r\n      }\r\n    }\r\n\r\n    &::before,\r\n    &::after {\r\n      content: '';\r\n      display: block;\r\n      border-radius: 50%;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n\r\n    &::before {\r\n      width: 60%;\r\n      padding-bottom: 60%;\r\n      background-color: $twine-1;\r\n      z-index: -2;\r\n    }\r\n\r\n    &::after {\r\n      width: 45%;\r\n      padding-bottom: 45%;\r\n      background-color: $twine-2;\r\n      z-index: -1;\r\n    }\r\n  }\r\n\r\n  &__step-image {\r\n    width: 35%;\r\n  }\r\n}\r\n\r\n// meals section\r\n.meals {\r\n  padding: 9.6rem 0;\r\n\r\n  &__item {\r\n    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n    border-radius: 11px;\r\n    overflow: hidden;\r\n    transition: all 0.4s;\r\n\r\n    &:hover {\r\n      transform: translateY(-1.2rem);\r\n      box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);\r\n    }\r\n  }\r\n\r\n  &__item-content {\r\n    padding: 3.2rem 4.8rem 4.8rem 4.8rem;\r\n\r\n    @media (max-width: 59em) {\r\n      padding: 2.4rem 3.2rem 3.2rem 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__item-title {\r\n    font-size: 2.4rem;\r\n    color: $dark-gray-1;\r\n    font-weight: 600;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__item-attributes {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  }\r\n\r\n  &__item-attribute {\r\n    font-size: 1.8rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n  }\r\n\r\n  &__item-icon {\r\n    height: 2.4rem;\r\n    width: 2.4rem;\r\n    color: $primary;\r\n  }\r\n\r\n  &__item-img {\r\n    width: 100%;\r\n  }\r\n\r\n  &__diets {\r\n    @media (max-width: 44em) {\r\n      grid-column: 1 / -1;\r\n      justify-self: center;\r\n    }\r\n  }\r\n\r\n  &__btn-container {\r\n    text-align: center;\r\n    font-size: 1.8rem;\r\n  }\r\n}\r\n\r\n.testimonials {\r\n  background-color: $twine-1;\r\n  display: grid;\r\n  grid-template-columns: 55fr 45fr;\r\n  align-items: center;\r\n\r\n  @media (max-width: 59em) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  &__inner {\r\n    padding: 9.6rem;\r\n\r\n    @media (max-width: 75em) {\r\n      padding: 9.6rem 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__items {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: 4.8rem;\r\n    column-gap: 8rem;\r\n\r\n    @media (max-width: 34em) {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n\r\n  &__item-img {\r\n    width: 6.4rem;\r\n    border-radius: 50%;\r\n    margin-bottom: 1.2rem;\r\n  }\r\n\r\n  &__item-text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n    margin-bottom: 1.6rem;\r\n  }\r\n\r\n  &__item-name {\r\n    font-size: 1.6rem;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__gallery {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 1.6rem;\r\n    padding: 1.6rem;\r\n\r\n    @media (max-width: 84em) {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: repeat(6, 1fr);\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      grid-template-columns: repeat(4, 1fr);\r\n      gap: 1.2rem;\r\n    }\r\n  }\r\n\r\n  &__gallery-item {\r\n    overflow: hidden;\r\n  }\r\n\r\n  &__gallery-img {\r\n    display: block;\r\n    width: 100%;\r\n    transition: all 0.4s;\r\n\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n\r\n// pricing section\r\n.pricing {\r\n  padding: 9.6rem 0;\r\n\r\n  &__plan {\r\n    border-radius: 11px;\r\n    width: 75%;\r\n\r\n    @media (max-width: 44em) {\r\n      width: 100%;\r\n    }\r\n\r\n    &--starter {\r\n      justify-self: end;\r\n      border: 2px solid $twine-1;\r\n      padding: 4.6rem;\r\n    }\r\n\r\n    &--complete {\r\n      background-color: $twine-1;\r\n      padding: 4.8rem;\r\n      position: relative;\r\n      overflow: hidden;\r\n\r\n      &::after {\r\n        content: 'Best value';\r\n        position: absolute;\r\n        top: 6%;\r\n        right: -18%;\r\n        text-transform: uppercase;\r\n        font-size: 1.4rem;\r\n        font-weight: 700;\r\n        color: #333;\r\n        background-color: $paleo;\r\n        padding: 0.8rem 8rem;\r\n        transform: rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__plan-header {\r\n    text-align: center;\r\n    margin-bottom: 4.8rem;\r\n  }\r\n\r\n  &__plan-name {\r\n    color: $primary;\r\n    font-weight: 600;\r\n    font-size: 2rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.75px;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__plan-price {\r\n    font-size: 6.2rem;\r\n    font-weight: 600;\r\n    color: $dark-gray-1;\r\n    margin-bottom: 1.6rem;\r\n\r\n    & span {\r\n      font-size: 3rem;\r\n      font-weight: 500;\r\n      margin-right: 0.8rem;\r\n    }\r\n  }\r\n\r\n  &__plan-text {\r\n    font-size: 1.6rem;\r\n    line-height: 1.6;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__plan-sing-up {\r\n    text-align: center;\r\n    margin-top: 4.8rem;\r\n  }\r\n\r\n  &__plan-details {\r\n    font-size: 1.6rem;\r\n    line-height: 1.6;\r\n    text-align: center;\r\n  }\r\n\r\n  &__feature-icon {\r\n    color: $light-gray-1;\r\n    height: 3.2rem;\r\n    width: 3.2rem;\r\n    background-color: $primary;\r\n    margin-bottom: 3.2rem;\r\n    padding: 1.6rem;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  &__feature-title {\r\n    font-size: 2.4rem;\r\n    color: $twine-4;\r\n    font-weight: 700;\r\n    margin-bottom: 1.6rem;\r\n  }\r\n\r\n  &__feature-text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n  }\r\n}\r\n\r\n// cta section\r\n.cta {\r\n  padding: 4.8rem 0 12.8rem;\r\n\r\n  &__inner {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);\r\n    border-radius: 11px;\r\n    background-image: linear-gradient(to right bottom, rgba($primary, 0.8), $primary);\r\n    overflow: hidden;\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: 3fr 2fr;\r\n    }\r\n\r\n    @media (max-width: 34em) {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n\r\n  &__text-container {\r\n    padding: 4.8rem 6.4rem 6.4rem 6.4rem;\r\n\r\n    @media (max-width: 34em) {\r\n      padding: 3.2rem;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    color: inherit;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__text {\r\n    font-size: 1.8rem;\r\n    line-height: 1.8;\r\n    margin-bottom: 4.8rem;\r\n  }\r\n\r\n  &__form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    column-gap: 3.2rem;\r\n    row-gap: 2.4rem;\r\n\r\n    @media (max-width: 59em) {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n\r\n  &__form-label {\r\n    display: block;\r\n    font-size: 1.6rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1.2rem;\r\n  }\r\n\r\n  &__form-input {\r\n    width: 100%;\r\n    padding: 1.2rem;\r\n    font-size: 1.8rem;\r\n    font-family: inherit;\r\n    color: inherit;\r\n    border: none;\r\n    background-color: $twine-1;\r\n    border-radius: 9px;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n\r\n    &:focus {\r\n      outline: none;\r\n      box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);\r\n    }\r\n\r\n    &::placeholder {\r\n      color: $light-gray-2;\r\n    }\r\n  }\r\n\r\n  &__form-btn {\r\n    margin-top: 1.2rem;\r\n  }\r\n\r\n  &__img-container {\r\n    background-image: linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('./assets/eating.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    @media (max-width: 34em) {\r\n      height: 32rem;\r\n      grid-row: 1;\r\n    }\r\n  }\r\n}\r\n\r\n// footer section\r\n.footer {\r\n  padding: 12.8rem 0;\r\n  border-top: 1px solid $twine-2;\r\n\r\n  &__inner {\r\n    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;\r\n\r\n    @media (max-width: 44em) {\r\n      grid-template-columns: repeat(6, 1fr);\r\n    }\r\n  }\r\n\r\n  &__nav {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n\r\n    @media (max-width: 44em) {\r\n      grid-row: 1;\r\n      grid-column: span 2;\r\n      margin-bottom: 3.2rem;\r\n    }\r\n\r\n    &--logo {\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      @media (max-width: 44em) {\r\n        grid-column: span 3;\r\n        grid-row: 2;\r\n      }\r\n    }\r\n\r\n    &--address {\r\n      @media (max-width: 44em) {\r\n        grid-column: span 3;\r\n        grid-row: 2;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__nav-heading {\r\n    font-size: 1.8rem;\r\n    font-weight: 500;\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n  &__nav-items {\r\n    list-style: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__nav-contacts {\r\n    font-style: normal;\r\n    font-size: 1.6rem;\r\n    line-height: 1.6;\r\n  }\r\n\r\n  &__nav-address {\r\n    margin-bottom: 2.4rem;\r\n    color: $light-gray-2;\r\n  }\r\n\r\n  &__link {\r\n    text-decoration: none;\r\n    font-size: 1.6rem;\r\n    color: $light-gray-2;\r\n    transition: all 0.3s;\r\n\r\n    &:hover {\r\n      color: $twine-2;\r\n    }\r\n  }\r\n\r\n  &__logo-link {\r\n    display: block;\r\n    margin-bottom: 3.2rem;\r\n  }\r\n\r\n  &__logo {\r\n    height: 2.2rem;\r\n  }\r\n\r\n  &__social-links {\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__social-icon {\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 2.4rem;\r\n  }\r\n\r\n  &__copyright {\r\n    font-size: 1.4rem;\r\n    line-height: 1.6;\r\n    color: $light-gray-2;\r\n    margin-top: auto;\r\n  }\r\n}\r\n\r\n.sticky {\r\n  & .header {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 8rem;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.97);\r\n    z-index: 999;\r\n    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);\r\n  }\r\n\r\n  & .hero {\r\n    margin-top: 9.6rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_profile_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/profile-1.jpg */ "./src/assets/profile-1.jpg");
/* harmony import */ var _assets_profile_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/profile-2.jpg */ "./src/assets/profile-2.jpg");
/* harmony import */ var _assets_profile_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/profile-3.jpg */ "./src/assets/profile-3.jpg");
/* harmony import */ var _assets_profile_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/profile-4.jpg */ "./src/assets/profile-4.jpg");
/* harmony import */ var _assets_profile_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/profile-5.jpg */ "./src/assets/profile-5.jpg");
/* harmony import */ var _assets_profile_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/profile-6.jpg */ "./src/assets/profile-6.jpg");
/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/hero.png */ "./src/assets/hero.png");
/* harmony import */ var _assets_hero_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/hero.webp */ "./src/assets/hero.webp");
/* harmony import */ var _assets_hero_min_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/hero-min.png */ "./src/assets/hero-min.png");
/* harmony import */ var _assets_featured_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/featured-1.png */ "./src/assets/featured-1.png");
/* harmony import */ var _assets_featured_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/featured-2.png */ "./src/assets/featured-2.png");
/* harmony import */ var _assets_featured_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/featured-3.png */ "./src/assets/featured-3.png");
/* harmony import */ var _assets_featured_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/featured-4.png */ "./src/assets/featured-4.png");
/* harmony import */ var _assets_featured_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/featured-5.png */ "./src/assets/featured-5.png");
/* harmony import */ var _assets_app_1_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/app-1.png */ "./src/assets/app-1.png");
/* harmony import */ var _assets_app_2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/app-2.png */ "./src/assets/app-2.png");
/* harmony import */ var _assets_app_3_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/app-3.png */ "./src/assets/app-3.png");
/* harmony import */ var _assets_meal_1_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/meal-1.jpg */ "./src/assets/meal-1.jpg");
/* harmony import */ var _assets_meal_2_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/meal-2.jpg */ "./src/assets/meal-2.jpg");
/* harmony import */ var _assets_testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/testimonial-1.jpg */ "./src/assets/testimonial-1.jpg");
/* harmony import */ var _assets_testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/testimonial-2.jpg */ "./src/assets/testimonial-2.jpg");
/* harmony import */ var _assets_testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/testimonial-3.jpg */ "./src/assets/testimonial-3.jpg");
/* harmony import */ var _assets_testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/testimonial-4.jpg */ "./src/assets/testimonial-4.jpg");
/* harmony import */ var _assets_testimonials_gallery_1_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/testimonials-gallery-1.jpg */ "./src/assets/testimonials-gallery-1.jpg");
/* harmony import */ var _assets_testimonials_gallery_2_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/testimonials-gallery-2.jpg */ "./src/assets/testimonials-gallery-2.jpg");
/* harmony import */ var _assets_testimonials_gallery_3_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/testimonials-gallery-3.jpg */ "./src/assets/testimonials-gallery-3.jpg");
/* harmony import */ var _assets_testimonials_gallery_4_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/testimonials-gallery-4.jpg */ "./src/assets/testimonials-gallery-4.jpg");
/* harmony import */ var _assets_testimonials_gallery_5_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/testimonials-gallery-5.jpg */ "./src/assets/testimonials-gallery-5.jpg");
/* harmony import */ var _assets_testimonials_gallery_6_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/testimonials-gallery-6.jpg */ "./src/assets/testimonials-gallery-6.jpg");
/* harmony import */ var _assets_testimonials_gallery_7_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/testimonials-gallery-7.jpg */ "./src/assets/testimonials-gallery-7.jpg");
/* harmony import */ var _assets_testimonials_gallery_8_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/testimonials-gallery-8.jpg */ "./src/assets/testimonials-gallery-8.jpg");
/* harmony import */ var _assets_testimonials_gallery_9_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/testimonials-gallery-9.jpg */ "./src/assets/testimonials-gallery-9.jpg");
/* harmony import */ var _assets_testimonials_gallery_10_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/testimonials-gallery-10.jpg */ "./src/assets/testimonials-gallery-10.jpg");
/* harmony import */ var _assets_testimonials_gallery_11_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/testimonials-gallery-11.jpg */ "./src/assets/testimonials-gallery-11.jpg");
/* harmony import */ var _assets_testimonials_gallery_12_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/testimonials-gallery-12.jpg */ "./src/assets/testimonials-gallery-12.jpg");
/* harmony import */ var _assets_eating_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assets/eating.jpg */ "./src/assets/eating.jpg");
/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/navbar.js */ "./src/modules/navbar.js");
/* harmony import */ var _modules_linksHelper_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/linksHelper.js */ "./src/modules/linksHelper.js");
/* harmony import */ var _modules_stickyNav_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/stickyNav.js */ "./src/modules/stickyNav.js");










































(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_39__["default"])();
(0,_modules_linksHelper_js__WEBPACK_IMPORTED_MODULE_40__["default"])();
(0,_modules_stickyNav_js__WEBPACK_IMPORTED_MODULE_41__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxhQUFhLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsYUFBYSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxVQUFVLGFBQWEsYUFBYSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FB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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNTO0FBQ0g7QUFDSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTDtBQUNDO0FBQ0c7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0w7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ1M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBQ2pCO0FBRVk7QUFDVTtBQUNKO0FBRS9DRiwrREFBTSxFQUFFO0FBQ1JuQixvRUFBVyxFQUFFO0FBQ2JxQixrRUFBUyxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9zcmMvbW9kdWxlcy9saW5rc0hlbHBlci5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9zcmMvbW9kdWxlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vc3JjL21vZHVsZXMvc3RpY2t5TmF2LmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL3NyYy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL3NyYy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YXJlZ2Zvb2Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dhcmVnZm9vZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2FyZWdmb29kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFsbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYTpsaW5rJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5cbmNvbnN0IGxpbmtzSGVscGVyID0gKCkgPT4ge1xuICBhbGxMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgaWYgKGhyZWYgPT09ICcjJykge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaHJlZiAhPT0gJyMnICYmIGhyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKTtcbiAgICAgICAgc2VjdGlvbkVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19uYXYtbGluaycpKSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaW5rc0hlbHBlcjtcbiIsImNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1idG4nKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgbmF2QmFyID0gKCkgPT4ge1xuICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tb3BlbicpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhcjtcbiIsImNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcblxuY29uc3Qgc3RpY2t5TmF2ID0gKCkgPT4ge1xuICBjb25zdCBvYnMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGNvbnN0IGVudCA9IGVudHJpZXNbMF07XG4gICAgICBpZiAoZW50LmlzSW50ZXJzZWN0aW5nID09PSBmYWxzZSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xuICAgICAgfVxuICAgICAgaWYgKGVudC5pc0ludGVyc2VjdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgIHJvb3RNYXJnaW46ICctODBweCcsXG4gICAgfSxcbiAgKTtcbiAgb2JzLm9ic2VydmUoaGVyb1NlY3Rpb24pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHN0aWNreU5hdjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9lYXRpbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxucTo6YmVmb3JlLFxcbnE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIC8qIDEwcHggLyAxNnB4ID0gMC42MjUgPSA2Mi41JSAqL1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU2LjI1JTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmgxLFxcbi50aXRsZS0tcHJpbWFyeSxcXG5oMixcXG4udGl0bGUtLXNlY29uZGFyeSxcXG5oMyxcXG4udGl0bGUtLXRlcnRpYXJ5LFxcbmg0LFxcbmg1IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxuICBjb2xvcjogIzE1MTAxMDtcXG59XFxuXFxuaDEsXFxuLnRpdGxlLS1wcmltYXJ5IHtcXG4gIGZvbnQtc2l6ZTogNS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcblxcbmgyLFxcbi50aXRsZS0tc2Vjb25kYXJ5IHtcXG4gIGZvbnQtc2l6ZTogNC40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIG1hcmdpbi1ib3R0b206IDkuNnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGgyLFxcbiAgLnRpdGxlLS1zZWNvbmRhcnkge1xcbiAgICBmb250LXNpemU6IDMuNnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIGgyLFxcbiAgLnRpdGxlLS1zZWNvbmRhcnkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxuICB9XFxufVxcblxcbmgzLFxcbi50aXRsZS0tdGVydGlhcnkge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGgzLFxcbiAgLnRpdGxlLS10ZXJ0aWFyeSB7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgfVxcbn1cXG5cXG5oNCxcXG4udGl0bGUtLXN1YiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2VmNTgxNDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcbn1cXG5cXG4ubWFyZ2luX19yaWdodC0tc21hbGwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjZyZW0gIWltcG9ydGFudDtcXG59XFxuLm1hcmdpbl9fYm90dG9tLS1tZCB7XFxuICBtYXJnaW4tYm90dG9tOiA0LjhyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBjb2x1bW4tZ2FwOiA2LjRyZW07XFxuICByb3ctZ2FwOiA5LjZyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICAuZ3JpZCB7XFxuICAgIGNvbHVtbi1nYXA6IDQuOHJlbTtcXG4gICAgcm93LWdhcDogNi40cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmdyaWQge1xcbiAgICByb3ctZ2FwOiA0LjhyZW07XFxuICB9XFxufVxcbi5ncmlkOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmdyaWQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA5LjZyZW07XFxufVxcbi5ncmlkX19jb2xzLS0yIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuZ3JpZF9fY29scy0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4uZ3JpZF9fY29scy0tMyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLmdyaWRfX2NvbHMtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmdyaWRfX2NvbHMtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLmdyaWRfX2NvbHMtLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5ncmlkX19jb2xzLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ncmlkX19jb2xzLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5ncmlkX19jb2xzLS01IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5ncmlkLS12ZXJ0aWNhbC1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4ubGluazpob3ZlciwgLmxpbms6YWN0aXZlIHtcXG4gIGNvbG9yOiAjYzM5NTU2O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5idG4ge1xcbiAgICBwYWRkaW5nOiAyLjRyZW0gMS42cmVtO1xcbiAgfVxcbn1cXG4uYnRuLS1maWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU4MTQ7XFxuICBjb2xvcjogI2Y5ZjhmODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZjU4MTQ7XFxufVxcbi5idG4tLWZpbGw6aG92ZXIsIC5idG4tLWZpbGw6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcXG59XFxuLmJ0bi0tb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGY4O1xcbiAgY29sb3I6ICMxNTEwMTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmRmMmU5O1xcbn1cXG4uYnRuLS1vdXRsaW5lOmFjdGl2ZSwgLmJ0bi0tb3V0bGluZTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggI2Y5ZjhmODtcXG4gIGJvcmRlci1jb2xvcjogIzE1MTAxMDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjZyZW07XFxufVxcbi5saXN0X19pdGVtIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcbi5saXN0X19pY29uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxufVxcblxcbi50YWdzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNHJlbTtcXG59XFxuLnRhZ3MgLnRhZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMxNTEwMTA7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi50YWdzIC50YWctLXZlZ2V0YXJpYW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxY2Y2NjtcXG59XFxuLnRhZ3MgLnRhZy0tdmVnYW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDgyZDtcXG59XFxuLnRhZ3MgLnRhZy0tcGFsZW8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDQzYjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICBoZWlnaHQ6IDkuNnJlbTtcXG4gIHBhZGRpbmc6IDAgNC44cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgLmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19sb2dvLWltZyB7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZWFkZXJfX25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19uYXYtbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQuOHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIC5oZWFkZXJfX25hdi1saXN0IHtcXG4gICAgZ2FwOiAzLjJyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVhZGVyX19uYXYtbGlzdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNC44cmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19uYXYtbGluazpsaW5rLCAuaGVhZGVyX19uYXYtbGluazp2aXNpdGVkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVhZGVyX19uYXYtbGluazpsaW5rLCAuaGVhZGVyX19uYXYtbGluazp2aXNpdGVkIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19uYXYtbGluazpob3ZlciwgLmhlYWRlcl9fbmF2LWxpbms6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZWY1ODE0O1xcbn1cXG4uaGVhZGVyX19uYXYtaXRlbS1jdGEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmNTgxNDtcXG59XFxuLmhlYWRlcl9fbmF2LWl0ZW0tY3RhOmxpbmssIC5oZWFkZXJfX25hdi1pdGVtLWN0YTp2aXNpdGVkIHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAyLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBjb2xvcjogI2Y5ZjhmODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjU4MTQ7XFxufVxcbi5oZWFkZXJfX25hdi1pdGVtLWN0YTpob3ZlciwgLmhlYWRlcl9fbmF2LWl0ZW0tY3RhOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGY4O1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxufVxcbi5oZWFkZXJfX25hdi1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVhZGVyX19uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxufVxcbi5oZWFkZXJfX25hdi1pY29uIHtcXG4gIGhlaWdodDogNC44cmVtO1xcbiAgd2lkdGg6IDQuOHJlbTtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbn1cXG4uaGVhZGVyX19uYXYtaWNvbltuYW1lPWNsb3NlLW91dGxpbmVdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuaGVhZGVyLS1vcGVuIC5oZWFkZXJfX25hdiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbi5oZWFkZXItLW9wZW4gLmhlYWRlcl9fbmF2LWljb25bbmFtZT1jbG9zZS1vdXRsaW5lXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmhlYWRlci0tb3BlbiAuaGVhZGVyX19uYXYtaWNvbltuYW1lPW1lbnUtb3V0bGluZV0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDkuNnJlbSAwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmhlcm8ge1xcbiAgICBwYWRkaW5nOiAyLjRyZW0gMCA2LjRyZW0gMDtcXG4gIH1cXG59XFxuLmhlcm9fX2lubmVyIHtcXG4gIG1heC13aWR0aDogMTMwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDMuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDkuNnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NGVtKSB7XFxuICAuaGVyb19faW5uZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyMHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIC5oZXJvX19pbm5lciB7XFxuICAgIGdhcDogNC44cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlcm9fX2lubmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDAgOHJlbTtcXG4gICAgZ2FwOiA2LjRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuaGVyb19faW5uZXIge1xcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5oZXJvX19jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbi5oZXJvX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxufVxcbi5oZXJvX19kZWxpdmVyZWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjZyZW07XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlcm9fX2RlbGl2ZXJlZC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMy4ycmVtO1xcbiAgfVxcbn1cXG4uaGVyb19fZGVsaXZlcmVkLWltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGVyb19fZGVsaXZlcmVkLWltYWdlIHtcXG4gIGhlaWdodDogNC44cmVtO1xcbiAgd2lkdGg6IDQuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogLTEuNnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZGYyZTk7XFxufVxcbi5oZXJvX19kZWxpdmVyZWQtaW1hZ2U6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5oZXJvX19kZWxpdmVyZWQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzE1MTAxMDtcXG59XFxuLmhlcm9fX2RlbGl2ZXJlZC10ZXh0IHNwYW4ge1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlcm9fX2ltYWdlLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLmhlcm9fX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhlcm9fX2ltYWdlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5oZXJvX19pbWFnZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcblxcbi5mZWF0dXJlZCB7XFxuICBwYWRkaW5nOiA0LjhyZW0gMCAzLjJyZW0gMDtcXG59XFxuLmZlYXR1cmVkX190aXRsZSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbn1cXG4uZmVhdHVyZWRfX2ltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5mZWF0dXJlZF9faW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjJyZW07XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XFxuICBvcGFjaXR5OiA1MCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuZmVhdHVyZWRfX2ltYWdlIHtcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuZmVhdHVyZWRfX2ltYWdlIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICB9XFxufVxcblxcbi5ob3ctd29ya3Mge1xcbiAgcGFkZGluZzogOS42cmVtIDA7XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtbnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogOC42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjYThhN2E3O1xcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLmhvdy13b3Jrc19fc3RlcC1udW1iZXIge1xcbiAgICBmb250LXNpemU6IDcuNHJlbTtcXG4gIH1cXG59XFxuLmhvdy13b3Jrc19fc3RlcC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbn1cXG4uaG93LXdvcmtzX19zdGVwLWltYWdlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi40cmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcbiAgLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXI6bnRoLWNoaWxkKDYpIHtcXG4gICAgZ3JpZC1yb3c6IDU7XFxuICB9XFxufVxcbi5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyOjpiZWZvcmUsIC5ob3ctd29ya3NfX3N0ZXAtaW1hZ2UtY29udGFpbmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZy1ib3R0b206IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICB6LWluZGV4OiAtMjtcXG59XFxuLmhvdy13b3Jrc19fc3RlcC1pbWFnZS1jb250YWluZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiA0NSU7XFxuICBwYWRkaW5nLWJvdHRvbTogNDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5YjVhNTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uaG93LXdvcmtzX19zdGVwLWltYWdlIHtcXG4gIHdpZHRoOiAzNSU7XFxufVxcblxcbi5tZWFscyB7XFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXG59XFxuLm1lYWxzX19pdGVtIHtcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcbi5tZWFsc19faXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMnJlbSk7XFxuICBib3gtc2hhZG93OiAwIDMuMnJlbSA2LjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuLm1lYWxzX19pdGVtLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMy4ycmVtIDQuOHJlbSA0LjhyZW0gNC44cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcbiAgLm1lYWxzX19pdGVtLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyLjRyZW0gMy4ycmVtIDMuMnJlbSAzLjJyZW07XFxuICB9XFxufVxcbi5tZWFsc19faXRlbS10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuLm1lYWxzX19pdGVtLWF0dHJpYnV0ZXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4ubWVhbHNfX2l0ZW0tYXR0cmlidXRlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNnJlbTtcXG59XFxuLm1lYWxzX19pdGVtLWljb24ge1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogMi40cmVtO1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxufVxcbi5tZWFsc19faXRlbS1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAubWVhbHNfX2RpZXRzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcbn1cXG4ubWVhbHNfX2J0bi1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi50ZXN0aW1vbmlhbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU1ZnIgNDVmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAudGVzdGltb25pYWxzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi50ZXN0aW1vbmlhbHNfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDkuNnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIC50ZXN0aW1vbmlhbHNfX2lubmVyIHtcXG4gICAgcGFkZGluZzogOS42cmVtIDMuMnJlbTtcXG4gIH1cXG59XFxuLnRlc3RpbW9uaWFsc19faXRlbXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDQuOHJlbTtcXG4gIGNvbHVtbi1nYXA6IDhyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAudGVzdGltb25pYWxzX19pdGVtcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4udGVzdGltb25pYWxzX19pdGVtLWltZyB7XFxuICB3aWR0aDogNi40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbn1cXG4udGVzdGltb25pYWxzX19pdGVtLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS44O1xcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcbn1cXG4udGVzdGltb25pYWxzX19pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogI2E4YTdhNztcXG59XFxuLnRlc3RpbW9uaWFsc19fZ2FsbGVyeSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMS42cmVtO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODRlbSkge1xcbiAgLnRlc3RpbW9uaWFsc19fZ2FsbGVyeSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAudGVzdGltb25pYWxzX19nYWxsZXJ5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC50ZXN0aW1vbmlhbHNfX2dhbGxlcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBnYXA6IDEuMnJlbTtcXG4gIH1cXG59XFxuLnRlc3RpbW9uaWFsc19fZ2FsbGVyeS1pdGVtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50ZXN0aW1vbmlhbHNfX2dhbGxlcnktaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuLnRlc3RpbW9uaWFsc19fZ2FsbGVyeS1pbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJpY2luZyB7XFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXG59XFxuLnByaWNpbmdfX3BsYW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAucHJpY2luZ19fcGxhbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4ucHJpY2luZ19fcGxhbi0tc3RhcnRlciB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZGYyZTk7XFxuICBwYWRkaW5nOiA0LjZyZW07XFxufVxcbi5wcmljaW5nX19wbGFuLS1jb21wbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcbiAgcGFkZGluZzogNC44cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByaWNpbmdfX3BsYW4tLWNvbXBsZXRlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiQmVzdCB2YWx1ZVxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYlO1xcbiAgcmlnaHQ6IC0xOCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNDNiO1xcbiAgcGFkZGluZzogMC44cmVtIDhyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5wcmljaW5nX19wbGFuLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxufVxcbi5wcmljaW5nX19wbGFuLW5hbWUge1xcbiAgY29sb3I6ICNlZjU4MTQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbi5wcmljaW5nX19wbGFuLXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogNi4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMTUxMDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcbn1cXG4ucHJpY2luZ19fcGxhbi1wcmljZSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnByaWNpbmdfX3BsYW4tdGV4dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBjb2xvcjogI2E4YTdhNztcXG59XFxuLnByaWNpbmdfX3BsYW4tc2luZy11cCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0LjhyZW07XFxufVxcbi5wcmljaW5nX19wbGFuLWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucHJpY2luZ19fZmVhdHVyZS1pY29uIHtcXG4gIGNvbG9yOiAjZjlmOGY4O1xcbiAgaGVpZ2h0OiAzLjJyZW07XFxuICB3aWR0aDogMy4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTgxNDtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnByaWNpbmdfX2ZlYXR1cmUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBjb2xvcjogIzVkM2UzMjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxufVxcbi5wcmljaW5nX19mZWF0dXJlLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG5cXG4uY3RhIHtcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDEyLjhyZW07XFxufVxcbi5jdGFfX2lubmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCByZ2JhKDIzOSwgODgsIDIwLCAwLjgpLCAjZWY1ODE0KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxuICAuY3RhX19pbm5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5jdGFfX2lubmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5jdGFfX3RleHQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDQuOHJlbSA2LjRyZW0gNi40cmVtIDYuNHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXG4gIC5jdGFfX3RleHQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMy4ycmVtO1xcbiAgfVxcbn1cXG4uY3RhX190aXRsZSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuLmN0YV9fdGV4dCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxufVxcbi5jdGFfX2Zvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDMuMnJlbTtcXG4gIHJvdy1nYXA6IDIuNHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXG4gIC5jdGFfX2Zvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLmN0YV9fZm9ybS1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXG59XFxuLmN0YV9fZm9ybS1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4uY3RhX19mb3JtLWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjhyZW0gcmdiYSgyNTMsIDI0MiwgMjMzLCAwLjUpO1xcbn1cXG4uY3RhX19mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2E4YTdhNztcXG59XFxuLmN0YV9fZm9ybS1idG4ge1xcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xcbn1cXG4uY3RhX19pbWctY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoMjM1LCAxNTEsIDc4LCAwLjM1KSwgcmdiYSgyMzAsIDEyNSwgMzQsIDAuMzUpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxuICAuY3RhX19pbWctY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzMnJlbTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMTIuOHJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWI1YTU7XFxufVxcbi5mb290ZXJfX2lubmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMS41ZnIgMWZyIDFmciAxZnI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxuICAuZm9vdGVyX19pbm5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICB9XFxufVxcbi5mb290ZXJfX25hdiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuNHJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5mb290ZXJfX25hdiB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuICB9XFxufVxcbi5mb290ZXJfX25hdi0tbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXG4gIC5mb290ZXJfX25hdi0tbG9nbyB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDRlbSkge1xcbiAgLmZvb3Rlcl9fbmF2LS1hZGRyZXNzIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICB9XFxufVxcbi5mb290ZXJfX25hdi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcbi5mb290ZXJfX25hdi1pdGVtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuNHJlbTtcXG59XFxuLmZvb3Rlcl9fbmF2LWNvbnRhY3RzIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuLmZvb3Rlcl9fbmF2LWFkZHJlc3Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcbiAgY29sb3I6ICNhOGE3YTc7XFxufVxcbi5mb290ZXJfX2xpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogI2E4YTdhNztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uZm9vdGVyX19saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjZDliNWE1O1xcbn1cXG4uZm9vdGVyX19sb2dvLWxpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbi5mb290ZXJfX2xvZ28ge1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxufVxcbi5mb290ZXJfX3NvY2lhbC1saW5rcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMi40cmVtO1xcbn1cXG4uZm9vdGVyX19zb2NpYWwtaWNvbiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMi40cmVtO1xcbn1cXG4uZm9vdGVyX19jb3B5cmlnaHQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgY29sb3I6ICNhOGE3YTc7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc3RpY2t5IC5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGJveC1zaGFkb3c6IDAgMS4ycmVtIDMuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbn1cXG4uc3RpY2t5IC5oZXJvIHtcXG4gIG1hcmdpbi10b3A6IDkuNnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBLGdEQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0UsY0FBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtBQUNGOztBQUVBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFtQkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBaEJGOztBQW1CQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWhCRjtBQWtCRTtFQUxGO0lBTUksaUJBQUE7RUFmRjtBQUNGO0FBaUJFO0VBVEY7SUFVSSxjQUFBO0VBZEY7QUFDRjs7QUFpQkE7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBdENZO0VBdUNaLGtCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsbUJBQUE7QUFkRjs7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R007RUFKRjtJQUtJLG1CQUFBO0lBQ0EsV0FBQTtFQWpHTjtBQUNGO0FBcUdNO0VBREY7SUFFSSxtQkFBQTtJQUNBLFdBQUE7RUFsR047QUFDRjtBQXNHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXBHSjtBQXVHRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXJHSjtBQXdHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXRHSjtBQXlHRTtFQUNFLHFCQUFBO0VBQ0EsY0F6aUNXO0FBazhCZjtBQTBHRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQS9pQ1c7RUFnakNYLG9CQUFBO0FBeEdKO0FBMEdJO0VBQ0UsY0FoakNJO0FBdzhCVjtBQTRHRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQTFHSjtBQTZHRTtFQUNFLGNBQUE7QUEzR0o7QUE4R0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBNUdKO0FBK0dFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQTdHSjtBQWdIRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQS9rQ1c7RUFnbENYLGdCQUFBO0FBOUdKOztBQW1IRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFoSEo7QUFtSEU7RUFDRSxrQkFBQTtBQWpISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyByZXNldCBjc3NcXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxuYXBwbGV0LFxcclxcbm9iamVjdCxcXHJcXG5pZnJhbWUsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxucCxcXHJcXG5ibG9ja3F1b3RlLFxcclxcbnByZSxcXHJcXG5hLFxcclxcbmFiYnIsXFxyXFxuYWNyb255bSxcXHJcXG5hZGRyZXNzLFxcclxcbmJpZyxcXHJcXG5jaXRlLFxcclxcbmNvZGUsXFxyXFxuZGVsLFxcclxcbmRmbixcXHJcXG5lbSxcXHJcXG5pbWcsXFxyXFxuaW5zLFxcclxcbmtiZCxcXHJcXG5xLFxcclxcbnMsXFxyXFxuc2FtcCxcXHJcXG5zbWFsbCxcXHJcXG5zdHJpa2UsXFxyXFxuc3Ryb25nLFxcclxcbnN1YixcXHJcXG5zdXAsXFxyXFxudHQsXFxyXFxudmFyLFxcclxcbmIsXFxyXFxudSxcXHJcXG5pLFxcclxcbmNlbnRlcixcXHJcXG5kbCxcXHJcXG5kdCxcXHJcXG5kZCxcXHJcXG5vbCxcXHJcXG51bCxcXHJcXG5saSxcXHJcXG5maWVsZHNldCxcXHJcXG5mb3JtLFxcclxcbmxhYmVsLFxcclxcbmxlZ2VuZCxcXHJcXG50YWJsZSxcXHJcXG5jYXB0aW9uLFxcclxcbnRib2R5LFxcclxcbnRmb290LFxcclxcbnRoZWFkLFxcclxcbnRyLFxcclxcbnRoLFxcclxcbnRkLFxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuY2FudmFzLFxcclxcbmRldGFpbHMsXFxyXFxuZW1iZWQsXFxyXFxuZmlndXJlLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxub3V0cHV0LFxcclxcbnJ1YnksXFxyXFxuc2VjdGlvbixcXHJcXG5zdW1tYXJ5LFxcclxcbnRpbWUsXFxyXFxubWFyayxcXHJcXG5hdWRpbyxcXHJcXG52aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSxcXHJcXG5hc2lkZSxcXHJcXG5kZXRhaWxzLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZmlndXJlLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbnNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsXFxyXFxucSB7XFxyXFxuICBxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6OmJlZm9yZSxcXHJcXG5ibG9ja3F1b3RlOjphZnRlcixcXHJcXG5xOjpiZWZvcmUsXFxyXFxucTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8vIGNvbG9yc1xcclxcbiRsaWdodC1ncmF5LTE6ICNmOWY4Zjg7XFxyXFxuJGxpZ2h0LWdyYXktMjogI2E4YTdhNztcXHJcXG4kZGFyay1ncmF5LTE6ICMxNTEwMTA7XFxyXFxuJHR3aW5lLTE6ICNmZGYyZTk7XFxyXFxuJHR3aW5lLTI6ICNkOWI1YTU7XFxyXFxuJHR3aW5lLTM6ICNjMzk1NTY7XFxyXFxuJHR3aW5lLTQ6ICM1ZDNlMzI7XFxyXFxuJHNlY29uZGFyeTogI2M0MjkxNDtcXHJcXG4kcHJpbWFyeTogI2VmNTgxNDtcXHJcXG4kdmVnZXRhcmlhbjogIzUxY2Y2NjtcXHJcXG4kdmVnYW46ICM5NGQ4MmQ7XFxyXFxuJHBhbGVvOiAjZmZkNDNiO1xcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vIGJhc2Ugc3R5bGVzXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAvKiAxMHB4IC8gMTZweCA9IDAuNjI1ID0gNjIuNSUgKi9cXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICBmb250LXNpemU6IDU2LjI1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG4udGl0bGUtLXByaW1hcnksXFxyXFxuaDIsXFxyXFxuLnRpdGxlLS1zZWNvbmRhcnksXFxyXFxuaDMsXFxyXFxuLnRpdGxlLS10ZXJ0aWFyeSxcXHJcXG5oNCxcXHJcXG5oNSB7XFxyXFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcclxcbiAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuLnRpdGxlLS1wcmltYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogNS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxufVxcclxcblxcclxcbmgyLFxcclxcbi50aXRsZS0tc2Vjb25kYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogNC40cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDkuNnJlbTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oMyxcXHJcXG4udGl0bGUtLXRlcnRpYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaDQsXFxyXFxuLnRpdGxlLS1zdWIge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4ge1xcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgICAmLS1zbWFsbCB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjZyZW0gIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYm90dG9tIHtcXHJcXG4gICAgJi0tbWQge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDQuOHJlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxyXFxuICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgY29sdW1uLWdhcDogNi40cmVtO1xcclxcbiAgcm93LWdhcDogOS42cmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgY29sdW1uLWdhcDogNC44cmVtO1xcclxcbiAgICByb3ctZ2FwOiA2LjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICByb3ctZ2FwOiA0LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY29scyB7XFxyXFxuICAgICYtLTIge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS0zIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLTQge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0ZW0pIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tNSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tdmVydGljYWwtY2VudGVyIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG5cXHJcXG4gICY6aG92ZXIsXFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiAkdHdpbmUtMztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBidXR0b24gc3R5bGVzXFxyXFxuLmJ0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICBwYWRkaW5nOiAyLjRyZW0gMS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi0tZmlsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi0tb3V0bGluZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0d2luZS0xO1xcclxcblxcclxcbiAgICAmOmFjdGl2ZSxcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICRsaWdodC1ncmF5LTE7XFxyXFxuICAgICAgYm9yZGVyLWNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjZyZW07XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhZ3Mge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcblxcclxcbiAgJiAudGFnIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFxyXFxuICAgICYtLXZlZ2V0YXJpYW4ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZWdldGFyaWFuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXZlZ2FuIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVnYW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tcGFsZW8ge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWxlbztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBoZWFkZXJcXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTE7XFxyXFxuICBoZWlnaHQ6IDkuNnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgNC44cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgcGFkZGluZzogMCAzLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sb2dvLWltZyB7XFxyXFxuICAgIGhlaWdodDogMi4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2IHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMTtcXHJcXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA0LjhyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxyXFxuICAgICAgZ2FwOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogNC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtbGluayB7XFxyXFxuICAgICY6bGluayxcXHJcXG4gICAgJjp2aXNpdGVkIHtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtaXRlbS1jdGEge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcXHJcXG5cXHJcXG4gICAgJjpsaW5rLFxcclxcbiAgICAmOnZpc2l0ZWQge1xcclxcbiAgICAgIHBhZGRpbmc6IDEuMnJlbSAyLjRyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheS0xO1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWJ0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hdi1pY29uIHtcXHJcXG4gICAgaGVpZ2h0OiA0LjhyZW07XFxyXFxuICAgIHdpZHRoOiA0LjhyZW07XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuXFxyXFxuICAgICZbbmFtZT0nY2xvc2Utb3V0bGluZSddIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLS1vcGVuIHtcXHJcXG4gICAgJiAuaGVhZGVyX19uYXYge1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIC5oZWFkZXJfX25hdi1pY29uW25hbWU9J2Nsb3NlLW91dGxpbmUnXSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiAuaGVhZGVyX19uYXYtaWNvbltuYW1lPSdtZW51LW91dGxpbmUnXSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBoZXJvIHNlY3Rpb25cXHJcXG4uaGVybyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbiAgcGFkZGluZzogNC44cmVtIDAgOS42cmVtIDA7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICBwYWRkaW5nOiAyLjRyZW0gMCA2LjRyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2lubmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMzByZW07XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDkuNnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0ZW0pIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEyMHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcclxcbiAgICAgIGdhcDogNC44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgcGFkZGluZzogMCA4cmVtO1xcclxcbiAgICAgIGdhcDogNi40cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogMCAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kZWxpdmVyZWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDhyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kZWxpdmVyZWQtaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RlbGl2ZXJlZC1pbWFnZSB7XFxyXFxuICAgIGhlaWdodDogNC44cmVtO1xcclxcbiAgICB3aWR0aDogNC44cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLTEuNnJlbTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZkZjJlOTtcXHJcXG5cXHJcXG4gICAgJjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RlbGl2ZXJlZC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuXFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGZlYXR1cmVkIHNlY3Rpb25cXHJcXG4uZmVhdHVyZWQge1xcclxcbiAgcGFkZGluZzogNC44cmVtIDAgMy4ycmVtIDA7XFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWFnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAzLjJyZW07XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKTtcXHJcXG4gICAgb3BhY2l0eTogNTAlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgaGVpZ2h0OiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gaG93IHdvcmtzIHNlY3Rpb25cXHJcXG4uaG93LXdvcmtzIHtcXHJcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcclxcblxcclxcbiAgJl9fc3RlcC1udW1iZXIge1xcclxcbiAgICBmb250LXNpemU6IDguNnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDcuNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc3RlcC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zdGVwLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNHJlbSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpudGgtY2hpbGQoNikge1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgICBncmlkLXJvdzogNTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2MCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTE7XFxyXFxuICAgICAgei1pbmRleDogLTI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIHdpZHRoOiA0NSU7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDQ1JTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMjtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc3RlcC1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIG1lYWxzIHNlY3Rpb25cXHJcXG4ubWVhbHMge1xcclxcbiAgcGFkZGluZzogOS42cmVtIDA7XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjJyZW0pO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgMy4ycmVtIDYuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAzLjJyZW0gNC44cmVtIDQuOHJlbSA0LjhyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogMi40cmVtIDMuMnJlbSAzLjJyZW0gMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICAgIGNvbG9yOiAkZGFyay1ncmF5LTE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0tYXR0cmlidXRlcyB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0tYXR0cmlidXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS1pY29uIHtcXHJcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIHdpZHRoOiAyLjRyZW07XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0taW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kaWV0cyB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXHJcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHR3aW5lLTE7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NWZyIDQ1ZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDkuNnJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXHJcXG4gICAgICBwYWRkaW5nOiA5LjZyZW0gMy4ycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgcm93LWdhcDogNC44cmVtO1xcclxcbiAgICBjb2x1bW4tZ2FwOiA4cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtLWltZyB7XFxyXFxuICAgIHdpZHRoOiA2LjRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2l0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2dhbGxlcnkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDEuNnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS42cmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODRlbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNGVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gICAgICBnYXA6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZ2FsbGVyeS1pdGVtIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2dhbGxlcnktaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIHByaWNpbmcgc2VjdGlvblxcclxcbi5wcmljaW5nIHtcXHJcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcclxcblxcclxcbiAgJl9fcGxhbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tc3RhcnRlciB7XFxyXFxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHR3aW5lLTE7XFxyXFxuICAgICAgcGFkZGluZzogNC42cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLWNvbXBsZXRlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpbmUtMTtcXHJcXG4gICAgICBwYWRkaW5nOiA0LjhyZW07XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJ0Jlc3QgdmFsdWUnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA2JTtcXHJcXG4gICAgICAgIHJpZ2h0OiAtMTglO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGVvO1xcclxcbiAgICAgICAgcGFkZGluZzogMC44cmVtIDhyZW07XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wbGFuLWhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcGxhbi1uYW1lIHtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3BsYW4tcHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDYuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICRkYXJrLWdyYXktMTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcblxcclxcbiAgICAmIHNwYW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wbGFuLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wbGFuLXNpbmctdXAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3BsYW4tZGV0YWlscyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mZWF0dXJlLWljb24ge1xcclxcbiAgICBjb2xvcjogJGxpZ2h0LWdyYXktMTtcXHJcXG4gICAgaGVpZ2h0OiAzLjJyZW07XFxyXFxuICAgIHdpZHRoOiAzLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZmVhdHVyZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgICBjb2xvcjogJHR3aW5lLTQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZlYXR1cmUtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBjdGEgc2VjdGlvblxcclxcbi5jdGEge1xcclxcbiAgcGFkZGluZzogNC44cmVtIDAgMTIuOHJlbTtcXHJcXG5cXHJcXG4gICZfX2lubmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgkcHJpbWFyeSwgMC44KSwgJHByaW1hcnkpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzRlbSkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDQuOHJlbSA2LjRyZW0gNi40cmVtIDYuNHJlbTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBwYWRkaW5nOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMy4ycmVtO1xcclxcbiAgICByb3ctZ2FwOiAyLjRyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Zvcm0tbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Zvcm0taW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0d2luZS0xO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC44cmVtIHJnYmEoMjUzLCAyNDIsIDIzMywgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgY29sb3I6ICRsaWdodC1ncmF5LTI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Zvcm0tYnRuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoMjM1LCAxNTEsIDc4LCAwLjM1KSwgcmdiYSgyMzAsIDEyNSwgMzQsIDAuMzUpKSwgdXJsKCcuL2Fzc2V0cy9lYXRpbmcuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0ZW0pIHtcXHJcXG4gICAgICBoZWlnaHQ6IDMycmVtO1xcclxcbiAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGZvb3RlciBzZWN0aW9uXFxyXFxuLmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAxMi44cmVtIDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHR3aW5lLTI7XFxyXFxuXFxyXFxuICAmX19pbm5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMS41ZnIgMWZyIDFmciAxZnI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyLjRyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tbG9nbyB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLWFkZHJlc3Mge1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NGVtKSB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWl0ZW1zIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXYtY29udGFjdHMge1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2LWFkZHJlc3Mge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICR0d2luZS0yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sb2dvLWxpbmsge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbG9nbyB7XFxyXFxuICAgIGhlaWdodDogMi4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc29jaWFsLWxpbmtzIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zb2NpYWwtaWNvbiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMi40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY29weXJpZ2h0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheS0yO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3RpY2t5IHtcXHJcXG4gICYgLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDhyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEuMnJlbSAzLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjAzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLmhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA5LjZyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcbmltcG9ydCAnLi9hc3NldHMvZmF2aWNvbi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9wcm9maWxlLTIuanBnJztcbmltcG9ydCAnLi9hc3NldHMvcHJvZmlsZS0zLmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Byb2ZpbGUtNC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9wcm9maWxlLTUuanBnJztcbmltcG9ydCAnLi9hc3NldHMvcHJvZmlsZS02LmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2hlcm8ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaGVyby53ZWJwJztcbmltcG9ydCAnLi9hc3NldHMvaGVyby1taW4ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvZmVhdHVyZWQtMS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9mZWF0dXJlZC0yLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ZlYXR1cmVkLTMucG5nJztcbmltcG9ydCAnLi9hc3NldHMvZmVhdHVyZWQtNC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9mZWF0dXJlZC01LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0xLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0yLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2FwcC0zLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL21lYWwtMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9tZWFsLTIuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWwtMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbC0yLmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFsLTMuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWwtNC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xLmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTIuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktMy5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS00LmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTUuanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktNi5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS03LmpwZyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Rlc3RpbW9uaWFscy1nYWxsZXJ5LTguanBnJztcbmltcG9ydCAnLi9hc3NldHMvdGVzdGltb25pYWxzLWdhbGxlcnktOS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMS5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90ZXN0aW1vbmlhbHMtZ2FsbGVyeS0xMi5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9lYXRpbmcuanBnJztcblxuaW1wb3J0IG5hdkJhciBmcm9tICcuL21vZHVsZXMvbmF2YmFyLmpzJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuL21vZHVsZXMvbGlua3NIZWxwZXIuanMnO1xuaW1wb3J0IHN0aWNreU5hdiBmcm9tICcuL21vZHVsZXMvc3RpY2t5TmF2LmpzJztcblxubmF2QmFyKCk7XG5saW5rc0hlbHBlcigpO1xuc3RpY2t5TmF2KCk7XG4iXSwibmFtZXMiOlsiYWxsTGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwibGlua3NIZWxwZXIiLCJmb3JFYWNoIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInN0YXJ0c1dpdGgiLCJzZWN0aW9uRWxlbWVudCIsInNjcm9sbEludG9WaWV3IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGUiLCJuYXZCdG4iLCJuYXZCYXIiLCJoZXJvU2VjdGlvbiIsInN0aWNreU5hdiIsIm9icyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudCIsImlzSW50ZXJzZWN0aW5nIiwiYm9keSIsImFkZCIsInJlbW92ZSIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=