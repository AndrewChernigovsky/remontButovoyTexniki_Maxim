export function textPrint(element, text) {
	const el = document.querySelector(element)
	if (el) {
		let char = 0;

		function charPlus() {
			el.textContent += text[char];
			char++
			if (char < text.length) {
				setTimeout(charPlus, 100)
			}
		}
		setTimeout(charPlus, 100)
	}
	return;
}
