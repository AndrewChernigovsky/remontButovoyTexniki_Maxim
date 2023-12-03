let body = document.querySelector('body');
let header = document.querySelector('header');
let button = body.querySelector('#btn-menu');
let burgerNav = document.querySelector('.navigation');
let burgerNaWrapper = document.querySelector('.navigation__wrapper');
let navLinks = body.querySelectorAll('.navigation__list-link');
let classActive = 'js-active-open';
let classNoActive = 'no-js';
let classVisuallyHidden = 'visually-hidden';

export function burger() {
	if (header) {
		header.classList.remove(classNoActive);
	}
	if (button) {
		button.addEventListener("click", function () {
			burgerNav.classList.toggle(classActive);
			// burgerNav.classList.toggle(classNoActive);
			// burgerNaWrapper.classList.toggle(classVisuallyHidden);
		});

		navLinks.forEach((el) => {
			el.addEventListener("click", function () {
				burgerNav.classList.remove(classActive);
				// burgerNav.classList.add(classNoActive);
			});
		});
	}
}
