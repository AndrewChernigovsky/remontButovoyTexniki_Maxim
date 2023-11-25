import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import gulpPostcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import browser from "browser-sync";
import rename from "gulp-rename";

async function sass2css() {
	return gulp
		.src("source/sass/*styles.sass", {
			sourcemaps: true
		})
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(gulpPostcss([autoprefixer(), csso({
			restructure: true,
		})]))
		.pipe(rename("styles.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(gulpPostcss([autoprefixer(), csso({
			restructure: true,
		})]))
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest("build/css", {
			sourcemaps: "."
		}))
		.pipe(browser.stream());
}

export default sass2css;
