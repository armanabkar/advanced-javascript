"use strict";
// can't duplicate parameter names, can't create variables with the use of the eval function, The default value of this will be undefined, can't assign a value to a read-only or non-writable global variable, can't assign or access a variable that is not declared.

// Scope is all about the visibility of variables in your code - it controls which variable can be used where.
// Hoisting is about how the JavaScript engine parses and executes your code and the “availability” of functions and variables.

const myName = "Arman";
let myCity = "Los Angeles";

// Also added to Global Object - accessible with this
var myAge = 22;

// There is no file specific scope (in HTML)
// But every module has its own scope (type="module") but can access data from outside

// Deceleration hoisted not the definitions
// Cant used with 'use strict' mode
// With let/const deceleration get hoisted but cant define before deceleration
myGF = "Sogol";
console.log(myGF);
var myGF;

// Function Hoisting
// Direct function execution
greet();
// Indirect function execution - passing reference of greet function to execute after 1s
setTimeout(greet, 1000);

// Local/Function Scopes - In functions
// Also added to Global Object
function greet() {
  // Shadowing
  let myName = "Sogol";
  console.log(`Hello, I'm ${myName} and ${myAge} years old!`);
}

// Block scope
if (myAge > 18) {
  // let yourAge = 35;
  var yourAge = 35;
  console.log("Welcome");
}

console.log(yourAge);

// Closures
// Every function in JavaScript is a closure! That means that every function closes over its environment when it’s created.
// Lexical env : the variables in scope, Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
// closures only memorize variable names and values looked up when executes
function createGreeter(name) {
  return function () {
    setTimeout(function () {
      console.log(name);
    }, 1000);
  };
}

const greetArman = createGreeter("ARMAN");
greetArman();

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 5 5 5 5 5
  }, 500);
}

// Solution -> use let i or IIFE:
for (var i = 0; i < 5; i++) {
  // IIFE
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j); // 1 2 3 4 5
    }, 500);
  })();
}
