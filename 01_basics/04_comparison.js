// Comparisons

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Comparing two different data types

// console.log("2" > 1);
// console.log("2" < 1);
// console.log("2" == 1);
// console.log("2" >= 1);

// WARNING! = Comparing two different data types might not give the same expected results always.
// For example: TypeScript, It is a language which has a strict rule of not letting user to compare two different type of values.

// Another example:

console.log(null > 0);
console.log(null > -1);
console.log(null >= 0);
console.log(null == 0);

// Now, one might notice that there is different types of result, hence not predictible.
// Therefore, lets find the reason for that.
// Equality check(==) & Comparisons(< >) work differently.
// Comparisions treat "null" as a number and convert it into 0.
// That's why "null == 0" is false and "null > -1" is true

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// In the case of "Undefined" The comparison or equality always gives false result.

// "===" it is called strict check

console.log(2 === "2");

// Here the result is false, Because the strict check(===) doesn't let the object convert in order to make comparison.
// Instead, It strictly compares and as they are different functions... They give false value.
