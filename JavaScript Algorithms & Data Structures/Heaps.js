// Min Heap are Trees where the parent node values are smaller or equal than child node values (for a 'Max Heap', it's the other way around) - so easy access to important values and great for building priority queues! - useful for algorithms that ordering is important
// Binary Heaps are good because of good time complexity, flexible size, priority and ordered - but slow lookup

// Example of heap:
// const heap = [250, 197, 85, 101, 12, 40, 15];

class MaxHeap {
  constructor() {
    this.heapElements = [];
  }

  insert(value) {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex] >
        this.heapElements[parentElementIndex]
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = value;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    }
  }

  process() {
    if (this.heapElements.length === 0) {
      return null;
    }
    if (this.heapElements.length === 1) {
      return this.heapElements.pop();
    }
    const topElement = this.heapElements[0];

    this.heapElements[0] = this.heapElements.pop();

    let currentElementIndex = 0;
    let leftChildIndex = 2 * currentElementIndex + 1;
    let rightChildIndex = 2 * currentElementIndex + 2;
    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[rightChildIndex] >= this.heapElements[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;
    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex] <=
        this.heapElements[childElementIndex]
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }

    return topElement;
  }
}

const heap1 = new MaxHeap();

heap1.insert(40);
heap1.insert(101);
heap1.insert(197);
heap1.insert(12);
heap1.insert(15);
heap1.insert(85);
heap1.insert(250);

heap1.process();
heap1.process();
heap1.process();

console.log(heap1);

// Lets build Priority Queue with Heaps!
// Time Complexity: Insertion element O(log n) - Process O(log n)
// So if the order doesn't matter, use Priority Queues with Heaps!

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueueWithHeap {
  constructor() {
    this.heapElements = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heapElements.push(newNode);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex].priority >
        this.heapElements[parentElementIndex].priority
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = newNode;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    }
  }

  process() {
    if (this.heapElements.length === 0) {
      return null;
    }
    if (this.heapElements.length === 1) {
      return this.heapElements.pop();
    }
    const topElement = this.heapElements[0];

    this.heapElements[0] = this.heapElements.pop();

    let currentElementIndex = 0;
    let leftChildIndex = 2 * currentElementIndex + 1;
    let rightChildIndex = 2 * currentElementIndex + 2;
    let childElementIndex =
      this.heapElements[rightChildIndex] &&
      this.heapElements[rightChildIndex].priority >=
        this.heapElements[leftChildIndex].priority
        ? rightChildIndex
        : leftChildIndex;
    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex].priority <=
        this.heapElements[childElementIndex].priority
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }

    return topElement;
  }
}

const heap2 = new PriorityQueueWithHeap();

heap2.insert("Clean up my room", 1);
heap2.insert("Do taxes", 53);
heap2.insert("Learn to code", 99);

console.log(heap2.process());

console.log(heap2);
