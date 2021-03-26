// Arrays are good because fast lookups, push/pop and ordered - but slow inserts, deletes and fixed size (fixed sized arrays)

class customArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i--) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr1 = new customArray();
arr1.push("Hi!");
arr1.push("Bye!");
// arr1.pop();
arr1.delete("Bye!");
console.log(arr1);

// Use Arrays for Strings interview questions;
// Just understand and explain pros and cons of each solution
function reverse1(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") "not valid input";

  return str.split("").reverse().join("");
}
const reverse2 = (str) => [...str].reverse().join("");
