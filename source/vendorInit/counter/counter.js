const counter = document.getElementById('count')
const daysText = counter.querySelector('.days span')
const hoursText = counter.querySelector('.hours span')
const minutesText = counter.querySelector('.minutes span')
const secondsText = counter.querySelector('.seconds span')

// const today = new Date('2022-12-31T00:00:00');
// let hours = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();


// export function setCounter() {
// 	console.log(hours);
// 	console.log(minutes);
// 	console.log(seconds);
// 	let tommorow = new Date(today.getDate() + 1);
// 	hoursText.textContent = tommorow.getHours();
// 	minutesText.textContent = tommorow.getMinutes();
// 	secondsText.textContent = tommorow.getSeconds();
// }
const targetDate = new Date('2023-11-27T00:00:00');

export function updateCountdown() {
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
