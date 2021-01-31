// Algorithms: a sequence of steps to solve al clearly defined problem

// Big O Notation: Constant O(1), Quadratic O(n2), Cubic O(n3), ...
// Use Big O for comparing algorithms
// O(1) < O(log n) < O(n) < O(n**2) < O(2**n)

// Deriving Big O: 1-Define the function 2-Find the fastest growing term 3-Remove the coefficient -> T=n

// Only one function -> O(1)
// When n is split into smaller chunks -> O(log n)
// Single Loop -> O(n)

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
