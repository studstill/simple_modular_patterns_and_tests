'use strict';

exports = module.exports;

exports.greet = function(name) {
  return 'hello ' + name;
};

exports.argInput = process.argv[2];
