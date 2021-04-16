// Recursion
// JavaScript only executes one function at a time but it’s capable of managing multiple ongoing (waiting) function calls with help of a concept called the execution context stack (or “call stack”).
// Anything you do with a recursion can be done iteratively (loop) - Recursion is good because of DRY and readable code, but large stack (can be solved with tail call optimization)
// use cases: Merge Sort, Quick Sort, Tree and Graph Traversals, etc

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

// Dynamic Programming: is just an optimization technique (caching); consist of
// 1 Recursion - great for repeated computations, can lead to duplicate work
// 2 Memoization (stored/cached data) - avoid unnecessary recursive steps - reusing results
function memoizedAddTo80() {
  // using closures
  let cache = {};
  return function (n) {
    if (n in cache) return cache[n];

    console.log("long time...");
    cache[n] = n + 80;
    return cache[n];
  };
}
const memoizedAddTo80withClosure = memoizedAddTo80();
console.log(memoizedAddTo80withClosure(5));
console.log(memoizedAddTo80withClosure(5));

// Memoized Recursive Fibonacci
let counterMemo = 0;
function fibMemo(n, memo) {
  let result;
  counterMemo++;
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

// Dynamic Programming is about dividing problem into subproblems and are there repetitive subproblems? memoize subproblems

// Avoid Recursive solutions without memoization because of bad time complexities
