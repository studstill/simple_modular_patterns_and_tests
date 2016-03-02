'use strict'

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var paths = ['*.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format());
});
