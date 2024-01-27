console.log("array and loop");

// this is a repeation
// 10 times
// 1 till 10
// 1 + 1
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");
// console.log("I eat 1 muffin");

// increment @ iteration
// console.log("I eat 1 muffin");
// console.log("I eat 2 muffin");
// console.log("I eat 3 muffin");
// console.log("I eat 4 muffin");
// console.log("I eat 5 muffin");
// console.log("I eat 6 muffin");
// console.log("I eat 7 muffin");
// console.log("I eat 8 muffin");
// console.log("I eat 9 muffin");
// console.log("I eat 10 muffin");

// convert into loop
// 1. starting point, must be a number
// 2. end point, must be a boolean
// 3. interval changes, operation
// for (num = 1; num < 11; num = num + 1) {
// loop scope

// ITERATION #1
// num = 1
// 1 < 11 = true
//   console.log(num); // 1
// end scope
// num = 1 + 1
// num = 2
// move to next iteration with num = 2

// ITERATION 2
// num = 2
// 2 < 11 = true
// console.log(num); // 2
// num = 2 + 1
// num = 3
// move to next iteration with num = 3

// ITERATION 3
// num = 3
// 3 < 11 = true
// console.log(num); // 3
// num = 3 + 1
// num = 4
// move to next iteration with num = 4

// ITERATION 4
// num = 4
// 4 < 11 = true
// console.log(num); // 4
// num = 4 + 1
// num = 5
// move to next iteration with num = 5

// ....

// ITERATION 10
// num = 10
// 10 < 11 = true
// console.log(num); // 10
// num = 10 + 1
// num = 11
// move to next iteration with num = 11

// ITERATION 11
// num = 11
// 11 < 11 = false
// break the loop cycle
// global scope
// }

// for (
//   i = 1;
//   i <
//   11 /* The statement `i = i + 1` is incrementing the value of `i` by 1 in each
// iteration of the loop. It is equivalent to `i++` or `i += 1`. */;
//   i = i + 1
// ) {
//   if (i > 1) {
//     console.log(`I eat ${i} muffins`);
//   } else {
//     console.log(`I eat ${i} muffin`);
//   }
// }

// for loop with 10 iteration, if number even = console log "even", if odd number = console log "odd"
// for (i = 1; i < 11; i++) {
//   // modulo : 7 / 2 = 3 remainder 1
//   // js : 7 % 2 = 1
//   //  x % 2 === 0 --> x = even number
//   //   console.log(i, ">>>", i % 2, i % 2 === 0);
//   let isEven = i % 2 === 0;
//   if (isEven) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// #1 pattern into loop
// console log pattern
//1. foo
//2. foo
//3. bar
//4. foo
//5. foo
//6. bar
//7. foo
//8. foo
//9. bar
//10. foo
// for (i = 1; i < 11; i++) {
//   let isMultiple3 = i % 3 === 0;
//   if (isMultiple3) {
//     console.log("bar");
//   } else {
//     console.log("foo");
//   }
// }

// #2 pattern into loop
// console log pattern
//1. foo
//2. bar
//3. foo
//4. foo
//5. bar
//6. foo
//7. foo
//8. foo
//9. bar
//10. foo
//11. foo
//12. foo
//13. foo
//14. bar
