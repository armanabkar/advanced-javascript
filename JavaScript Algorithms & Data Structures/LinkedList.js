// First element is head and last is tail - Every element knows about the next element (with pointer or reference) and contains node (value) - vert efficient sizing and insertion at start and end of the list
// The main reason was memory management becurse it was dynamic but nowadays its not primary issue but still useful for lot of insertions at the beginning
// Doubly Linked Lists have extra pointer to previous node, more efficient in lookup O(n), Singly Linked Lists have better Space Complexity
// Linked Lists are good because of fast Insertion, deletion, ordered and Flexible size - but slow Lookups and require more memory
// Time Complexities: element access O(n) - insertion at the end O(1) - insertion at the beginning O(1) - Insertion in Middle O(1) + Search time - Search elements O(n)

export class LinkedList {
  constructor() {
    this.head = null; // first element
    this.tail = null; // last element
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    // for first node
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // for last node
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedItem;
  }

  toArray() {
    const elements = [];

    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

let linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("hello world!");
linkedList1.append("im arman");
linkedList1.append(22);
linkedList1.prepend(true);
linkedList1.delete(true);
linkedList1.insertAfter(2, 1);
console.log(linkedList1.find(2));
console.log(linkedList1.toArray());
