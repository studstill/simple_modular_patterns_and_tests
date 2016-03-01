'use strict';

var required = require(__dirname + '/required');
var greet = required.greet;
var argInput = required.argInput;

console.log(greet(argInput));
