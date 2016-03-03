'use strict';

var greet = require (__dirname + '/greet');
// console.log(greet('Samantha'));
// return(greet('Samantha'));


var hello = function(){
  var greeting = greet(process.argv[2] || 'world' );
  console.log(greeting);
  return greeting;
};

hello();

module.exports = hello;

// if(process.argv.length >= 3){
//   //add for loop here
//   var param = process.argv[2];
//   // console.log(process.argv)
//   console.log(greet(param));
// } else {
//   console.log(greet('Samantha'));
// }
