// Linear Search
// go step by step and stop when element is found
// Best case O(1) - Average O(n) - Worst O(n)
function linearSearch(arr, element) {
  // == arr.find
  let index = 0;
  for (const item of arr) {
    if (
      typeof element === "object" &&
      element !== null &&
      element.name === item.name &&
      element.age === item.age
    ) {
      return index;
    }
    if (item == element) {
      return index;
    }
    index++;
  }
}

const arr = [5, 2, 7, 3, 10, 33];
const users = [
  { name: "arman", age: 22 },
  { name: "sogol", age: 35 },
];
console.log(linearSearch(arr, 10)); // return index
console.log(linearSearch(users, { name: "arman", age: 22 })); // return index

// Binary Search
// only work on sorted lists
// Best O(1) - Average O(log n) - Worst O(log n)
function BinarySearch(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}
// Recursive version
// O(log n)
function recursiveBinarySearch(sortedArr, element, offset) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (element === sortedArr[middleIndex]) {
    return middleIndex + offset;
  }

  if (sortedArr[middleIndex] < element) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }

  return recursiveBinarySearch(
    sortedArr.slice(startIndex, endIndex + 1),
    element,
    offset
  );
}

const sortedArr = [2, 3, 5, 7, 10, 33];
console.log(BinarySearch(sortedArr, 10));
console.log(recursiveBinarySearch(sortedArr, 2, 0));
