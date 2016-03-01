'use strict';

var greet = require (__dirname + '/greet');
// console.log(greet('Samantha'));
// return(greet('Samantha'));

// if(process.argv.length >= 3){
//   var param = process.argv[2];
//   // console.log(process.argv)
//   console.log(greet(param))
// } else {
//   console.log(greet('Samantha'))
// }

if(process.argv.length >= 4){
  var param = process.argv[2];
  // console.log(process.argv)
  console.log(greet(param))
} else {
  console.log(greet('Samantha'))
}
