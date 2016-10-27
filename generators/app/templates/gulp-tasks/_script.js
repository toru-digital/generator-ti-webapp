'use strict'

module.exports = function (gulp, livereload) {
  gulp.task ('script', function () {
    const concat = require ('gulp-concat')
    const babel = require('gulp-babel');
		const jshint = require('gulp-jshint');

    return gulp
      .src ([
        'src/*.js',
      ])
      .pipe (babel({ presets: ['es2015']}))
			.pipe (jshint({
				browser : true, // predefine event, document, setTimeout, etc
				devel : true,
        globals : { },
				maxerr : 10, // show only 10 errors at a time
				node : true, // fixes 'Use the function form of "use strict" error'
				nomen : true, // allow initial underscores in var names
				predef : [ '$', 'jQuery'], // implitly defined in this environment
        strict : 'global', // assume 'use strict'
        white : true // ignore whitespace errors
			}))
			.pipe (jshint.reporter ('jshint-stylish'))
      .pipe (gulp.dest ('build'))
      .pipe (livereload ())
  })

  gulp.watch ("src/**/*.js", [ 'script' ])
}
