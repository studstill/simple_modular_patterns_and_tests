'use strict';
var expect = require('chai').expect;
var greet = require('../lib/sawako-greet.js');

describe('testing greet function from greet.js', function(){
  it('greet function should return "hello, Sawako"', function(){
    expect(greet('Sawako')).to.equal('hello ,Sawako');
  });
});
