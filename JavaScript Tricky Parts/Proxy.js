// Proxy - used a lot in Vue! for controlling another objects
const newUser = { name: "Arman" };
const proxiedUser = new Proxy(newUser, {
  // It's a Trap!
  get(target, prop) {
    console.log(`${prop} read.`);
    // target is 'newUser' object
    return target[prop];
  },
});
console.log(newUser.name); // Arman
console.log(proxiedUser.name); // Arman
// Traps are methods which is declared in handler Proxy(obj, handler) and manage events that happens for our object (obj)
// e.g. get(), set(), has(), deleteProperty(), apply(), construct(), defineProperty(), getOwnPropertyDescriptor(), getPrototypeOf(), isExtensible(), ownKeys(), preventExtensions(), setPrototypeOf()

// Example of Proxy, negative index in JS Arrays:
function negativeArray(arr) {
  return new Proxy(arr, {
    get(target, index, receiver) {
      index = +index;
      return target[index < 0 ? String(target.length + index) : index];
    },
  });
}
const a = negativeArray([1, 2, 3, 4, 5]);
console.log(a[-1]); // 5
console.log(a[-2]); // 4
