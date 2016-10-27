'use strict'

module.exports = function (gulp) {
  let livereload = require ('gulp-livereload')
  livereload.listen ()

  // script
  require ('./_script') (gulp, livereload)
  require ('./_sass') (gulp, livereload)

  gulp.task ('default')
}
