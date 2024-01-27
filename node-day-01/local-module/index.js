// const text = "hello world";
// const firstName = "Zahin";
// const greeting = `${text} ${firstName}!`;

// Loop hash
// for (let line = "#"; line.length < 8; line += "#") console.log(line);

// FizzBuzz
// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 == 0) output += "Fizz";
//   if (i % 5 == 0) output += "Buzz";
//   console.log(output || i);
// }

// require math.js
const math = require("./math.js");
// require time.js
const time = require("./time.js");

console.log("index.js is loaded");

// check os platform
console.log(process.platform);

console.log(math.add(2, 3));
console.log(math.substract(2, 10));

console.log(time.today);
console.log(time.month);
console.log(time.year);
console.log(time.time);
console.log(time.formatedTime);
