// Minimize the number of parameters - none is great, more than 2 arguments is difficult to understand and call so avoid if possible - and always avoid functions with more than 3 arguments (can be separated) - order of arguments should make scene
add(2, 3);
function add(n1, n2) {
  return n1 * n2;
}

// How to deal with too many values
class User {
  name: any;
  age: any;
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
  }

  update() {}
}
const user = new User({ name: "arman", age: 22 });

// Try to output arguments especially if they are unexpected -> use OOP or better naming
addId(); // instead of createId, because it modifies
function addId() {}

// Functions should be small and 'do only one thing' (depends of level of abstractions) - huge functions can be splitted
function greet() {
  console.log("Hello World!");
}
// High level abstractions: isEmail(email)
// Low level abstractions: email.include("@")
// Functions should do work that's one level of abstraction below their name - don't mix levels of abstractions e.g. :
function saveUser() {
  isValidEmail();
  isValidName();
  saveToDB();
}
// Lower level operations:
function saveToDB() {}
const isValidEmail = (): boolean => true;
function isValidName() {}

// Extract code that works on the same functionality
user.update(); // instead of user.setName/setAge
// Extract code that requires more interpretation than the surrounding code
if (isValidEmail()) {
}

// Reusability matters => DRY!: don't write same code more than one place (copy/pasting code)
// Split functions reasonably
function updateUser() {
  isValidEmail();
}
function fetchUser() {
  isValidEmail();
}

// Keep functions pure; same inputs generates same output and no side effects (at least most of them in functional programming) e.g.:
function generateId(username) {
  const id = "id_" + username;
  return id;
}
function functionWithSideEffects() {
  console.log("Hello World"); // Side Effect
  user.update(); // Side Effect
}
// Name of a function should signal or imply that a side effect is likely to occur e.g. saveUser(), createUser(), showMessage()
// Functions shouldn't have unexpected side effects -> choose better name or move the side effect to another function

// Unit Testing helps! -> If you can easily test a function, you should split it because it probably does many things and have side effects
// instead of writing all of these in on function;
function addProduct() {}
function validateProductData() {}
function saveProduct() {}
