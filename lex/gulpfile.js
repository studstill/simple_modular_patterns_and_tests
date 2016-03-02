'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var path = ['*.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(eslint())
    .pipe(eslint.format());
});

var testPath = ['test/*.js'];

gulp.task('mocha', function(){
  return gulp.src(testPath, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['lint', 'mocha']);

var watcher = gulp.watch(path, ['lint', 'mocha']);

// watcher.on('change', function(event) {
//   console.log('Filename: ' + event.path);
//   console.log('Event type: ' + event.type);
// })
