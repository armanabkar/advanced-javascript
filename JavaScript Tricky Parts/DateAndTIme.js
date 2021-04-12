// Starts from 1st January 1970
// "YYYY-MM-DDTHH:mm:ss.sssZ"
const date = new Date();
date.setFullYear(2020);

const customDate = Date.parse("2020");
console.log(customDate);

console.log(date.getMilliseconds());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date);
