/* @flow */

// ES6 tests (commented out the ones that don't work yet)
// arrow functions
var f = (a, b) => a + b;

// array spread operator
//var arr = [1, 2];
//var arr2 = [0, ...arr];

// argument spread operator
//var arr = [1, 2];
//var res = f(...arr);

// rest parameter
(function (a, ...args) { 
  return a + args[0] + args[1]; 
}(1, 2, 3));

// destructuring
(function ({a, b}) { return a + b; })({a:1, b:2});
var [x, y] = [1, 2];

// dynamic object keys
//var a = {b:1};
//var c = {a.b: 0};


// flow test
function sum(a: number, b: number): number {
  return a + b;
}

// CommonJS test
var React = require('react');
module.exports = sum;


// JSX test
var x = <div>hi</div>;

console.log('yay!');
