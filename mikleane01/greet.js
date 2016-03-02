'use strict';

function greet(name) {
  if (process.argv.length <= 2) {
    return 'Hello, ' + name + '!';
  } else {
    return 'Hello, ' + process.argv[2];
  }
}

module.exports = greet;
