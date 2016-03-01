'use strict';

var expect = require('chai').expect;
var required = require(__dirname + '/../required');
var greet = required.greet;

describe('testing greet function in required.js', function() {
  it('should take the argument "donkey" and return the string "hello donkey"', function() {
    expect(greet('donkey')).to.equal('hello donkey');
  });
});
