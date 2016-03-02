'use strict';

var expect = require('chai').expect;
var hello = require(__dirname + '/../hello');

describe('Testing hello.js with arguments', function(){

  beforeEach(function(){
    this.processArgvbackup = process.argv;
    process.argv = ['node', 'path/to/hello.js', 'Ben'];
  });
  afterEach(function(){
    process.argv = this.processArgvbackup;
  });

  it('Should return hello with passing arguments', function(){
    expect(hello()).to.equal('Hello, Ben');
  });
});
