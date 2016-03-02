'use strict';

var expect = require('chai').expect;
var hello = require(__dirname + '/../greet');


describe ('testing greet function from greet.js', function() {
  it('greet should return "Hello, Kitty!"', function(){
    expect(hello('Kitty')).to.equal('Hello, Kitty!');
  });
});

describe ('testing that terminal will accept a variable and output string', function(){
  it('param should return process.argv[2]', function(){
    var param = process.argv[2];
    expect(param).to.equal(process.argv[2]);
  });
});

describe('testing the if else argument', function(){
  it('if process.argv.length is <=2 return greeting', function(){
    var greeting = hello('Sunshine');
    expect(greeting).to.equal('Hello, Sunshine!');
  });
});
