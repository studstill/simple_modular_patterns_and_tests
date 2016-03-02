'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');

describe('testing greet function from greet.js', function() {
  it('greet should return "hello, kevin"', function(){
    expect(greet('kevin')).to.equal('hello, kevin');
  });
});

describe('testing presence of arguments with greet.js', function() {
  beforeEach(function(){
    this.argvBak = process.argv;
    process.argv = ['/Users/kevin/.node/bin/node',
                    '/Users/kevin/.node/lib/node_modules/mocha/bin/_mocha',
                    'kevin'];
  });

  afterEach(function(){
    process.argv = this.argvBak;
  });

  it('greet should return "hello, kevin"', function() {
    expect(greet()).to.equal('hello, kevin');
  });
});
