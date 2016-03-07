'use strict';

var greet = require(__dirname + '/greet');

var hello = function(){
  var greeting = greet(process.argv[2] || 'Sunshine');
  console.log(greeting);
  return greeting;
};
hello();

module.exports = hello;
