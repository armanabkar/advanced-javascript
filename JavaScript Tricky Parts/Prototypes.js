// Prototype and Inheritance (implemented with the help of prototypes)
// __proto__ is added by browsers
// Every JavaScript object holds a link to another object which is used as a “fallback object” in case some property or method is not found on the original object.
// By another word prototype is mechanism by which JS objects inherit features from other objects

// Constructor functions:
function Employee(name, id) {
  this.name = name;
  this.id = id;
}
const employee1 = new Employee();
// built in Object constructor functions
const object1 = new Object(); // or Array() , Set()
// ES2015 Classes
class EmployeeClass {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
const companyPerson = {
  greet() {
    console.log("HI!");
  },
};

// Defining prototype for a object
Employee.prototype = companyPerson;
const p1 = new Employee("Sogol", 35);
p1.greet();

Employee.prototype.sayGoodbye = () => console.log("bye!");
p1.sayGoodbye();

const boss = {
  name: "arman",
  age: 40,
};

// This is not recommended
Object.prototype.greetOverall = () => console.log("Hello World");
console.log(boss.__proto__);
boss.greetOverall();
// Bad way for changing prototype
// boss.__proto__ = Employee;

// Prototype Chain:
// instructor <- person <- Object Prototype <- null

const person = { kind: "human" };
const user = Object.create(person); // creates a new object which is linked to obj as its prototype.
user.name = "Arman";
console.log(user.kind);
Object.setPrototypeOf(user, { kind: "mammal" }); // allows you to change the prototype of an existing object.
console.log(user.kind);

const human = { kind: "human" };
function Person(name) {
  this.name = name;
}
// 'prototype' sets the “to-be-assigned” prototype object of objects that are created with help of new Person()
Person.prototype = human;
const Arman = new Person("Arman");
console.log(Arman.kind);
console.log(Arman.__proto__ === Person.prototype || human); // true
// The non-standard '__proto__' property gives you access to the prototype of the object you’re accessing it on. The standard 'prototype' property does something different. It points at the prototype of objects that will be created in the future (via the constructor function on which you set it). Hence only function objects have a 'prototype' property.

class BossClass extends EmployeeClass {
  // extend and super will assign prototype but in different way
  constructor() {
    super();
  }
}

const newObject = Object.create(null); // object without prototype
// console.log(newObject.toString()); -> throws an error
