'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../required');
var greeting = require(__dirname + '/../greet');


describe('testing greet function in required.js', function() {
  it('should take the argument "donkey" and return the string "hello donkey"', function() {
    expect(greet('donkey')).to.equal('hello donkey');
  });
});

describe('testing greet.js without argument', function() {
  beforeEach(function() {
    this.processArgvBackup = process.argv;
    process.argv = ['path1', 'path2'];
  });
  afterEach(function() {
    process.argv = this.processArgvBackup;
  });
  it('should return "hello chicken"', function() {
    expect(greeting()).to.equal('hello chicken');
  });
});

describe('testing greet.js with argument', function() {
  beforeEach(function() {
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'path/to/greeting', 'monkey'];
  });
  afterEach(function() {
    process.argv = this.processArgvBackup;
  });
  it('should take the argument input "monkey" and return the string "hello monkey"', function() {
    expect(greeting()).to.equal('hello monkey');
  });
});
