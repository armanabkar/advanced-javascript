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
// 'class' keyword is just a syntactic sugar for factory functions
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
// The 'new' keyword constructs and returns an object (instance) of a constructor function and it binds property or function which is declared with this keyword to the new object.
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
