'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');

describe('testing greet function from greet.js', function(){
  it('greet should return "hello, Lucy"', function(){
    expect(greet('Lucy')).to.eql('hello, Lucy');
  });
});
