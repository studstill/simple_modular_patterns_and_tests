'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');

describe('Testing greet function from greet.js', function() {
  it('should return "hello bob"', function() {
    expect(greet('bob')).to.equal('hello bob');
  });
});
