// CallBack Functions
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

// Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
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

// AsyncAwait
// await -> wait till promise is resolved
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

// AJAX - XMLHTTPRequest (XHR)
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

// fetch() API for AJAX calls - only in browsers
async function fetchDataWeb() {
  let data;
  // if you don't set second param, default is GET
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  // with AsyncAwait
  if (response.ok) {
    data = await response.json(); // .text, .blob
    console.log(data);
  }
  console.log(response.status);
}

// Async Iterators & Generators
for await (const iterator of object) {
}
