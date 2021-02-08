// (c) Arman Abkar

// Comments generally should be avoided

// Avoid redundant comments e.g. 'this is a user'
// Avoid dividers/blocks e.g. ===============
// Avoid Commented-Out Code - now days we use version control so don't keep old codes

// Good Comments: Legal Information, Warnings (e.g. only works in browser), Necessary explanations, TODO notes, Documentation (Doc strings)

// Code formatting improves readability and transports meaning: Vertical/Horizontal formatting - We have language specific rules

// Vertical Formatting: code should be readable like an essay, without many jumps - consider splitting files; different concepts should be separated, related concepts close to each other
greet(); // in JS, functions can be called before their declarations
function greet() {}

// Horizontal Formatting: Shouldn't be scrollable - Use indentations - break long statements - don't use unreadable long names
class DiskStorage {
  constructor(storageDirectory) {
    this.setupStorageDirectory();
  }

  setupStorageDirectory() {}
}
