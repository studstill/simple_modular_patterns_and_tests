'use strict';

var greet = require(__dirname + '/../lib/greet');
var expect = require('chai').expect;

describe('Testing greet.js', function(){
  it('Should return a string of "hello sam"', function(){
    expect(greet('Sam')).to.equal('Hello, Sam');
  });
});
