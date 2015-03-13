/* @flow */
require("babel/register");

// flow test
function sum(a: number, b: number): number {
  return a + b;
}

// CommonJS test
var React = require('react');
module.exports = sum;

// JSX test
var x = <div>hi</div>;

// ES6 tests
// promise
new Promise((resolve, reject) => {
  console.log('start promise');
  setTimeout(resolve, 1000);
}).then(
  () => console.log('promise done')
);

// classes
class A {
  x: number;
  f() {
    return this.x;
  }
}

class B extends A {
  constructor() {
    this.x = 3;
  }
}

var res = new B().f();

// arrow functions
var f = (a, b) => a + b;

// array spread operator
var arr = [0, ...[1, 2]];

// argument spread operator
var arr: Array<number> = [1, 2];
var res = sum(...arr);

// rest parameters
(function (a, ...args) {
  return a + args[0] + args[1];
}(1, 2, 3));

// destructuring
(function ({a, b}) { return a + b; })({a:1, b:2});
var [x, y] = [1, 2];

// computed properties
var obj = {[1+1]: 2};

console.log('yay!');
