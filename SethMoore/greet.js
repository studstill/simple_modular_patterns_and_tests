'use strict';

var greet = require(__dirname + '/required');

var greeting = module.exports = function() {
  var hi = greet(process.argv[2] || 'chicken');
  return hi;
};

greeting();
