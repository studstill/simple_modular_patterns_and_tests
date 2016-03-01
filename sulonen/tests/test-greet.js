'use strict';

var expect = require('chai').expect,
    greet = require(__dirname + '/../greet.js');

describe('testing greet function from greet.js', function(){
  it('greet should return "hello, kevin"', function(){
    expect(greet('kevin')).to.equal('hello, kevin');
  });
});

describe('testing presence of arguments with greet.js', function() {
  process.argv[2] = 'kevin';
  it('greet should return "hello, kevin"', function() {
    expect(greet()).to.equal('hello, kevin');
  });
});
