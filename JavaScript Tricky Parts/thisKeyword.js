// "this" keyword
// this in strict mode wont refer to global object
// this refers to object on which a func is called and depends on its execution context
class Person {
  constructor() {
    this.age = 22;
  }

  greet() {
    console.log("My age: " + this.age);
  }

  // fixing this with bind(this), apply and call
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
