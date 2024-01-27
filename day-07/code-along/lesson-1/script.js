// conditional statements
// if, else if, else

// truthy and falsy values

// truthy values
// let testValue = true; // boolean
// let testValue = "yes"; // string
// is testValue = 1; // number
// let testValue = {}; // object

// falsy values
// let testValue = false; // boolean
// let testValue = ""; // string
// let testValue = 0; // number
// let testValue = null; // null
// let testValue = undefined; // undefined
// let testValue = NaN; // NaN

// console.log(testValue);

// if (testValue) {
//   // true scope
//   console.log(testValue, ">>>", "The value is Truthy");
// } else {
//   // false scope
//   console.log(testValue, ">>>", "The value is Falsy");
// }

alert("Hello world");
let fname = prompt("What is your name?");
let lname = prompt("What is your last name?");
let birthYear = prompt("What is your birth year?");
let age = 2023 - birthYear;
let drivingStatus;

if (age >= 18) {
  drivingStatus = "I can drive";
} else {
  drivingStatus = "I can't drive";
}

// Hello <name>, welcome to my website

// concatination of strings
// by using + operator
// let message =
//   "Hello" +
//   " " +
//   fname +
//   " " +
//   lname +
//   " " +
//   "welcome to my website" +
//   "!" +
//   " " +
//   "You are" +
//   age +
//   "years old";

// by using template literals
// using backticks `` and ${} syntax
let message = `Hello there, my name is ${fname} ${lname} and I am ${age} years old and my driving status is ${drivingStatus}`;
console.log(message);
