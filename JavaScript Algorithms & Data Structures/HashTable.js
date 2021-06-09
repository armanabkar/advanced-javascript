// Hash Tables are good because fast lookups, inserts and flexible keys - but unordered (ordered in python dic) and slow key iterations
// Existing JS Object is implemented as as hash table! - key/value pairs - consist of input + hashing function + hash table - great for quick access
// Keys are hashed and stored with values - Hash Collisions slows downs reading and writhing
// Time Complexities: element access O(1) in theory, O(n) with lots of hash collision - insertion at the end O(1), O(n) with lots of hash collision - insertion at the beginning O(1) - Insertion in Middle O(1) - Search elements O(1), O(n) with lots of hash collision

// Why we need hash tables?
// Time Complexity O(n^2)
function findFirstRepWithLoop(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
}
console.log(findFirstRepWithLoop("arman"));
// Time Complexity: O(n)
function findFirstRepWithObject(str) {
  const table = {};
  for (const char of str) {
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }
}
console.log(findFirstRepWithObject("arman"));

// There are different ways but at the end, ALWAYS use JS Object because it's the most efficient

class BasicHashTable {
  constructor() {
    this.size = 16;
    this.buckets = Array(16).fill(null);
  }

  _hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this._hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this._hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

class HashTableWithChaining {
  constructor() {
    this.size = 16;
    this.buckets = Array(16)
      .fill(null)
      .map(() => []);
  }

  _hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this._hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });
    if (storedElement) {
      storedElement.val = value;
    } else {
      bucketArray.push({ key, val: value });
    }
  }

  get(key) {
    const keyHash = this._hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });
    return storedElement;
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

class HashTableWithOpenAddressing {
  constructor() {
    this.size = 100;
    this.buckets = Array(100).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    let keyHash = this.hash(key);
    if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
      this.buckets[keyHash] = { key: key, val: value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }
      this.buckets[keyHash] = { key: key, val: value };
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    for (let i = keyHash; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        continue;
      }
      if (this.buckets[i].key === key) {
        return this.buckets[i].val;
      }
    }
    return undefined;
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table1 = new BasicHashTable();
for (const char of "arman") {
  table1.set(char, char);
}
for (const char of "hello") {
  table1.set(char, char);
}
for (const char of "does this work") {
  table1.set(char, char);
}
console.log(table1.showInfo());
const table2 = new HashTableWithChaining();
for (const char of "arman") {
  table2.set(char, char);
}
for (const char of "hello") {
  table2.set(char, char);
}
for (const char of "does this work") {
  table2.set(char, char);
}
console.log(table2.showInfo());
const table3 = new HashTableWithOpenAddressing();
for (const char of "arman") {
  table3.set(char, char);
}
for (const char of "hello") {
  table3.set(char, char);
}
for (const char of "does this work") {
  table3.set(char, char);
}
console.log(table3.showInfo());

function firstRecurringCharacter1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) return input[i];
    }
  }

  return undefined;
}
// use hash tables to improve time complexity
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }

  return undefined;
}
console.log(firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4])); // O(n^2)
console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])); // O(n)

// Common Interview question
function itemsInCommon(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr1.length; j++) {
    if (obj[arr2[j]]) return true;
  }

  return false;
}

console.log(itemsInCommon([1, 3, 5], [2, 4, 5]));
