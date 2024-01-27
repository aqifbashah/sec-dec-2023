//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it

// BMI calculator web app
// BMI is calculated by dividing a person's weight in kilograms by the square of his/her height in meters
// BMI = kg/m^2
// BMI = kg/m/m
// BMI = kg/(m*m)

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40

// how our app will work:
// prompt user for weight in kilograms
// prompt user for height in meters
// calculate BMI based on user input (weight and height)
// display BMI at h2 with id="bmiValue"
// display BMI category at h2 with id="bmiCategory"

// case conversion
// 1. camelCase - first word is lowercase, second word is uppercase
// example: myNameIsJohn, myAgeIs20, myHeightIs170, myWeightIs70
// usually used in javascript and html id

// 2. snake_case - all words are lowercase, words are separated by underscore
// example: my_name_is_john, my_age_is_20, my_height_is_170, my_weight_is_70

// 3. kebab-case - all words are lowercase, words are separated by dash
// example: my-name-is-john, my-age-is-20, my-height-is-170, my-weight-is-70
// usually used in html class

// 4. PascalCase - all words are uppercase, words are separated by uppercase
// example: MyNameIsJohn, MyAgeIs20, MyHeightIs170, MyWeightIs70

// example change h2 with id="bmi-value" to 20
// hashtag is used to select id
let h2BmiValue = document.querySelector("#bmiValue");
let newValue = prompt("Enter new value");
h2BmiValue.innerText = newValue;
