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

// 'this' - depends where it is placed!
// doesn't work with arrow functions so don't use it in objects or classes if you need 'this'
console.log(this); // Current Context - Window GlobalObject
obj.test();

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
