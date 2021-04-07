// Advantages Of Functional Programming: 1-helps us to solve problems effectively in a simpler way 2-improves modularity 3-It allows us to implement lambda calculus in our program to solve complex problems 4-Some programming languages support nested functions which improve maintainability of the code

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

// Pure Functions
// functions must be highly predictable, same output/input and no side effects (e.g. log console, http calls, etc)
const add10 = (x) => x + 10;

// Immutability
const array = [1, 2, 3];
const result = array.map(add10); // this will return new array and won't change original array
