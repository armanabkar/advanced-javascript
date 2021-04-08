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
