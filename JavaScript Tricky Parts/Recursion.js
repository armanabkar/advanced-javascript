// Recursion
function factorialRecursion(n) {
  // base + recursive step
  return n === 0 ? 1 : n * factorialRecursion(n - 1);
}

console.log(factorialRecursion(4));

// Traversal using recursion
const filesystem = {
  documents: {
    files: ["tax.txt", "resume.pdf", "picture.png"],
  },
  work: {
    urgent: {
      files: ["project-b.pdf"],
    },
    lowPrio: {
      files: ["budget.xlsx"],
    },
  },
};
// Use recursion for avoiding nested loops
function getFilenames(fs) {
  const allFiles = [];
  for (const identifier in fs) {
    if (Array.isArray(fs[identifier])) {
      allFiles.push(...fs[identifier]);
    } else {
      allFiles.push(...getFilenames(fs[identifier]));
    }
  }
  return allFiles;
}
