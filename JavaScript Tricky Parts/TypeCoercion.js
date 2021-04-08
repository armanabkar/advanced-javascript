// Type Coercion
[].toString(); // ""; toString() will convert everything to string
console.log(typeof String(null));
+"1"; // toNumber() will convert everything to 0 except objects and arrays
!!true; // toBoolean(); falsy_values: 0, -0, null, NaN, false, undefined

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

// Context: Data structures with information about execution (e.g. variable values)

console.log(1 + parseInt("6")); // Explicit Coercion
console.log(1 + "6"); // Implicit Coercion

console.log(isNaN("100")); // false, becurse it does type coercion

// Equality
console.log(1 == "1"); // abstract; check value (with coercion if needed)
console.log(1 === "1"); // strict; check value and type
