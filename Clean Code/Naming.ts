// Names should be meaningful - allows reader to understand code without going through it in detail -> provide more details without introducing redundancy

// Classes -> nouns, short phrases with adjective - describe the Object - avoid redundant suffixes
class User {}
class RequestBody {}
class SQLDatabase {} // more details - but in general avoid redundant information in names (modern IDEs have auto-completion)

// Variables & Constants -> nouns, short phrases with adjective
const user = new User();
let firstName = "Arman"; // Object, Number, String
let isValid = true; // Boolean - answer true/false

// Functions/Methods -> verbs, short phrases with adjective
function sendData() {} // describe operation
function inputIsValid() {} // or isValid()

// NameCasing: 1-snake_case (python) 2-camelCase (java, javascript) 3-PascalCase (python, java, javascript) 4-kebab-case html

// Some built in methods doesn't follow best practices e.g. date_today.strftime("%Y-%m-%d") in Python

//Avoid slang, unclear abbreviations and disinformation e.g. diePlease(), facePalm(), userList, n, ymdt, ...
const products = {
  remove() {},
};
products.remove();

// Choose distinctive name
class analytics {
  getDailyReport() {}
  getDataForToday() {}
  getRawDailyData() {}
}

// Be Consistent - e.g. getUsers/getProducts
function fetchProducts() {}
function fetchUsers() {}
