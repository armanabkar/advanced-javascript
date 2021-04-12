// Fibonacci Sequence: 1,1,2,3,5,8,13,21,34,...
// you can use console.log(counts) for counting runs
// O(n)
function fib(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  return numbers[n];
}
console.log(fib(5));

// Primality Test - only divided by 1 and itself
// O(n)
function isPrime1(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
// O(sqrt(n))
function isPrime2(number) {
  // less iterations
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime1(5));
console.log(isPrime2(9));

// O(n) - return smallest num in array
function getMin(numbers) {
  let currentMin = numbers[0];
  for (const num of numbers) {
    if (num < currentMin) {
      currentMin = num;
    }
  }
  return currentMin;
}
console.log(getMin([22, 62, 11]));

// O(1) - check if num is even
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(3));

// O(log n)
function isPowerOfTwo1(number) {
  if (number < 1) {
    return false;
  }
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}
console.log(isPowerOfTwo1(8)); // 2,4,8,16,32,...
// Bitwise operator &
// O(1)
function isPowerOfTwo2(number) {
  if (number < 1) false;

  // Binary Notation Comparison
  return (number & (number = 1)) === 0;
}
console.log(isPowerOfTwo2(8));

// Factorial n!
// O(n)
function fact(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(fact(5)); // 5! = 120
