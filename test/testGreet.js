'use strict'
var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');

describe('testing greet function in greet.js', function() {
  it('greet should return "hello, unicorn!"', function() {
    expect(greet('unicorn')).to.equal('hello, unicorn!');
  });
});
