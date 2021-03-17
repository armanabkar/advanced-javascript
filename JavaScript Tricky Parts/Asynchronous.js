// Asynchronous JavaScript
// Synchronously means execute one expression after another in order specified in the script code
// SetTimeout runs asynchronously
// JavaScript is single-threaded (only one action at a time) - but the browser/node isn't!

// Callbacks - e.g. setTimeout
addItForMe(800, 800, function (result) {
  console.log(result);
  // maybe more levels of nested callbacks here -> Callback Hell
});
function addItForMe(num1, num2, cb) {
  const result = num1 + num2;
  cb(result);
}

// Promises - is a JS object
const myPromise = new Promise((resolve, reject) => {
  // Pending
  setTimeout(() => {
    resolve("IT WORKS!");
    //fulfilled:

    // reject("rejected");
    // //rejected
  }, 2000);
});

// then executes in order
myPromise.then((data) => data).then((data) => console.log(data));

// Example - Only works in browser
// fetch("https://jsonplaceholder.typicode.com/todos/1", {})
//   .then((res) => res.json())
//   .then(
//     (res) => {
//       res.json();
//     },
//     (error) => {
//       console.log(error);
//     }
//   ) // when failed
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// Older APIs (like setTimeout) don’t use Promises but since you can create your own promises as well, you would be able to create a promise wrapper

// promisify apis:
function setTimer(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
setTimer(2000).then(() => console.log("setTimer completed!"));

// Async Await - use promisees under the hood
async function timer() {
  await setTimer(3000);
  console.log("async timer works");
}
timer();
