console.log(" if, else if, else ladder");
console.log();

let age = 6;
let grase = 2;

if (age > 18) {
  console.log("You can drive!");
} else {
  console.log("You cannot drive!");
}

//Operators in JS
let num1 = 10;
let num2 = 20;
console.log("num1 : " + num1);
console.log("num 2 :" + num2);
// Arthimatic operator
console.log("num1 + num2 : " + (num1 + num2));
console.log("num1 - num2 : " + (num1 - num2));
console.log("num1 * num2 : " + num1 * num2);
console.log("num1 / num2 : " + num1 / num2);
console.log("num1 ** num2 : " + num1 ** num2);
console.log("num1++: " + num1++); // The  ans is 10 Beacuse  of the number is alwaraday 10 and when we ++ it it's stable if we excuate the same statements aganin than it update by 1
console.log("+num1: " + +num1);

//  Assignment Operator
num1 += num2;
/*  num1 -= num2;
    num1 *= num2;
    num1 **= num2; 
    num1 %= num2;
*/
console.log("num1= num1+num2 : " + num1);

// Conditional Operator
// ==== is used to comp- type and number
if (num1 == num1) {
  console.log("Equel");
} else if (num1 >= num2) {
  console.log("Greater");
} else {
  console.log("false statement");
}

let n3 = num1 < num2 ? console.log("Greater") : console.log("Not Greater");

// Practice
console.log("Practice ");
// 1
let p_age = 14;

if (p_age >= 10 && p_age <= 20) {
  console.log(true);
} else {
  console.log(false);
}

// 2
let key = 3;
switch (key) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  case 4:
    console.log("D");
    break;
  default:
    console.log("Yu Entered wrong choice ! plz entered correct choice...");
    break;
}

// 3
let number = 10;
if (number % 2 == 0) {
  console.log("Number is divisible by 2");
} else if (number % 3 == 0) {
  console.log("Number is divisible by 3");
} else {
  console.log("Number is not divisible by 2 or 3 ");
}

//4
if (number % 2 == 0 && number % 4 == 0) {
  console.log("Number is divisible by both 2 and 4");
} else {
  console.log("Number is not divisible by 2 and 4 ");
}

// 5
let Result =
  age >= 18 ? console.log("you can drive") : console.log("You cannot drive");
