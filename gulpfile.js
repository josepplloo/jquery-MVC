const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('default', function () {
   console.log('Gulp task running...'); 
});

gulp.task('scripts', function () {
    gulp.src('./src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(minify({
            noSource: true
        }))
        .pipe(gulp.dest('dist/js'));
 });

 gulp.task('styles', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
 });

 gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', gulp.series('scripts'));
});