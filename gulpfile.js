const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

gulp.task('styles', () => {
  return gulp.src('scss/main.scss').pipe(sass()).pipe(gulp.dest('./styles/'))
})

gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', (done) => {
    gulp.series(['styles'])(done)
  })
})
