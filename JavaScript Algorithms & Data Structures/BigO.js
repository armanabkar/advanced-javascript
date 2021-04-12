// Data Structures + Algorithms = Programs
// Good Code is 1-Readable 2-Scalable(Speed + Memory)

// Algorithms: a sequence of steps to solve al clearly defined problem

// GitHub Repository : trekhleb/javascript-algorithms

// Big O Notation: Constant O(1), Quadratic O(n2), Cubic O(n3), ...
// Use Big O for comparing algorithms efficiency -> Scalability of our system
// O(1) < O(log n) < O(n) < O(n log n) < O(n**2) < O(2**n) < O(n!)

// Deriving Big O: 1-Define the function 2-Find the fastest growing term 3-Remove the coefficient -> T=n

// Constant - Only one function -> O(1)
// Logarithmic - When n is split into smaller chunks -> O(log n)
// Linear - Single Loop -> O(n)
// Quadratic - Two nested loops -> O(n^2)
// Exponential- recursive algorithms that solves a problem of size -> O(2^n)
// Factorial- you are adding a loop for every element, very expensive -> O(!n)

// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)

// Rule 1: worst case
// Rule 2: remove constants
// Rule 3: different terms for inputs
// Rule 4: drop non dominants

let start = 0;
let end = 0;
// Linear Time Complexity O(n)
function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    // this runs 'n' times
    result += i;
  }
  return result;
}

// Constant Time Complexity O(1) - always fast!
function sumUp2(n) {
  // this runs once!
  return (n / 2) * (1 + n);
}

// Measuring performance (time):
// start = performance.now(); (only in browser)
console.log(sumUp(6));
console.log(sumUp2(6));
// end = performance.now();

function sumNumbers(numbers) {
  // O(1)
  // return numbers[0] + numbers[1] + numbers[2];
  // O(n)
  // let result = 0;
  // for (const number of numbers) {
  //   result += number;
  // }
  // return result;
  // This have another function
  // return numbers.reduce((sum, currentNum) => sum + currentNum, 0);
}

console.log(sumNumbers([1, 3, 10]));

// Creating large arrays in JS
const largeArray = new Array(1000000).fill("nemo");

// Quadratic Time Complexity O(n^2)
function logAllPairsOfArrays(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
logAllPairsOfArrays([1, 2]);

// Logarithmic Time Complexity O(log n) -> with Tree Data Structures, like google's search results
