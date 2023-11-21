import gulp from 'gulp';
import squoosh from 'gulp-libsquoosh';
import imagecomp from 'compress-images'
import browserSync from 'browser-sync';

async function optimizeImages() {
	imagecomp(
		"build/img/**/*.{jpg,png,jpeg}",
		"build/img/", {
			compress_force: true,
			statistic: true,
			autoupdate: true
		}, false, {
			jpg: {
				engine: "mozjpeg",
				command: ["-quality", "45"]
			}
		}, {
			png: {
				engine: "optipng",
				command: ["--quality=75-100", "-o"]
			}
		}, {
			png: {
				engine: "pngquant",
				command: ["--quality=75-100", "-o"]
			}
		}, {
			svg: {
				engine: "svgo",
				command: "--multipass"
			}
		}, {
			gif: {
				engine: "gifsicle",
				command: ["--colors", "64", "--use-col=web"]
			}
		},
		function (err, completed) { // Обновляем страницу по завершению
			if (completed === true) {
				browserSync.reload()
			}
		}
	)

}

export default optimizeImages;
