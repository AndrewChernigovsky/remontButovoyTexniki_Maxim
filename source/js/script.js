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
// import * as arrowUp from "../vendorInit/up-arrow/up-arrow.js";

document.addEventListener("DOMContentLoaded", function () {
	burger()
	swiperMainInit()
	// arrowUp
	optimizations()
	validation()
	setInterval(updateCountdown, 1000);
})

// window.onload = () => {
// 	burger()
// 	swiperMainInit()
// 	// arrowUp
// 	optimizations()
// 	validation()
// 	counter()
// }
