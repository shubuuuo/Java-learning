// let score = 33;
let score = "33abc";
// let score = null

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1; // gives a true value
// let isLoggedIn = 0 | Gives a false value
// let isLoggedIn = "" | Gives a false value
// let isLoggedIn = "Shubham" | Gives a true value

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);


// Till lecture 6

// *************************OPERATIONS******************************** //

let value = 3
let negValue = -value
console.log(negValue);


// Arithmetics

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// Addition of strings 

let str1 = "Pokemon are"
let str2 = " Good"

let str3 = str1 + str2
console.log(str3);

// Addition of strings with numbers 

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Therefore we saw that you can add numbers before strings but not later string

// Refer to ECMA script to learn more about conversion.
// DO NOT write a messy code.

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 6 + 3

console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// Learn about increment along with pprefix and postfix from mdn