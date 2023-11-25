function images() {
	let allImages = document.querySelectorAll("picture");
	console.log(allImages, 'allImages');
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
				let wrapperImage = target.parentNode;

				sourceImage.setAttribute("src", dataImageSrc);
				console.log(wrapperImage, 'sdfdsfsdf');
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

export function observe() {
	images();
}


export default observe;
