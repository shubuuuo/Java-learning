const score = 100
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.45346

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));
console.log(otherNumber.toExponential());


//  ++++++++++++++++++++ MATHS ++++++++++++++++++++ //

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(5.4));
console.log(Math.ceil(2.2));
console.log(Math.floor(2.9));
console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
