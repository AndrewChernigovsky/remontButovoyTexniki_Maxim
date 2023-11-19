function images() {
	let allImages = document.querySelectorAll("picture");
	console.log(allImages, 'allImages');
	let options = {
		rootMargin: "0px 200px 200px 0px",
		threshold: 0.5,
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
					if (image.hasAttribute("srcset")) {
						target.querySelector("img").classList.remove("placeholder");
					}
				});
				observer.unobserve(target)
			}
		});
	}
	allImages.forEach((image) => {
		observer.observe(image);
	});
}

export function observe() {
	images();
	// videos.observerItems();
}


export default observe;
