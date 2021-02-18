// If you use var i, it will be available outside
for (let i = 0; i <= 5; i++) {
  // Now we have block scope with let i;
  // You cant use const
  console.log(i);
}

const user = { name: "Arman", age: 22 };
user.__proto__.test = 5;

// Looping through keys of object
for (const key in user) {
  // only own properties
  if (user.hasOwnProperty(key)) {
    console.log(key);
    // console.log(user[key]);
  }
}

// Looping through values of object
for (const value of Object.entries(user)) {
  // Object.keys(user);
  // Object.values(user);
  console.log(value);
}

const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

// For Each has worser performance than other options
numbers.forEach((num, index) => {
  console.log(num, index);
});
