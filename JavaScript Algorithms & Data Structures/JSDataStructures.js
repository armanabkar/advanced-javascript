// Variables that not used are memory leaks (global variables)
// JS is single-threaded/non-blocking and has Call Stack for executing functions (LIFO), recursion without base case -> StackOverFlow!
// WebAPIs: DOM, AJAX, setTimeout, ...

// Compiler automatically adds semicolon at the end of line -> Automatic Semicolon Insertion (ASI)

// Garbage Collection (GC) or automatic memory management - when there is no reference it will be garbage collected - Browsers will do GC because JS is higher level language

// Data Structure allow you to manage data e.g. JavaScript built ing data structures like array, object, set, map

// JS Array - insertion order is kept, have index, iterable, dynamic size, duplicate values allowed
// Time Complexities: element access O(1) - insertion at the end O(1) - insertion at the beginning O(n) - Insertion in Middle O(n) + Search time - Search elements O(n)
const names = ["Max", "Manu", "Arman", "Mary", "Mary"];
names.push("alin");
for (const el of names) {
  console.log(el);
}
console.log(names.findIndex((el) => el === "Mary")); // can be performance intensive
console.log(names.splice(2, 1)); // can be performance intensive

// JS Sets - no insertion order - dynamic size - iterable - elm access with methods - duplicate values not allowed - deletion and finding is faster -> simplified data access and better performance for large data
const ids = new Set();
ids.add("abc").add(1).add("def").add(1001).add(1001);
for (const el of ids) {
  console.log(el);
}
console.log(ids.has("abc"));
ids.delete("def");
console.log(ids);
ids.forEach((id) => console.log(id));

// JS Objects - unordered key-value pairs - element access with key - not iterable - keys are unique but values not - can store data and methods - very versatile
// Time Complexities: element access O(1) - insertion at the end O(1) - insertion at the beginning O(1) - Insertion in Middle O(1) - Search elements O(1)
const person = {
  name: "arman",
  age: 22,
  hobbies: ["gym", "code"],
  greet() {
    console.log(`Hi I'm ${this.name}`);
  },
};
console.log(person["name"]); // person.name
person.lastName = "abkar";
// delete person.age
person.greet();

// JS Maps - ordered key-value pairs - element access with key - iterable - keys are unique but values not - keys can be anything (reference values like arrays) - pure data structures optimized for data access (can't have methods) - better for huge data
const resultData = new Map();
resultData.set("average", 1.53);
resultData.set("lastResult", null);
resultData.set("lastResult", null);
for (const el of resultData) {
  console.log(el);
}
console.log(resultData.get("average"));
resultData.delete("lastResult");
// Convert object literal to map
const product = new Map();
let obj = {
  pCode: 1001,
  pName: "orange",
};
let objNew = new Map(Object.entries(obj));
console.log(objNew);
// Convert map to object literal
let objNew2 = Object.fromEntries(product.entries());
console.log(product.has("pCode"));

// JS WeakSet & WeakMap => values and keys are only weakly referenced -> Garbage Collection can delete values and keys if not used anywhere else in the app -> matters only in performance intensive apps (DOM)
