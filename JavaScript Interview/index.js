let x; // undefined
let y = null;
console.log(x);
console.log(typeof x);
console.log(x == y); // true

function a() {
  let x = 10; // Function Scope (local)
}
while (false) {
  let x = 10; // Block Scope
}
console.log(x); // Hoisting (only with var) -> bringing declarations on top
var v;

// Compiler automatically adds semicolon at the end of line -> Automatic Semicolon Insertion (ASI)

// Rest Operator - rest of parameters
function sum(...nums) {
  console.log(nums);
}
sum(1, 2, 4, 5);
let arr1 = [1, 2, 3, 4];
// Spread Operator
let arr2 = [...arr1, 5, 6, 7];

// Infinity
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MAX_VALUE);
// When the value is bigger than 64 bit:
console.log(-9e400);

// NaN
let name = "arman";
let age = 22;
console.log(name * age); // NaN
if (isNaN(name * age)) {
  console.log("Valid!");
}
console.log(NaN === NaN); // false
console.log(isFinite(5 * 4)); // Check for infinity and NaN

// Arrow Functions: 1-'this' doesn't work 2-'arguments' doesn't work (use rest instead) 3-You cannot use 'new' (We don't need the function to act as a class)
// Function Expression (let test = ...)
let test1 = () => {};
(function () {
  console.log("IIFE!");
})();

// Closure
function addCounter() {
  // Remember value
  let counter = 0;
  return function () {
    console.log(counter++);
  };
}
const cl = addCounter();
cl();

// Currying
const sum1 = (a) => (b) => a + b; // Inner Funcs
const cl1 = sum1(5)(6);
console.log(cl1);

// Iterables and Iterator
let arr = [1, 2, 3, 4, 5];
let itr = arr[Symbol.iterator]();
console.log(itr.next());

// Generators
const genFunctions = function* () {
  console.log("Hello");
  yield;
  console.log("World");
  yield;
  console.log("and Galaxy");
};
const gObj = genFunctions();
gObj.next();
gObj.next(); // .return, .throw

// Garbage Collection (GC) or automatic memory management - when there is no reference it will be garbage collected - Browsers will do GC because JS is higher level language

// Error Handling
try {
  console.log(name);
} catch (error) {
  console.log("An error happened...");
  // err.name or err.message
} finally {
  console.log("finally called...");
}
