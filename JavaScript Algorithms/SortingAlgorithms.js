const basket = [2, 65, 34, 1, 7, 8];
console.log(basket.sort()); // JS convert int to string and then sort them so the result is strange!, also time/space complexity isn't guaranteed because of different implementations!
console.log(basket.sort((a, b) => a - b));

// Bubble Sort
// Best O(1) - Average O(n^2) - Worst O(n^2)
// Space Complexity O(1)
// educational purposes
function bubbleSort(arr) {
  const resultArray = [...arr];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];

      if (outerEl > innerEl) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
      }
    }
  }

  return resultArray;
}
console.log(bubbleSort([5, 10, -3, -10, 1, 100, 99]));

// Selection Sort
// Best O(n^2) - Average O(n^2) - Worst O(n^2)
// Space Complexity O(1)
// educational purposes
function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
console.log(selectionSort([5, 10, -3, -10, 1, 100, 99]));

// Insertion Sort
// Best O(n) - Average O(n^2) - Worst O(n^2)
// Space Complexity O(1)
// good for small or sorted data sets
function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < 1; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
console.log(insertionSort([5, 10, -3, -10, 1, 100, 99]));

// Quick Sort -> Divide & Conquer
// Best O(n log n) - Average O(n log n) - Worst O(n log n)
// Space Complexity O(log n)
// quick in general but not good for bad data sets
function quickSort(arr) {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArray.shift();
  const centerElementsArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
}
console.log(quickSort([5, 10, -3, -10, 1, 100, 99]));

// Merge Sort -> Divide & Conquer
// Best O(n log n) - Average O(n^2) - Worst O(n^2)
// Space Complexity O(n)
// good for long arrays and huge files but more code and more memory is required
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }

  return mergedArr;
}
console.log(mergeSort([5, 10, -3, -10, 1, 100, 99]));

// Non-Comparison Sort: Counting Sort, Radix Sort -> using 0/1 for sorting & only works for numbers
// Time Complexity O(n+k)
