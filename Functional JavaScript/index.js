// Functional Programming is math!
// Advantages Of Functional Programming: 1-helps us to solve problems effectively in a simpler way 2-improves modularity 3-It allows us to implement lambda calculus in our program to solve complex problems 4-Some programming languages support nested functions which improve maintainability of the code 5-Code is provable

// Pure Functions
// Functions must be highly predictable, same output/input and no side effects and also should follow best practices for naming
const add10 = (x) => x + 10;
// Functions that are not returning something are procedures
// Side Effects: I/O, Database storage, http calls, DOM, timestamps, random numbers, cpu heat & delay, etc -> minimize side effects and make them obvious
const addAnother = (a, b) => a + b + z; // impure
// function doSth(parameters) {} / doSth(arguments)
// Function Shapes: unary(x) - binary(x, y)

// Immutability
const array = [1, 2, 3];
const anotherArray = array.map(add10); // .map() will return new array and won't change original array

// Higher-Order Functions
// Functions that operate on other functions, either by taking them as arguments or by returning them
// JS has built-in HOFs e.g. map, reduce, filter, forEach, etc
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // → true

// .map()
const mapFunction = [1, 2, 3, 4].map((n) => n * 2); // [ 2, 4, 6, 8 ]
console.log(mapFunction);

// .reduce()
const average = [29.76, 41.85, 46.5].reduce((total, amount, index, array) => {
  total += amount;
  return total / array.length;
}, 0);
console.log(average);

// .filter()
const filtered = [29.76, 41.85, 46.5].filter((value) => value > 30);
console.log(filtered);

// Built-in Array Methods
[1, 2, 3].push(4); // where does this method come from? __proto__; object that every array has access
// also methods can be chained

// Composition
const multiplyBy2 = (x) => x * 2;
const add3 = (x) => x + 3;
const divideBy5 = (x) => x / 5;
console.log(divideBy5(add3(multiplyBy2(11)))); // hard to read; can be done with pipe operator in Elixir
// or with reduce;
const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};
const runFunctionOutput = (input, fn) => {
  return fn(input);
};
console.log(reduce([multiplyBy2, add3, divideBy5], runFunctionOutput, 11));

// Implementing Pipe Operator
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const pipeResult = pipe(multiplyBy2, add3, divideBy5)(11);
console.log({ pipeResult });

// Closure
// Promises, Generators, CommonJS modules and many other JavaScript features are using closure under the hood
// for debugging you need to know how it works under the hood
const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    console.log(counter++);
  };
  return incrementCounter;
};
const generatedFunc = outer(); // permanent memory
generatedFunc();
generatedFunc();

// Function Decoration
// for changing functionality e.g. to add a permanent memory we can return another function from a function
// function that runs only once
const oncify = (convertMe) => {
  let counter = 0;
  const inner = (input) => {
    if (counter === 0) {
      const output = convertMe(input);
      counter++;
      return output;
    }
    return "Sorry, already executed";
  };
  return inner;
};
const multiplyBy3 = (num) => num * 3;
const onceMultiplyBy3 = oncify(multiplyBy3);
console.log(onceMultiplyBy3(2)); // runs only once
console.log(onceMultiplyBy3(3)); // sorry

// Partial Application and Currying
const multiply = (a, b) => a * b;
// two arity function to one arity
function prefillFunction(fn, prefillValue) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefillValue);
    return output;
  };
  return inner;
}
// [Closure in Functional Programming style]
const multiplyBy5 = prefillFunction(multiply, 5);
console.log(multiplyBy5(5));
