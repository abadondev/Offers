var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['default']);
});
