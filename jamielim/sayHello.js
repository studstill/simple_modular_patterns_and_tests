'use strict';

var greet = require(__dirname + '/lib/greet.js');

var sayHello = function() {
  var greeting = greet(process.argv[2] || 'world');
  console.log(greeting);
  return greeting;
};

sayHello();

module.exports = sayHello;
