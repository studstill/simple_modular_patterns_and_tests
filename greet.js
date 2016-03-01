'use strict';

function greet(name){
  if (process.argv[2]){
    var arg = process.argv[2];
    return 'hello, ' + arg;
  } else {
    return 'hello, ' + name;
  };
};

module.exports = greet;
