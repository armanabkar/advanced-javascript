// "this" keyword
// this in strict mode wont refer to global object
// this refers to object on which a func is called and depends on its execution context
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
  constructor() {
    this.age = 22;
  }

  greet() {
    console.log("My age: " + this.age);
  }

  // fixing this with bind(this), apply and call
  // This bind method is a method worth remembering because it allows you to control the value of this
  greetWithDelay() {
    setTimeout(() => {
      console.log(this);
      console.log("My age: " + this.age);
    }, 1500);
  }
}
arman = new Person();
arman.greet();
arman.greetWithDelay();
