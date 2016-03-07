'use strict';

var greet = require(__dirname + '/lib/greet');

var hello = function(){
  var greeting = greet(process.argv[2] || 'Sam');
  console.log(greeting);
  return greeting;
};

hello();

module.exports = hello;
