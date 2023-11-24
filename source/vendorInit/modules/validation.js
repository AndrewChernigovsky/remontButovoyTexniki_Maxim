const textarea = document.querySelector('#textareaSymbols')
const symbolsTextarea = document.querySelector('#textareaSymbolsMax span')

export function validation() {
	if (textarea) {
		textarea.addEventListener('input', (e) => {
			const target = e.currentTarget;
			const max = target.getAttribute('maxlength');
			const currentLength = target.value.length;
			symbolsTextarea.textContent = ' ' + (max - currentLength)
		})
	}
}
