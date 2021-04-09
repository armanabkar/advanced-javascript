"use strict";
// can't duplicate parameter names, can't create variables with the use of the eval function, The default value of this will be undefined, can't assign a value to a read-only or non-writable global variable, can't assign or access a variable that is not declared(Reference Error).
// inside of ES6 Class and Modules, strict mode is used

// Scope is all about the visibility of variables in your code - it controls which variable can be used where.

// Hoisting is about how the JavaScript engine parses and executes your code and the “availability” of functions and variables.
// So you can put executable code at top and functions and etc at bottom!

const myName = "Arman"; // good for primitive values
let myCity = "Los Angeles";

// Also added to Global Object - accessible with this
var myAge = 22;

// There is no file specific scope (in HTML)
// But every module has its own scope (type="module") but can access data from outside

// Deceleration hoisted not the definitions
// Cant used with 'use strict' mode
// With let/const deceleration get hoisted (uninitialized; TDZ) but cant define before deceleration
myFriend = "Mary";
console.log(myFriend);
var myFriend;

// Function Hoisting
// Direct function execution
greet();
// Indirect function execution - passing reference of greet function to execute after 1s
setTimeout(greet, 1000);
function hoistedFunc() {
  console.log("I am hoisted");
}
var notHoistedFunc = function () {
  console.log("I will not be hoisted!");
};

// Local/Function Scopes - In functions
// Also added to Global Object
// Function Deceleration
function greet() {
  // Shadowing
  var myName = "Mary";
  console.log(`Hello, I'm ${myName} and ${myAge} years old!`);
}
// Function Expression (with anonymous function - named ones are preferred)
var anotherGreet = function () {
  var anotherMyName = "Arman";
  console.log(`Hello, I'm ${anotherMyName} and ${myAge} years old!`);
};

// Block scope
// only scoped with let/const
if (myAge > 18) {
  {
    // block
    let name = "Arman blocked";
    console.log(name);
  }

  var yourAge = 35;
  console.log("Welcome");
}

console.log(yourAge);

// Closures
// Every function in JavaScript is a closure! That means that every function closes over its environment when it’s created.
// Lexical env : the variables in scope, Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned. (compile time)
// Dynamic Scope doesn't exist in JS; it's about where a variable asked
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

// Problem...
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 5 5 5 5 5
  }, 500);
}
// Solution -> use let i or IIFE:
for (var i = 0; i < 5; i++) {
  // IIFE (anonymous)
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j); // 1 2 3 4 5
    }, 500);
  })();
}

(function (sentence) {
  console.log(sentence);
})("Hello World!"); // passing arguments

const students = ["Arman", "MAry"];
students[1] = "Jessie"; // allowed! but can't reassigned
