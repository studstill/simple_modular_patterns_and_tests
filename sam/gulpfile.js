'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var path = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(lint({
        'rules': {
          'no-console': 0,
          'indent': [
            2,
            2
          ],
          'quotes': [
            2,
            'single'
          ],
          'linebreak-style': [
            2,
            'unix'
              ],
              'semi': [
                2,
                'always'
              ]
        },
        'env': {
          'es6': true,
          'node': true,
          'browser': true
        },
        'globals': {
          'describe': false,
          'it': false,
          'beforeEach': false,
          'afterEach': false,
          'before': false,
          'after': false
        },
        'ecmaFeatures': {
          'modules': true,
          'experimentalObjectRestSpread': true
        },
        'extends': 'eslint:recommended'
      }
    ))
    .pipe(lint.formatEach('compact',
    process.stderr));
});

gulp.task('test', function(){
  return gulp.src('test/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
  gulp.watch(path, ['test', 'lint']);
});

gulp.task('default', ['lint', 'test', 'watch']);
