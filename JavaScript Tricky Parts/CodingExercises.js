// is Array or not
let arr = [4, 5, 7, 6, 3, 5, 7, 7, 7, NaN, undefined];
if (Object.prototype.toString.call(arr) === "[object Array]") {
  console.log("true");
} else {
  console.log("false");
}

// Remove duplicate values from array, 2 ways:
console.log(arr.filter((v, i) => arr.indexOf(v) === i));
console.log([...new Set(arr)]);

// Remove null, undefined, 0, NaN
console.log(arr.filter((v, i) => v));

// Factorial n!
// Recursive
function rFact(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * rFact(num - 1);
  }
}
// iterative
function sFact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}
console.log(rFact(5));
console.log(sFact(5));

// Prime Number: divisible by 1 & itself
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
console.log(isPrime(7));

// Vowel or Consonant
function getVal(ch) {
  if (
    ch.toLowerCase() == "a" ||
    ch.toLowerCase() == "i" ||
    ch.toLowerCase() == "e" ||
    ch.toLowerCase() == "o" ||
    ch.toLowerCase() == "u"
  ) {
    console.log("It's vowel");
  } else {
    console.log("It's consonant");
  }
}
getVal("b");
getVal("u");

// Array Intersection (shared elms) and Union (all elms)
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(arr1.filter((v) => arr2.includes(v)));
console.log(...new Set([...arr1, ...arr2]));

// Fibonacci
function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// Reverse Number: 2345->5432
function reverseNumber(num) {
  let rev = 0;
  let rem = 0;
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
  return rev;
}
console.log(reverseNumber(2345));
function flipInt(n) {
  var digit,
    result = 0;
  while (n) {
    digit = n % 10; //  Get right-most digit. Ex. 123/10 → 12.3 → 3
    result = result * 10 + digit; //  Ex. 123 → 1230 + 4 → 1234
    n = (n / 10) | 0; //  Remove right-most digit. Ex. 123 → 12.3 → 12
  }
  return result;
}
console.log(flipInt(2345));
