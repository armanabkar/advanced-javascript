// "this" keyword
// Context says where we are (which environment)
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

  // Also can be fixed with Arrow Functions; while in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope
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
