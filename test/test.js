
'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../greet.js');

describe('testing greet function from the greet.js', function(){
  it('greet should return "hello, Bob"', function() {
    expect(greet('Bob')).to.equal('hello, Bob');
  });
});
