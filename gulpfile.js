'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
// var mocha = require('../test/test-hello')

var path = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(lint())
    .pipe(lint.format());
});

// gulp.task('mocha', function(){
// });
