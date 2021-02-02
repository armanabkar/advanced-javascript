// Window = DOM (document) + BOM (History, Screen, ...) + JavaScript
// document is an object of 'windows'
// setTimeout() and ... are methods of 'window'
console.log(window); // this

// Timer-based events
setInterval(() => {
  // Digital Clock
  document.getElementById("txt").innerHTML = new Date();
}, 1000);

// Event Bubbling: from bottom to top
// Event Capturing: top to bottom
// addEventListener("click", btnClick, true);
function btnClick() {
  event.stopPropagation();
  alert(event.target);
}

// Event Delegation
function mainCLick() {
  console.log(event.target);
  console.log(event.target.tagName);
  console.log(event.target.innerHTML);
}

// Navigate through DOM
// Everything is Node in DOM Tree
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.hasChildNodes());
console.log(document.body.firstElementChild.nodeName);
console.log(document.body.firstElementChild.nodeType);
// .parentNode / siblings

console.log(document.getElementById("txt"));
console.log(document.getElementsByClassName("txt"));
// document.getElementsByName("sss") <a name="sss">

// QuerySecretors
// getElementBy has better performance
console.log(document.querySelector(".txt"));
console.log(document.querySelector(":hover"));

// Events
const btn = document.getElementById("event");
// event object
btn.onclick = (event) => console.log(event);
// Mouse Events
btn.addEventListener("click", () => console.log("hello")); //event, function, useCapture
btn.addEventListener("mouseover", () => console.log("over"));
function handler() {
  let msg;
  if (event.altKey) {
    msg = "[ALT]";
  }
}
btn.oncontextmenu = () => false; // Disable right click
// Keyboard Events
addEventListener("keydown", () => console.log(event.code, event.key));
// Input Element Events
document.getElementById("input").onfocus = () => console.log("focus!");
document.getElementById("input").onchange = () => console.log("changed!");
document.getElementById("input").onblur = () => console.log("blur!");
document.getElementById("input").oncut = () => console.log("cut!");
document.getElementById("input").oncopy = () => console.log("copy!");
document.getElementById("input").onpaste = () => false; // prevent paste!

// ClientXY -> what client sees - PageXY -> with navigation and scrollbar, ScreenXY -> entire screen
