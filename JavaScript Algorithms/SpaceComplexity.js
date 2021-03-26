// How much space in memory does your algorithm occupy - Memory is cheap! so time complexity is far more important than space complexity - Everything in JS is stored in memory. Arrays and Objects take up a bit more space
// Deriving Space Complexity: Places that values stored permanently and count them, how that number depends on n? -> O(n)
// What causes Space Complexity? Variables, Data Structures, Function Calls and Allocations

// Factorial (loop) -> Space Complexity O(1)
function factLoop(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}
// Factorial (recursive) -> Space Complexity O(n)
function factRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * fact(number - 1);
}

// Linear Search -> Space Complexity O(1)
// no permanent values

// Binary Search -> Space Complexity O(1)
// no permanent values

// Bubble Sort -> Space Complexity O(1)
// no permanent values

// Quick Sort -> Space Complexity O(n)
// because of recursion

// Merge Sort -> Space Complexity O(n)
// because of recursion
