'use strict'

module.exports = function (gulp, livereload) {
	gulp.task ('scss', function () {
		let flatten = require ('gulp-flatten')
		let sass = require ('gulp-sass')
		let watch = require ('gulp-watch');

		return gulp
			.src ("scss/main.scss")
			.pipe (sass ({ outputStyle : 'expanded'}))
			.pipe (gulp.dest ('build'))
			.pipe (livereload ())
	})

	gulp.watch ("scss/*.scss", ['scss'])
}
