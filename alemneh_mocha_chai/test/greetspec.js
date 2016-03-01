var expect = require('chai').expect;
var greet = require('../lib/greet.js');

describe("greet", function() {
    it("should have a name parameter that is a string", function() {
        var name = 'alem';
        expect(arguments).to.be.arguments; //Testing that arguments are processed
        expect(name).to.be.a('string');
    });
    it("should print a greet with the passed name argument", function() {
        var name = 'alem';
        expect(greet(name)).to.equal('Hello alem');
    });
});
