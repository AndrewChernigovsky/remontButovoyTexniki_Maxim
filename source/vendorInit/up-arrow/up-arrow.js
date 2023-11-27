export function arrowUp() {
	let upArrow = document.querySelector('.btn-up')
	let footer = document.querySelector('footer');
	let form = document.querySelector('.form');
	let options = {
		rootMargin: "0px 0px 100px 0px",
		threshold: 0.2,
	}
	let options1 = {
		rootMargin: "0px 0px 0px 0px",
		threshold: 1,
	}
	let observer = new IntersectionObserver(callback, options);
	let observerForm = new IntersectionObserver(callback, options1);

	function callback(entries) {
		entries.forEach((entry) => {
			const {
				target,
				isIntersecting
			} = entry;

			upArrow.addEventListener('click', () => {
				upArrow.classList.remove('active')
				console.log(this, 'this');
			})

			if (isIntersecting) {
				if (upArrow.classList.contains('active')) {
					upArrow.classList.remove('active')
				} else {
					upArrow.classList.add('active')
				}
			}

			if (target === form) {
				upArrow.classList.remove('active')
			}
		});
	}

	observer.observe(footer);
	observerForm.observe(form);
}
