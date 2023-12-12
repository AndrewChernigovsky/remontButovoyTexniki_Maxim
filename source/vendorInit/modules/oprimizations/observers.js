function images() {
	let allImages = document.querySelectorAll("picture");
	if (allImages) {
		let options = {
			rootMargin: "0px 0px 200px 0px",
			threshold: 0.2,
		}
		let observer = new IntersectionObserver(callback, options);

		function callback(entries) {
			entries.forEach((entry) => {
				const {
					target,
					isIntersecting
				} = entry;


				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					let sourceImage = target.querySelector("img");
					let dataImageSrc = sourceImage.getAttribute("data-src");

					sourceImage.setAttribute("src", dataImageSrc);
					source.forEach((image) => {
						let datasrc = image.getAttribute("data-src");
						image.setAttribute("srcset", datasrc);
					});

					observer.unobserve(target)
				}
			});
		}
		allImages.forEach((image) => {
			observer.observe(image);
		});
	}
}

function servicesItems() {
	let allServices = document.querySelectorAll(".aboutServices-section__list li");
	let allQuestions = document.querySelectorAll(".faq__list .faq__wrap .base-text");


	if (allQuestions || allServices) {
		let options = {
			rootMargin: "0px 0px 0px 220px",
			threshold: 1,
		}
		let observer = new IntersectionObserver(callback, options);

		function callback(entries) {
			entries.forEach((entry) => {
				const {
					target,
					isIntersecting
				} = entry;


				if (isIntersecting) {
					target.style.opacity = 1;
					target.style.transform = "translateX(0)"
					target.style.transition = "1.2s ease-in-out"
					observer.unobserve(target)
				}
			});
		}
		allServices.forEach((service) => {
			observer.observe(service);
		});
		allQuestions.forEach((question) => {
			observer.observe(question);
		});
	}

}

function services() {
	let allServices = document.querySelectorAll(".services__item");
	if (allServices) {

		let options = {
			rootMargin: "0px 0px 0px 0px",
			threshold: 1,
		}
		let observer = new IntersectionObserver(callback, options);

		function callback(entries) {
			entries.forEach((entry) => {
				const {
					target,
					isIntersecting
				} = entry;


				if (isIntersecting) {
					target.style.opacity = 1;
					target.style.transform = "translateY(0)"
					target.style.transition = "0.6s ease-in-out"
					observer.unobserve(target)
				}
			});
		}
		allServices.forEach((service) => {
			observer.observe(service);
		});
	}

}

function aproveQuestions() {
	let allQuestionsSvg = document.querySelectorAll(".faq__list li svg");
	if (allQuestionsSvg) {
		let options = {
			rootMargin: "0px 0px 0px 220px",
			threshold: 1,
		}
		let observer = new IntersectionObserver(callback, options);

		function callback(entries) {
			entries.forEach((entry) => {
				const {
					target,
					isIntersecting
				} = entry;


				if (isIntersecting) {
					target.style.opacity = 1;
					target.style.transform = "translateY(0)"
					target.style.transform = "rotate(0)"
					target.style.transition = "1.2s ease-in-out"
					observer.unobserve(target)
				}
			});
		}

		allQuestionsSvg.forEach((svg) => {
			observer.observe(svg);
		});
	}

}

export function observe() {
	images();
	services();
	servicesItems();
	aproveQuestions()
}

export default observe;
