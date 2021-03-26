// A simplified array with enqueue and dequeue - FIFO (First In First Out) - Use case optimization
// Time Complexities: element access O(1) limited to first element - insertion at the end O(n) with Data Loss - insertion at the beginning O(1) - Insertion in Middle O(n) wit Data Loss - Search elements O(n) with pops Data Loss
// Queues are good because of fast operations, peak and ordered - but slow Lookup

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const queue1 = new Queue();
queue1.enqueue("Arman");
queue1.enqueue("Sogol");
queue1.enqueue("MaRaL");
console.log(queue1.toArray());
console.log(queue1.dequeue());

import { LinkedList } from "./LinkedList";
class QueueWithLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const queue2 = new QueueWithLinkedList();
queue2.enqueue("Arman");
queue2.enqueue("Sogol");
queue2.enqueue("MaRaL");
console.log(queue2.toArray());
console.log(queue2.dequeue());
