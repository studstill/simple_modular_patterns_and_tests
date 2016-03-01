`use strict`;

const expect = require(`chai`).expect;
const communicate = require(`${__dirname}/../greet.js`);

describe(`Greet.js`, () => {
  describe(`The communicate object`, () => {
    it(`should return an object with a method 'greet' that returns a
        string "Hello <name>!" when passed an argument`, () => {
      expect(communicate.greet(`jason`)).to.equal(`hello jason`);
    });
    it(`should make sure that the arguments are being processed`, () => {
      // Run "npm test test" to execute mocha, using the test file twice?
      // The second "test" argument gets captured with the greet function
      expect(communicate.greet(process.argv[2])).to.equal(`hello test`);
    });
  });
});
