// Prototype and Inheritance
// __proto__ is added by browsers
// is mechanism by which JS objects inherit features from other objects

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
Object.prototype.greetOverall = () => console.log("helllllooo");
console.log(boss.__proto__);
boss.greetOverall();
// Bad way for changing prototype
// boss.__proto__ = Employee;

// Prototype Chain:
// instructor <- person <- Object Prototype <- null

class BossClass extends EmployeeClass {
  // extend and super will assign prototype but in different way
  constructor() {
    super();
  }
}
