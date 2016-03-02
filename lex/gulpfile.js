'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var path = ['*.js', 'test/*.js'];

var eslintRules = {
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
};



gulp.task('lint', function(){
  return gulp.src(path)
    .pipe(eslint(eslintRules))
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
