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

// If you use var i, it will be available outside
for (let i = 0; i <= 5; i++) {
  // Now we have block scope with let i;
  // You cant use const
  console.log(i);
}

const user = { name: "Arman", age: 22 };
user.__proto__.test = 5;

// Looping through keys of object
for (const key in user) {
  // only own properties
  if (user.hasOwnProperty(key)) {
    console.log(key);
    // console.log(user[key]);
  }
}

// Looping through values of object
for (const value of Object.entries(user)) {
  // Object.keys(user);
  // Object.values(user);
  console.log(value);
}

const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

// For Each has worser performance than other options
numbers.forEach((num, index) => {
  console.log(num, index);
});

// Primitive Values
// number - string - boolean - symbol - null - undefined - bigint -> Immutable non-object values
let a = 5;
let b = a; // new 5 created in memory (a copy)
b = 3; // new place in memory
console.log(a, b);
// Invisible wrapper object
console.log("arman".toLocaleUpperCase());

// Reference Values
// Object: Arrays, objects, funcs, ... -> Mutable
let person = { age: 31 };
let anotherPerson = { age: 31 };
let student = person; // same object - a pointer to
person.age = 22; // student age will change
console.log(student.age);
console.log(student === person);
// False because they are different objects(and different address)
console.log(student === anotherPerson);

// Copying reference values
const newNumber = numbers.slice(); // [...numbers] and filter and map returns new array
newPerson = { ...user };
// another way: Object.assign({},user)

// Type Coercion
console.log(3 + "2"); // 32 - String is safer value
console.log(3 + Number("2")); // 5
// true = 1 / false = 0
console.log(true + 1 + false); // 1 + 1 + 0
console.log(12 / "3"); // 4 but + is different
console.log(5 > "hi"); // converts both to string
/// 0123456789abcdefghi...
console.log("hi" > true); // NaN > 1 => false
// Everything is truthy except
console.log(false, null, undefined, 0, -0, "", NaN);
console.log(true && "Yeah Buddy!");
console.log(1 || "zero");
console.log(!!myName); // convert to boolean
// 1-toPrimitive() 2-toString() 3-
console.log(["2"] + 1);
// [object Object]
console.log({} + "this works");

function factorial(n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * (n - i);
  }
  return result;
}

// Context: Data structures with information about execution (e.g. variable values)

// Recursion
function factorialRecursion(n) {
  // base + recursive step
  return n === 0 ? 1 : n * factorialRecursion(n - 1);
}

console.log(factorial(4));
console.log(factorialRecursion(4));

// Traversal using recursion
const filesystem = {
  documents: {
    files: ["tax.txt", "resume.pdf", "picture.png"],
  },
  work: {
    urgent: {
      files: ["project-b.pdf"],
    },
    lowPrio: {
      files: ["budget.xlsx"],
    },
  },
};
// Use recursion for avoiding nested loops
function getFilenames(fs) {
  const allFiles = [];
  for (const identifier in fs) {
    if (Array.isArray(fs[identifier])) {
      allFiles.push(...fs[identifier]);
    } else {
      allFiles.push(...getFilenames(fs[identifier]));
    }
  }
  return allFiles;
}

// Closures
// Lexical env : the variables in scope
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

// Asynchronous JavaScript
// Synchronously means execute one expression after another in order specified in the script code
// SetTimeout runs asynchronously
// JavaScript is single-threaded (only one action at a time) - but the browser/node isn't!

// Callbacks - e.g. setTimeout
addItForMe(800, 800, function (result) {
  console.log(result);
});
function addItForMe(num1, num2, cb) {
  const result = num1 + num2;
  cb(result);
}

// Promises - is a JS object
const myPromise = new Promise((resolve, reject) => {
  // Pending
  setTimeout(() => {
    resolve("IT WORKS!");
    //fulfilled:

    // reject("rejected");
    // //rejected
  }, 2000);
});

// then executes in order
myPromise.then((data) => data).then((data) => console.log(data));

// Example - Only works in browser
// fetch("https://jsonplaceholder.typicode.com/todos/1", {})
//   .then((res) => res.json())
//   .then(
//     (res) => {
//       res.json();
//     },
//     (error) => {
//       console.log(error);
//     }
//   ) // when failed
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// promisify apis:
function setTimer(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
setTimer(2000).then(() => console.log("setTimer completed!"));

// Async Await - use promisees under the hood
async function timer() {
  await setTimer(3000);
  console.log("async timer works");
}
timer();

// "this" keyword
// this in strict mode wont refer to global object
// this refers to object on which a func is called and depends on its execution context
class Person {
  constructor() {
    this.age = 22;
  }

  greet() {
    console.log("My age: " + this.age);
  }

  // fixing this with bind(this), apply and call
  greetWithDelay() {
    setTimeout(() => {
      console.log(this);
      console.log("My age: " + this.age);
    }, 1500);
  }
}
arman = new Person();
arman.greet();
arman.greetWithDelay();

// Prototype and Inheritance
// __proto__ is added by browsers
// is mechanism by which JS objects inherit features from other objects

// Constructor functions:
function Employee(name, id) {
  this.name = name;
  this.id = id;
}
const employee1 = new Employee();
// built in Object constructor functions
const object1 = new Object(); // or Array() , Set()
// ES2015 Classes
class EmployeeClass {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
const companyPerson = {
  greet() {
    console.log("HI!");
  },
};

// Defining prototype for a object
Employee.prototype = companyPerson;
const p1 = new Employee("Sogol", 35);
p1.greet();

Employee.prototype.sayGoodbye = () => console.log("bye!");
p1.sayGoodbye();

const boss = {
  name: "arman",
  age: 40,
};

// This is not recommended
Object.prototype.greetOverall = () => console.log("helllllooo");
console.log(boss.__proto__);
boss.greetOverall();
// Bad way for changing prototype
// boss.__proto__ = Employee;

// Prototype Chain:
// instructor <- person <- Object Prototype <- null

class BossClass extends EmployeeClass {
  // extend and super will assign prototype but in different way
  constructor() {
    super();
  }
}