// Map
// have order and type, value to value mapping, iterable, has size property
let product = new Map();
product.set("pCode", "1001").set(1, "Apple"); // can be chained
product["price"] = 30; // not preferable because it wont be value
console.log(product);
console.log(product.get(1));
console.log(product.size);
for (const v of product.values()) {
  // product.entries()
  console.log(v);
}
// Convert object literal to map
let obj = {
  pCode: 1001,
  pName: "orange",
};
let objNew = new Map(Object.entries(obj));
console.log(objNew);
// Convert map to object literal
let objNew2 = Object.fromEntries(product.entries());
console.log(product.has("pCode"));

// Set
// Only unique and not repeating values, iterable
let names = new Set();
names.add("Arman");
names.add("Mary");
names.add("Arman");
names.add("Alin");
console.log(names);
console.log(names.size);
for (const name of names) {
  console.log(name);
}
names.forEach((name) => console.log(name));

// WeakMap, WeakSet
// null values will be garbage collected if there is no direct reference -> keys are weakly held - useful in DOM - there will be no memory leak
