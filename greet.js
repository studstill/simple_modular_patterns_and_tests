'use strict'
var nodeName = process.argv[2];
if (nodeName){
  greet(nodeName);
}

function greet(name) {
  if(name){
    console.dir('hello, ' + name);
  }

  return 'hello, ' + name + '!';
}

module.exports = greet;
