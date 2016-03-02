'use strict';

var args = process.argv.slice(2);
console.log('Hello, ' + args.join(' '));

function greet (name){
  return 'hello ,' + name;
}

module.exports = greet;
