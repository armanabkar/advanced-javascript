// Recursive Factorial
function fact(number) {
  if (number === 1) {
    return 1;
  }
  return number * fact(number - 1);
}

console.log(fact(3)); // 6
console.log(fact(4)); // 24

// Recursive Fibonacci
// => three of nested (and repeated) functions => Exponential Time Complexity O(2**n)
let counter = 0;
function fib(n) {
  counter++;
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6), `- runs ${counter} times`); // 5

// Dynamic Programming: consist of
// 1 Recursion - great for repeated computations, can lead to duplicate work
// 2 Memoization (stored data) - avoid unnecessary recursive steps - reusing results
let counterMemo = 0;
function fibMemo(n, memo) {
  counterMemo++;
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}
console.log(fibMemo(6, {}), `- runs ${counterMemo} times`); // 5

// Avoid Recursive solutions without memoization because of bad time complexities
