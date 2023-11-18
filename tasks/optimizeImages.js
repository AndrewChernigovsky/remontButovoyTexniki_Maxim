import gulp from 'gulp';
import squoosh from 'gulp-libsquoosh';
import imagecomp from 'compress-images'
import browserSync from 'browser-sync';

async function optimizeImages() {
	imagecomp(
		"source/img/**/**/**/*", // Берём все изображения из папки источника
		"build/img/", // Выгружаем оптимизированные изображения в папку назначения
		{
			compress_force: false,
			statistic: true,
			autoupdate: true
		}, false, // Настраиваем основные параметры
		{
			jpg: {
				engine: "mozjpeg",
				command: ["-quality", "45"]
			}
		}, // Сжимаем и оптимизируем изображеня
		{
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
