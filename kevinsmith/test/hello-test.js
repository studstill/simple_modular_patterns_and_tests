'use strict';


var expect =  require('chai').expect;
var hello = require(__dirname + '/../app.js');


describe('testing functions in app.js with no arguments', function(){
    it('Should return "hello Kevin"', function(){
        expect(hello('Kevin')).to.equal('hello Kevin');
    });
});

// describe('testing functions in hello.js with arguments', function(){
//     beforeEach(function(){
//         this.processargvBackup = process.argv;
//         process.argv = ['node', 'path/to/hello.js', 'slug']
//     });

//     afterEach(function(){
//         process.argv = this.aprocessargvBackup;
//     })
    
//     it('Should return "hello, slug"', function(){
//         expect(greetObject('slug')).to.equal('hello, slug');
//     });
// });