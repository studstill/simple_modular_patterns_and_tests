'use strict';

var greet = require(__dirname + 'greet');
var face = require('cool-ascii-faces');

console.log(face);

var hello = function(){
  var greeting = greet(process.argv[2] || 'world' );
  return greeting;
};

hello();

module.exports= hello;
