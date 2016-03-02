'use strict';
var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var paths = ['*.js', '/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
  .pipe(lint())
  .pipe(lint.format());
});

gulp.task('default', function(){
  return gulp.src('sawako-test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});
