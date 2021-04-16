// Object Literal: KeyValue pair data structures
let id = 1;
let obj = {
  [id]: 1,
  pCode: { id: 1, sp: "ABC" },
  getData() {
    // console.log(obj.pCode.sp);
    console.log(obj.pCode);
  },
  test() {
    console.log(this); // refers to this object
  },
};
Object.defineProperty(obj, "pCode", {
  writable: true,
  configurable: true,
  value: 2001,
});
obj.getData();
console.log(1 in obj, obj.hasOwnProperty(1), obj[1]); // 3 ways to check if a certain property exists in an object

// Clone Object
let newObj = Object.assign({}, obj);

// "this" keyword
// Context says where we are (which environment)
// this in strict mode wont refer to global object
// this refers to object on which a func is called and depends on its execution context
// doesn't work with arrow functions so don't use it in objects or classes if you need 'this'
console.log(this); // Current Context - Window GlobalObject
obj.test();
const person = {
  age: 31,
  printAge() {
    console.log(this.age);
  },
};
person.printAge(); // 31
const outputInfo = person.printAge;
outputInfo(); // undefined! -> outputInfo() is not called on 'person' so this refers to window object

// "this" refers to “on what the function was called”.

class Person {
  constructor(age) {
    this.age = age;
  }

  greet() {
    console.log("My age: " + this.age);
  }

  // this.age will return undefined because the callback function inside setTimeout is in a different lexical environment, fixing this with bind(this), apply and call
  // This bind method is a method worth remembering because it allows you to control the value of this
  greetWithDelay() {
    setTimeout(
      function () {
        console.log(this);
        console.log("My age: " + this.age);
      }.bind(this),
      1000
    );
  }

  // Also can be fixed with Arrow Functions; while in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope => lexical 'this'
  greetWithDelayWithArrowFunction() {
    setTimeout(() => {
      console.log(this);
      console.log("My age: " + this.age);
    }, 1000);
  }
}
arman = new Person(22);
arman.greet();
arman.greetWithDelay();
arman.greetWithDelayWithArrowFunction();

const classRoom = {
  teacher: "Arman",
  ask(question) {
    console.log(this.teacher, question);
  },
};
setTimeout(classRoom.ask, 1, "Can I go out?"); // undefined; different context
setTimeout(classRoom.ask.bind(classRoom), 1, "Can I go out?");

// call(), apply(), bind() -> change reference of 'this'
function newTest(a, b) {
  console.log(this);
}
newTest.call(obj, 5, 6);
newTest.apply(obj, [5, 6]);
newTest.bind(obj);

// Classes
// 'class' keyword is syntactic sugar for constructor functions and still uses prototypes and Prototype-Based Inheritance under the hood
class House {
  constructor(doors, windows) {
    this.doors = doors;
    this.windows = windows;
  }

  showData() {
    console.log(this.doors, this.windows);
  }

  // Static methods - do not need instantiation
  static test() {
    console.log("static called...");
  }
}
// The 'new' keyword constructs and 1-Creates an empty object 2-Assigns that empty object to the this value. 3-The function will inherit from functionName.prototype. 4-Returns the this if no Explicit return statement is used.

const obj1 = new House(2, 4);
obj1.showData();
House.test();

// Inheritance / SubClassing
class Apartment extends House {
  constructor(doors, windows, dogsAllowed) {
    super(doors, windows);
    this.dogsAllowed = dogsAllowed;
  }

  child() {
    console.log("Im Child CLass!");
  }

  // Method Overriding
  showData() {
    super.dogsAllowed = false;
    console.log(this.doors, this.windows, this.dogsAllowed);
  }
}
const obj2 = new Apartment(3, 4);
obj2.child();
obj2.showData();

// Object Destructuring
let { pCode } = obj;
console.log(pCode);

// create object using Object.create
const objectCreate = {
  greeting() {
    return `Hi, I'm ${this.name}`;
  },
};
const o = Object.create(objectCreate); // sets the prototype of "o" to be "n"
o.name = "Arman";
console.log(o.greeting()); // logs "Hi, I'm Mark"

// with 'Object.seal' object's properties will be immutable but with 'Object.seal' we can change existing properties

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

const person2 = { kind: "human" };
const user = Object.create(person2); // creates a new object which is linked to obj as its prototype.
user.name = "Arman";
console.log(user.kind);
Object.setPrototypeOf(user, { kind: "mammal" }); // allows you to change the prototype of an existing object.
console.log(user.kind);

const human = { kind: "human" };
function Person2(name) {
  this.name = name;
}
// 'prototype' sets the “to-be-assigned” prototype object of objects that are created with help of new Person()
Person2.prototype = human;
const Arman = new Person2("Arman");
console.log(Arman.kind);
console.log(Arman.__proto__ === Person2.prototype || human); // true
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
