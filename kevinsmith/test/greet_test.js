'use strict';

var expect =  require('chai').expect;
var greetObject = require(__dirname + '/../greet.js');

describe('testing functions in greet.js', function(){
  it('Should return "hello Kevin"', function(){
    expect(greetObject('Kevin')).to.equal('hello Kevin');
  });
});