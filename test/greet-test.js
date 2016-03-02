'use strict';
var greet = require(__dirname + '/../greet');

var expect = require('chai').expect;

describe('test the first greet function', function(){
  it('should greet a "hello Davide"', function(){
    expect(greet('Davide')).to.eql('hello Davide how are you?');
  });
});
