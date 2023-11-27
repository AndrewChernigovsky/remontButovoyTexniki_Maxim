import {
	init as swiperMainInit
} from '../vendorInit/swipers/swiperMain.js'
import {
	burger
} from "../vendorInit/burger/burger.js";
import {
	optimizations
} from '../vendorInit/modules/oprimizations/optimizations.js';
import {
	validation
}
from '../vendorInit/modules/validation.js';
import {
	updateCountdown
} from '../vendorInit/counter/counter.js';
import {
	arrowUp
} from "../vendorInit/up-arrow/up-arrow.js";
import {
	textPrint
}
from "../vendorInit/counter/textPrint.js";

document.addEventListener("DOMContentLoaded", function () {
	burger()
	swiperMainInit()
	optimizations()
	validation()
	textPrint('.main-slider-section  .primary-title', 'Ремонт бытовой техники в Пскове и Псковской области')
	setInterval(() => updateCountdown('counter'), 1000);
	arrowUp()
})

// window.onload = () => {
// 	burger()
// 	swiperMainInit()
// 	// arrowUp
// 	optimizations()
// 	validation()
// 	counter()
// }
