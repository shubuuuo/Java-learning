// Array

const myArr = [1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "Nagraaj", "Doga", "Kali"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array methods 

myArr.push(6)
myArr.push(7)
myArr.push(8)
// push adds an element in Array

myArr.pop()

// pop just removes the last element in Array

myArr.unshift(9)

// unshift shifts the given array into the first position.

myArr.shift()

// Shift removes the first Array and shifts the element.

console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.includes(19));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(23));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof myArr);

// Slice & Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
