'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var path = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('test', function(){
  return gulp.src('test/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
  gulp.watch('/../*.js', ['lint', 'test']);
});

gulp.task('default', ['lint', 'test', 'watch']);
