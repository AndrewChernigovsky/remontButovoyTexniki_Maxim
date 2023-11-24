import gulp from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";

async function pug2html() {
	(function () {
		return gulp
			.src("source/pug/pages/**/*.pug")
			.pipe(plumber())
			.pipe(pug())
			.pipe(gulp.dest("build/pages"));
	})();

	return gulp
		.src("source/index.pug")
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest("build"))
}

export default pug2html;
