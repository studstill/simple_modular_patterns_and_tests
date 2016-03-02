var gulp = require('gulp');
var  mocha = require('gulp-mocha');
var  eslint = require('gulp-eslint');
var  watch = require('gulp-watch');

var files = ['gulpfile.js', __dirname + '/lib/**/*.js', __dirname +'/test/**/*.js'];

gulp.task('mocha', function() {
  return gulp.src(__dirname + '/test/greetspec.js', {read: false})
             .pipe(mocha( {reporter: 'nyan'}));
});


gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', function() {
  watch(files, ['mocha', 'lint']);
});
