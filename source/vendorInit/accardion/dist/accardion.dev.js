"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accardion = accardion;

function accardion() {
  var accardionAllQuestions = document.querySelectorAll('.faq__list li');

  if (accardionAllQuestions) {
    accardionAllQuestions.forEach(function (question) {
      var aprove = question.querySelector('svg');
      var wrap = question.querySelector('.faq__wrap');
      var answer = question.querySelector('.faq__answer');
      var height = answer.offsetHeight;
      console.log(height, 'height');
      answer.style.marginTop = "-".concat(height) + 'px';
      question.addEventListener('click', function (e) {
        wrap.classList.toggle('active');
        aprove.style.transform = 'rotate(-60deg)';
        answer.style.marginTop = '0px'; // answer.style.marginBottom = `-${height}` + 'px';

        console.log(height, 'height++');

        if (!e.currentTarget.classList.contains('active')) {
          aprove.style.transform = 'rotate(0deg)';
          answer.style.marginTop = "-".concat(height) + 'px';
        }
      });
    });
  }
}