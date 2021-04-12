// Can have any DataType
let arr = [4, 7, 9, "Hi!", true];
console.log(arr[2]);

// check if a value is an Array
console.log(Array.isArray(5), Array.isArray([])); // logs false true

// Methods
arr.pop();
arr.shift();
arr.unshift();
arr.splice(2, 1, "new");
arr.push("new value");

// Traversal in array
// in -> index, of -> value
for (const i of arr) {
  console.log(i);
}
// Another way:
arr.forEach((i) => console.log(i));

// Searching
// filter, map -> return new Array
console.log(arr.indexOf("new")); // returns index
console.log(arr.includes("new")); // true or false
console.log(arr.find((elm) => elm > 100));
console.log(arr.filter((elm) => elm > 0));

// map()
console.log(arr.map((elm, i, array) => Math.sqrt(elm)));

// reduce() - reduceRight(): in another direction
console.log(
  arr.reduce((accumulator, current, index, array) => {
    return accumulator + current;
  }, 10) //initial value
);

// Sorting
console.log(arr.sort());

// Destructuring
// can do with functions
let [a, b, c, d, e = 10] = arr;
console.log(a, b, c, d, e);
