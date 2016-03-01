'use strict';

module.exports = {
  greet(name) {
    let argArray = process.argv.filter((arg) => {
      // Ensure that the arg doesn't include a slash (i.e in a path)
      // or that it isn't "node" or "greet.js", the name of this file,
      // or "test" the name of the directory that mocha is referencing
      return !/\//.test(arg) || !'node' || !'greet.js' || !'test'
    })
    console.log(`hello ${argArray.join(` `)}`);
    return `hello ${name ? name : argArray.join(` `)}`;
  }
};

module.exports.greet();
