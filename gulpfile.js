const gulp = require('gulp')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')

gulp.task('mocha', () => {
  return gulp.src(['test/**.js'], {read: false})
  .pipe(mocha({reporter: 'nyan'}))
  .on('error', gutil.log)
})

gulp.task('mocha-watch', () => {
  gulp.run('mocha')
  gulp.watch(['**/*.js'], ['mocha'])
})

gulp.task('default', () => {
  console.log('called gulp')
})
