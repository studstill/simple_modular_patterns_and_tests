'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('testing', function(){
  return gulp.src('test/greet_test.js', {read:false})
  .pipe(mocha());
});

gulp.task('lint', function (){
  return gulp.src(['*.js', 'greet.js', 'test/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['testing', 'lint']);