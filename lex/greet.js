'use strict';

var hello = require(__dirname + '/hello');
var args = process.argv.slice(2);
var greet = hello.greet;
console.log(greet(args[0]));
