// Using ES5 CommonJS
// export
exports.isNull = function (val) {
  return val === null;
};
module.exports = Helpers; // another way
// import
const helpers = require("./helpers.js");

// Using ES6 Modules
// You need server for using export/import in browsers
// Export
export function test() {
  console.log("test");
}

// Another way exporting
export { sum, test as test1 };

// Named Import (multiple export/imports) - if all the modules wont be used, use named import/exports
import { test } from ".";
// import all modules
import * as calc from ".";

// Default export/import
// One per each file
import test from ".";
export default function test() {
  console.log("test");
}
