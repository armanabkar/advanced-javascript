// Type Coercion
console.log(3 + "2"); // 32 - String is safer value
console.log(3 + Number("2")); // 5
// true = 1 / false = 0
console.log(true + 1 + false); // 1 + 1 + 0
console.log(12 / "3"); // 4 but + is different
console.log(5 > "hi"); // converts both to string
/// 0123456789abcdefghi...
console.log("hi" > true); // NaN > 1 => false
// Everything is truthy except
console.log(false, null, undefined, 0, -0, "", NaN);
console.log(true && "Yeah Buddy!");
console.log(1 || "zero");
const myName = "Arman";
console.log(!!myName); // convert to boolean
// 1-toPrimitive() 2-toString() 3-
console.log(["2"] + 1);
// [object Object]
console.log({} + "this works");
console.log(typeof +"1"); // convert string to int

function factorial(n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * (n - i);
  }
  return result;
}

// Context: Data structures with information about execution (e.g. variable values)
