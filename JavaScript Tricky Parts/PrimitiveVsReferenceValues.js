// Primitive Values
// number - string - boolean - symbol - null - undefined - bigint -> Immutable non-object values and shared by copy
let a = 5;
let b = a; // new 5 created in memory (a copy)
b = 3; // new place in memory
console.log(a, b);
// Invisible wrapper object
console.log("arman".toLocaleUpperCase());

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
