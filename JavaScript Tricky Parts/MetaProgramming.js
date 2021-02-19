// These are things that often used in libraries and packages, not day to day work; for configuring our code

// Symbols
// Unique primitive values, used as object property identifiers, built-in/creatable
const uid = Symbol();
const person = {
  // by using symbols in this library, this property can change in apps (unique)
  [uid]: "p1",
  name: "arman",
  age: 30,
  // built-in symbol that used in JS
  [Symbol.toStringTag]: "User Object",
};
console.log(person.toString());
// Built-in symbols: Symbol.iterator, Symbol.toStringTag, Symbol.asyncIterator

// Iterables and Iterator
let arr = [1, 2, 3, 4, 5];
let itr = arr[Symbol.iterator]();
console.log(itr.next());
// Arrays are a kind of Object and built-in Iterators!

// Generators
const genFunctions = function* () {
  console.log("Hello");
  yield;
  console.log("World");
  yield;
  console.log("and Galaxy");
};
const gObj = genFunctions();
gObj.next();
gObj.next(); // .return, .throw
// Use Iterators & Generators to create your own loopable values (what arrays, strings, etc use internally)

// Reflect API - to control objects, standardized and grouped methods, control code usage/impact
const book = {
  title: "Holy Shit",
};
Reflect.setPrototypeOf(book, {
  toString() {
    return this.title;
  },
});
Reflect.deleteProperty(book, "title"); // instead of using Object.deleteProperty, delete, etc
console.log(book);

// Proxy API - creating 'traps' for object operations, step in and execute code, control code usage/impact, used a lot in Vue!
const newUser = { name: "Arman" };
const proxiedUser = new Proxy(newUser, {
  // It's a Trap! execute when we want to get value of any property of newUser object
  get(target, prop) {
    console.log(`${prop} read.`);
    // target is 'newUser' object
    return target[prop];
  },
});
console.log(newUser.name); // Arman
console.log(proxiedUser.name); // Arman
// Traps are methods which is declared in handler Proxy(obj, handler) and manage events that happens for our object (obj)
// e.g. get(), set(), has(), deleteProperty(), apply(), construct(), defineProperty(), getOwnPropertyDescriptor(), getPrototypeOf(), isExtensible(), ownKeys(), preventExtensions(), setPrototypeOf()

// Example of Proxy, negative index in JS Arrays:
function negativeArray(arr) {
  return new Proxy(arr, {
    get(target, index, receiver) {
      index = +index;
      return target[index < 0 ? String(target.length + index) : index];
    },
  });
}
const a = negativeArray([1, 2, 3, 4, 5]);
console.log(a[-1]); // 5
console.log(a[-2]); // 4
