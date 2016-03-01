'use strict';

function greet(name) {
  if (process.argv[2]) {
    return 'hello, ' + process.argv[2];
  } else {
    return 'hello, ' + name;
  }
}

module.exports = greet;
