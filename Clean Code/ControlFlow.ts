// Avoid deep nesting - Using Factory Functions & Polymorphism, Prefer Positive Checks (e.g. isEmpty), Utilize Errors
// Also operations should be in the same level of abstraction

let firstName = "Arman";
function checkSth() {
  // Guards - removing unnecessary nesting
  if (firstName === "") {
    return;
  }
  if (firstName.length === 0) return; // Guard
}

// Extract checks to separate functions and use proper name (positive):
function isEmpty() {} // not isNotEmpty()
function isEmail() {}

// Throwing + handling errors can replace if statements and lead to more focused functions, if something is an error, make it and error!
function handler() {
  if (!isEmail) {
    // Use built-in (real) errors instead of returning object with error and its message
    const error = new Error("Invalid Input");
    // error.code = 422;
    throw error;
  }
}
// Error handling is one thing!
function saveUser() {}
try {
  saveUser();
} catch (error) {
  console.log(error);
}

// Factory functions is a function that produce something (objects, numbers, ...) e.g.
function getTransactionProcessor(method = "Money") {
  let processor = { payment: null, refund: null };
  // Polymorphism
  if ((method = "PayPal")) {
    (processor.payment = "PayPal"), (processor.refund = true);
  }

  return processor;
}
// Use default parameter for getting rid of extra if checks
