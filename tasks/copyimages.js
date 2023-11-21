import gulp from 'gulp';
import newer from "gulp-newer";
import cleanImages from "./cleanImages.js";

async function copyImages() {

	return gulp
		.src(["source/img/**/*", "source/img/*.svg"])
		.pipe(newer("build/img"))
		.pipe(gulp.dest("build/img"));


}

export default copyImages;
