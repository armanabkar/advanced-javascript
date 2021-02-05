// A simplified array - push on the top and pop from the top - LIFO (Last In First Out) - Use case optimization
// JavaScript Stack -> only one function get call
// Time Complexities: element access O(1) - insertion at the end O(1) - insertion at the beginning O(n) with pop of all elements (Data Loss) - Insertion in Middle O(n) wit pops (Data Loss) - Search elements O(n) with pops (Data Loss)
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

let stack1 = new Stack();
stack1.push("Cook dinner");
stack1.push("Wash dishes");
stack1.push("buy ingredients");
console.log(stack1.pop());
console.log(stack1.toArray());

import { LinkedList } from "./LinkedList";
class StackWithLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

let stack2 = new StackWithLinkedList();
stack2.push("Cook dinner");
stack2.push("Wash dishes");
stack2.push("buy ingredients");
console.log(stack2.pop());
console.log(stack2.toArray());
