let body = document.querySelector('body');
let navLinks = body.querySelectorAll('.navigation__list-link');
let menuToggle = document.querySelector('#nav-toggle');

export function burger() {

	if (menuToggle) {
		navLinks.forEach((el) => {
			el.addEventListener("click", function () {
				menuToggle.checked = false;
			});
		});
	}
}
