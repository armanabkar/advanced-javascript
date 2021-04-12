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
// another example
function fetchData(cb) {
  setTimeout(() => {
    let data = { pCode: 1001, pName: "Green" };
    cb(data);
  }, 800);
}
console.log("start");
fetchData(function (data) {
  console.log(data.pName);
  console.log("end");
});

// Promises - is a JS object
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");

    // reject("rejected");
    // //rejected
  }, 800);
});
promise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("finishing process"));
// Only those without error
Promise.all([promise]).then(() => console.log("all promises resolved!"));
// All will run one by one (even with error)
Promise.allSettled([promise]).then(() => console.log("all promises resolved!"));
// Fastest will return!
Promise.race([promise]);

// Example - Only works in browser
/*
fetch("https://jsonplaceholder.typicode.com/todos/1", {})
  .then((res) => res.json())
  .then(
    (res) => {
      res.json();
    },
    (error) => {
      console.log(error);
    }
  ) // when failed
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));
*/

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
  // await -> wait till promise is resolved
  await setTimer(3000);
  console.log("async timer works");
}
timer();
// another example
(async function test() {
  try {
    const result = await setTimeout(() => {
      console.log("resolved!");
    }, 800);
    return result;
  } catch {
    console.log("error!");
  }
})();

// AJAX - XMLHTTPRequest (XHR) - only works in browser
/*
let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/comments");
request.responseType = "json"; // "", "text"
request.send();
request.onload = function () {
  if (request.status === 200 && request.readyState === 4) {
    console.log(request.response);
    console.log(request.getResponseHeader);
  }
};
request.ontimeout = function () {
  console.log("timed out...");
};
*/

// Async Iterators & Generators
/*
for await (const iterator of object) {
}
*/
