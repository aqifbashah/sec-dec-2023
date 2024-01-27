console.log("hello from script.js");
console.log("test 1234");

// declare a variable
// var is outdated, use let instead
// var person = "John";
// var age = 25;
let person = "John";
let age = 25;

// print variable
console.log(person);
console.log(age);

// reassign or change variable with new value
person = "Jane";
age = 30;

// print variable
console.log(person);
console.log(age);

// declare a constant
// const is used for values that will not change
const pi = 3.1415;
console.log(pi);
//pi = 1.011; // this will throw an error
const arifBirthYear = 1993;

// value and data types
// 1. string
// declare string by using single or double quotes
let firstName = "John";
let lastName = "Doe";

// 2. number
// integer or decimal
// declare number without quotes
let myAge = 25;
let myHeight = 1.75;

// 3. boolean
let isMarried = true;
let isRaining = false;

// 4. null
let job = null;

// 5. undefined
// let hobby
let hobby = undefined;
console.log(hobby);

// determine data type
console.log(firstName, ">>>", typeof firstName);
console.log(myAge, ">>>", typeof myAge);
console.log(isMarried, ">>>", typeof isMarried);
console.log(job, ">>>", typeof job);
console.log(hobby, ">>>", typeof hobby);

// assign dom element to variable
let h1 = document.querySelector("h1");
function changeText() {
  console.log("change text");
  h1.innerText = "hello mars";
}
