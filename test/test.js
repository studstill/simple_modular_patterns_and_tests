'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../greet.js');

describe('Testing greet function from test.js', function(){
  it('greet should return "hello, name"', function(){
    expect(greet('Sam')).to.eql('hello, Sam');
  });
});

describe('Testing greet function from test.js', function(){
  it('greet should return "hello, (passed in arg)"', function(){
    process.argv.push('Sam');
    console.log(process.argv)
    var results = greet();
    expect(results).to.eql('hello, Sam');
  });
});
