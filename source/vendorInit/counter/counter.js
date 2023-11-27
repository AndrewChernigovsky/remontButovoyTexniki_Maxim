export function updateCountdown(element) {
	const counter = document.querySelector('.' + element)
	if (counter) {
		const daysText = counter.querySelector('.days span')
		const hoursText = counter.querySelector('.hours span')
		const minutesText = counter.querySelector('.minutes span')
		const secondsText = counter.querySelector('.seconds span')

		const targetDate = new Date('2023-12-12T00:00:00');
		const now = new Date();
		const remainingTime = targetDate - now;

		const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
		const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

		daysText.innerText = days.toString().padStart(2, '0');
		hoursText.innerText = hours.toString().padStart(2, '0');
		minutesText.innerText = minutes.toString().padStart(2, '0');
		secondsText.innerText = seconds.toString().padStart(2, '0');
	}
	return;
}
