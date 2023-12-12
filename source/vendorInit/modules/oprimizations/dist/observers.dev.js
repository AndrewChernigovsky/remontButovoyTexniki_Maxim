"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = observe;
exports["default"] = void 0;

function images() {
  var allImages = document.querySelectorAll("picture");

  if (allImages) {
    var callback = function callback(entries) {
      entries.forEach(function (entry) {
        var target = entry.target,
            isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          var source = target.querySelectorAll("source");
          var sourceImage = target.querySelector("img");
          var dataImageSrc = sourceImage.getAttribute("data-src");
          sourceImage.setAttribute("src", dataImageSrc);
          source.forEach(function (image) {
            var datasrc = image.getAttribute("data-src");
            image.setAttribute("srcset", datasrc);
          });
          observer.unobserve(target);
        }
      });
    };

    var options = {
      rootMargin: "0px 0px 200px 0px",
      threshold: 0.2
    };
    var observer = new IntersectionObserver(callback, options);
    allImages.forEach(function (image) {
      observer.observe(image);
    });
  }
}

function servicesItems() {
  var allServices = document.querySelectorAll(".aboutServices-section__list li");
  var allQuestions = document.querySelectorAll(".faq__list .faq__wrap .base-text");

  if (allQuestions || allServices) {
    var callback = function callback(entries) {
      entries.forEach(function (entry) {
        var target = entry.target,
            isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          target.style.opacity = 1;
          target.style.transform = "translateX(0)";
          target.style.transition = "1.2s ease-in-out";
          observer.unobserve(target);
        }
      });
    };

    var options = {
      rootMargin: "0px 0px 0px 220px",
      threshold: 1
    };
    var observer = new IntersectionObserver(callback, options);
    allServices.forEach(function (service) {
      observer.observe(service);
    });
    allQuestions.forEach(function (question) {
      observer.observe(question);
    });
  }
}

function services() {
  var allServices = document.querySelectorAll(".services__item");

  if (allServices) {
    var callback = function callback(entries) {
      entries.forEach(function (entry) {
        var target = entry.target,
            isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          target.style.opacity = 1;
          target.style.transform = "translateY(0)";
          target.style.transition = "0.6s ease-in-out";
          observer.unobserve(target);
        }
      });
    };

    var options = {
      rootMargin: "0px 0px 0px 0px",
      threshold: 1
    };
    var observer = new IntersectionObserver(callback, options);
    allServices.forEach(function (service) {
      observer.observe(service);
    });
  }
}

function aproveQuestions() {
  var allQuestionsSvg = document.querySelectorAll(".faq__list li svg");

  if (allQuestionsSvg) {
    var callback = function callback(entries) {
      entries.forEach(function (entry) {
        var target = entry.target,
            isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          target.style.opacity = 1;
          target.style.transform = "translateY(0)";
          target.style.transform = "rotate(0)";
          target.style.transition = "1.2s ease-in-out";
          observer.unobserve(target);
        }
      });
    };

    var options = {
      rootMargin: "0px 0px 0px 220px",
      threshold: 1
    };
    var observer = new IntersectionObserver(callback, options);
    allQuestionsSvg.forEach(function (svg) {
      observer.observe(svg);
    });
  }
}

function observe() {
  images();
  services();
  servicesItems();
  aproveQuestions();
}

var _default = observe;
exports["default"] = _default;