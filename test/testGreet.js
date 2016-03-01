'use strict'
var expect = require('chai').expect;
var greet = require(__dirname + '/../greet.js');

describe('testing greet function in greet.js', function() {
  if(process.argv[2]) {
    var name = process.argv[2];
    it('node greet.js "someName" returns "hello, someName"', function(){
      expect(greet(name).to.equal('hello, ' + name));
    });
  }
  it('greet should return "hello, unicorn!"', function() {
    expect(greet('unicorn')).to.equal('hello, unicorn!');
  });
});
