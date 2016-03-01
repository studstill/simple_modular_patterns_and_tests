'use strict';
var expect = require('chai').expect;
var hello = require(__dirname + '/../hello.js');
var greet = hello.greet;

describe('testing greet function in hello.js', function() {
  it('greet should return "hello dolly"', function() {
    expect(greet('dolly')).to.equal('hello dolly');
  });
});
