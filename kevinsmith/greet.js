'use strict';


function greet(name){
    return ('hello ' + name);
};

module.exports = greet;


console.log(greet(process.argv[2]));