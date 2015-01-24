/* @flow */

// CommonJS test
var React = require('react');

// ES6 test
var f = (y) => y+3;

// flow test
function sum(a: number, b: number): number {
  return a + b;
}

// JSX test
var x = <div>hi</div>;

console.log('yay!');

module.exports = sum;
