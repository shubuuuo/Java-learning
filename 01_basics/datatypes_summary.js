// Primitive

// 7 types : String, boolean, number, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 48983272983n


// Reference(Non Primitive)

// Objects, Array, Functions

const heroes = ["Shaktimaan", "NaagRaj", "Doga"];
let myObj = {
    name : "shubu",
    age : 18,
}

const myFunction = function(){
    console.log("Hello World");
}

// const pokemon = 2948

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);
console.log(typeof pokemon);

// Therefore, Type of value --> Result
// undefined -> "Undefined"
// Null = "object"
// Boolean = "Boolean"
// number = "number"
// string = "string"
// object(Native, does not implement) = "object"
// object(Native or host, does implement) = "function"
// object(host, does not implement) = Implementation defined except may not be "undefined", "number", "boolean" or "string"

// http://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "Shubham Maurya"

let myBitchName = myName
myBitchName = "Mervin Tipulli"

console.log(myName);
console.log(myBitchName);

let userOne = {
    email: "linyorg46@gmail.com",
    upi: "shubham@ybl"
}

let userTwo = userOne

userTwo.email = "Mervinbitch@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);