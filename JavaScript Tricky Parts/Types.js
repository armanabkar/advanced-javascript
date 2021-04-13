// Is everything in JavaScript an object? 'false' is not an object! Only functions, arrays an objects are object

// Primitive Values
// number - string - boolean - symbol - null - undefined - bigint -> Immutable non-object values and shared by copy
let a = 5;
let b = a; // new 5 created in memory (a copy)
b = 3; // new place in memory
console.log(a, b, typeof a);
// Invisible wrapper object or Boxing -> because of this people think everything in JS is an object
console.log("arman".toLocaleUpperCase());
let undefinedValue; // its undefined not undeclared

// Reference Values
// Object: Arrays, objects, funcs, ... -> Mutable
let person = { age: 31 };
let anotherPerson = { age: 31 };
let student = person; // same object - a pointer to same object in memory is copied
person.age = 22; // student age will change
console.log(student.age);
console.log(student === person);
// False because they are different objects(and different address)
console.log(student === anotherPerson);

// Copying reference values
const numbers = [1, 2, 3];
const user = { name: "Arman", age: 22 };
const newNumber = numbers.slice(); // [...numbers] and filter and map returns new array
newPerson = { ...user };
// another way: Object.assign({},user)

// null vs undefined
// '!!' coerces the value on the right side into a boolean.
console.log(!!null, !!undefined, Boolean(null), Boolean(undefined)); //logs false false false false
console.log(null == undefined); // logs true
console.log(null === undefined); // logs false

const falsyValues = ["", 0, null, undefined, NaN, false]; // when converted to boolean (!!) becomes false

// Negative Zero
const negativeZero = -0;
console.log(negativeZero === 0); // true! oops
console.log(Object.is(negativeZero, -0)); // => so negative zero exists
console.log(Object.is(negativeZero, 0));
console.log(Math.sign(-1), Math.sign(1), Math.sign(-0), Math.sign(0)); // wrong!
const sign = (num) =>
  num !== 0 ? Math.sign(num) : Object.is(num, -0) ? -1 : 1; // corrected sign()
console.log(sign(-1), sign(1), sign(-0), sign(0));

// Infinity
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MAX_VALUE);
// When the value is bigger than 64 bit:
console.log(-9e400);

// NaN
let name = "arman";
let age = 22;
console.log(name * age); // NaN
if (isNaN(name * age)) {
  console.log("Valid!");
}
console.log(NaN === NaN); // false
console.log(isFinite(5 * 4)); // Check for infinity and NaN

// Object.is Polyfill
if (!Object.is) {
  Object.is = function ObjectIs(x, y) {
    let xNegZero = isItNegZero(x);
    let yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else {
      return x === y;
    }

    function isItNegZero(v) {
      return v === 0 && 1 / v === -Infinity;
    }

    function isItNaN(v) {
      return v !== v;
    }
  };
}
// console.log(Object.is(negativeZero, -0));

// use 'new' with Object, Array, Function, Date, RegExp, Error but don't use with String, Number, Boolean
var yesterday = new Date("April 8, 2021");
console.log(yesterday);

// Type Coercion
[].toString(); // ""; toString() will convert everything to string
console.log(typeof String(null));
+"1"; // toNumber() will convert everything to 0 except objects and arrays
!!true; // toBoolean(); falsy_values: 0, -0, null, NaN, false, undefined

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
const myName = "Arman";
console.log(!!myName); // convert to boolean
// 1-toPrimitive() 2-toString() 3-
console.log(["2"] + 1);
// [object Object]
console.log({} + "this works");
console.log(typeof +"1"); // convert string to int

// Context: Data structures with information about execution (e.g. variable values)

console.log(1 + parseInt("6")); // Explicit Coercion
console.log(1 + "6"); // Implicit Coercion

console.log(isNaN("100")); // false, becurse it does type coercion

// Equality
console.log(1 == "1"); // abstract; check value (with coercion if needed)
console.log(1 === "1"); // strict; check value and type
// if you know the types in a comparison; use ==; it's also faster -> if you don't know types so you don't fully understand the code! and you can't write quality JS programs
