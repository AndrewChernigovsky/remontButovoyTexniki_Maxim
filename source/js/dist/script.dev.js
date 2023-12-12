"use strict";

var _swiperMain = require("../vendorInit/swipers/swiperMain.js");

var _burger = require("../vendorInit/burger/burger.js");

var _optimizations = require("../vendorInit/modules/oprimizations/optimizations.js");

var _validation = require("../vendorInit/modules/validation.js");

var _counter = require("../vendorInit/counter/counter.js");

var _upArrow = require("../vendorInit/up-arrow/up-arrow.js");

var _textPrint = require("../vendorInit/counter/textPrint.js");

var _accardion = require("../vendorInit/accardion/accardion.js");

document.addEventListener("DOMContentLoaded", function () {
  (0, _burger.burger)();
  (0, _swiperMain.init)();
  (0, _optimizations.optimizations)();
  (0, _validation.validation)();
  (0, _textPrint.textPrint)('.main-slider-section  .primary-title', 'Ремонт бытовой техники в Пскове и Псковской области');
  setInterval(function () {
    return (0, _counter.updateCountdown)('counter-block .counter');
  }, 1000);
  (0, _accardion.accardion)();
  (0, _upArrow.arrowUp)();
});