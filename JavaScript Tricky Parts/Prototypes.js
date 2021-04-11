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

  greet(name) {
    console.log(`Hi ${name}! Nice to meet you.`);
  }
}
const companyPerson = {
  greet() {
    console.log("HI!");
  },
};

// Defining prototype for a object
Employee.prototype = companyPerson;
const p1 = new Employee("Mary", 35);
p1.greet();

Employee.prototype.sayGoodbye = () => console.log("bye!");
p1.sayGoodbye();

const boss = {
  name: "arman",
  age: 40,
};

// This is not recommended, because everyone can use
Object.prototype.greetOverall = () => console.log("Hello World");
console.log(boss.__proto__);
boss.greetOverall();
// Bad way for changing prototype
// boss.__proto__ = Employee;
console.log(boss.hasOwnProperty("name"));

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

// Another example of object creator function('class' keyword use this under the hood):
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.increment = function () {
  this.score++; // doesn't work with arrow function
  // or use this:
  // const add = () => this.score++;
  // add();
};
UserCreator.prototype.sayHello = function () {
  console.log(`Hi there! I'm ${this.name}.`);
};
const user1 = new UserCreator("Eva", 9);
user1.increment();
console.log(user1.score);

// Subclassing & Inheritance
function paidUserCreator(paidName, paidScore, accountBalance) {
  UserCreator.call(this, paidName, paidScore); // what super() do
  // or
  // UserCreator.apply(this, [paidName, paidScore]);
  this.accountBalance = accountBalance;
}
paidUserCreator.prototype = Object.create(UserCreator.prototype); // what extends do (prototypal inheritance)
paidUserCreator.prototype.increaseBalance = function () {
  this.accountBalance++;
};
const paidUser1 = new paidUserCreator("Adam", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayHello();

// Super simplified version of object creator function and sub-classing; 'class' keyword:
class BossClass extends EmployeeClass {
  // linked to it's own prototype
  constructor() {
    super();

    // Strange way to fix 'this'!
    this.askQuestion = (question) => {
      console.log(this.teacher, question);
    };
  }

  // Method Overriding
  greet(name) {
    super.greet(name.toUpperCase());
  }
}

// Inheritance in JavaScript is Behavior Delegation; Objects Linked to Other Objects (OLOO) -> JS is Objects-Oriented

// Object.create Polyfill
if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

const newObject = Object.create(null); // object without prototype
// console.log(newObject.toString()); -> throws an error

// Mixin
const codingMixin = {
  code() {
    console.log("console.log('Hello World!')");
  },
};
Object.assign(BossClass.prototype, codingMixin);
 