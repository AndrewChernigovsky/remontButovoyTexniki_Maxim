export function accardion() {
	let accardionAllQuestions = document.querySelectorAll('.faq__list li');
	if (accardionAllQuestions) {
		accardionAllQuestions.forEach((question) => {
			let aprove = question.querySelector('svg');
			let wrap = question.querySelector('.faq__wrap');
			let answer = question.querySelector('.faq__answer');

			let height = answer.offsetHeight;
			console.log(height, 'height');

			answer.style.marginTop = `-${height}` + 'px';


			question.addEventListener('click', (e) => {
				wrap.classList.toggle('active')
				aprove.style.transform = 'rotate(-60deg)';
				answer.style.marginTop = '0px';
				// answer.style.marginBottom = `-${height}` + 'px';
				console.log(height, 'height++');

				if (!e.currentTarget.classList.contains('active')) {
					aprove.style.transform = 'rotate(0deg)';
					answer.style.marginTop = `-${height}` + 'px';
				}
			})
		})
	}

}
