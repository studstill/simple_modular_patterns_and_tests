'use strict';

var expect = require('chai').expect;
var sayHello = require(__dirname + '/../sayHello.js');

describe('Testing sayHello with no arguments', function() {
  it('should return "hello world"', function() {
    expect(sayHello()).to.equal('hello world');
  });
});

describe('Testing sayHello with arguments', function() {
  beforeEach(function() {
    this.processArgvBackup = process.argv;
    process.argv = [
      'node',
      'path/to/sayHello.js',
      'jane'
    ];
  });

  afterEach(function() {
    process.argv = this.processArgvBackup;
  });

  it('should return "hello jane"', function() {
    expect(sayHello()).to.equal('hello jane');
  });
});