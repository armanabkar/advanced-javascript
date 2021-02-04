// Cartesian Product
// Time Complexity O(n*m) => O(n^2)
// Space Complexity O(n*m) => O(n^2)
function cartProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }

    for (const setBEl of setB) {
      product.push([...setAEl, setBEl]);
    }
  }

  return product;
}
// limitless
// Time Complexity O(n^x)
// Space Complexity O(n^x)
// x: num of arrays
function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

const colors = ["blue", "red"];
const sizes = ["m", "l"];
const styles = ["round neck", "v neck"];
console.log(cartProduct(colors, sizes));
console.log(cartesian(colors, sizes, styles));

// Permutations Without Repetitions
// Time Complexity: O(n!)
// Horrible time complexity! and probably crash your browser with larger arrays
function getPermutations(options) {
  const permutations = [];
  console.log("FN START");
  console.log(options);

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));
  // [['order food']]

  console.log("AFTER RECURSIVE STEP");
  console.log(partialPermutations);

  const firstOption = options[0];

  console.log("FIRST OPTION");
  console.log(firstOption);

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    console.log("OUTER LOOP");
    console.log(partialPermutation);

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
}

const todoListItems = [
  "walk the dog",
  "clean the toilet",
  "buy groceries",
  "order food",
  "do homework",
];
console.log(getPermutations(todoListItems));

// Permutations With repetition
// Time Complexity: O(n^r) => n is the number options, r is the length
function getPermutationsWithRepetition(options, length) {
  const permutations = [];

  if (length === 1) {
    return options.map((option) => [option]);
  }

  const partialPermutations = getPermutations(options, length - 1);
  // [[1], [2], [3]]

  for (const option of options) {
    for (const existingPermutation of partialPermutations) {
      permutations.push([option].concat(existingPermutation));
    }
  }

  return permutations;
}

const digits = [1, 2, 3, 4];
const resultLength = 3;
console.log(getPermutationsWithRepetition(digits, resultLength));
