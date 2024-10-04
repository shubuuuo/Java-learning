// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myNewCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myNewCreatedDate.toLocaleString());

// let otherDate = new Date("2023-01-23")
let otherDate = new Date("02-23-2023")
console.log(otherDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

