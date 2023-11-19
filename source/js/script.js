import {
	init as swiperMainInit
} from '../vendorInit/swipers/swiperMain.js'
import {
	burger
} from "../vendorInit/burger/burger.js";
import {
	optimizations
} from '../vendorInit/modules/oprimizations/optimizations.js';
// import * as arrowUp from "../vendorInit/up-arrow/up-arrow.js";

// document.addEventListener("DOMContentLoaded", function () {
// 	burger()
// 	swiperMainInit()
// 	// arrowUp
// 	optimizations()
// })

window.onload = () => {
	burger()
	swiperMainInit()
	// arrowUp
	optimizations()
}
