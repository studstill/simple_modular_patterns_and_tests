'use strict';

var greetObject = require(__dirname + '/lib/greet.js');
var hello = greetObject('Kevin');

console.log(hello);
module.exports = hello