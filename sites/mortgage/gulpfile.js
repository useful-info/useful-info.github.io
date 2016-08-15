var gulp = require('gulp');
var less = require('gulp-less');
var nunjucks = require('gulp-nunjucks-render');
var del = require('del');

gulp.task('clean', function () {
  return del(['public']);
});

gulp.task('images', function () {
  return gulp.src('./assets/images/*.*')
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('styles', function () {
  return gulp.src('./assets/styles/app.less')
    .pipe(less())
    .pipe(gulp.dest('./public/styles/'));
});

gulp.task('views', function () {
  return gulp.src('./assets/views/*.nunjucks')
  .pipe(nunjucks({
    path: ['./assets/views/']
  }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch('./assets/styles/**', ['styles']);
  gulp.watch('./assets/images/**', ['images']);
  gulp.watch('./assets/views/**', ['views']);
});

gulp.task('build', ['images', 'styles', 'views']);
