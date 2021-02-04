// Bubble Sort
// Best O(1) - Average O(n^2) - Worst O(n^2)
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

// Quick Sort
// Best O(n log n) - Average O(n log n) - Worst O(n log n)
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

// Merge Sort - good for long arrays but more code and more memory is required
// Best O(n log n) - Average O(n^2) - Worst O(n^2)
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
