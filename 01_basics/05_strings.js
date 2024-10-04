let Intro = "Hello" + " " + "World"
console.log(Intro);

const name = "Shubham"
const age = 18
console.log(name + " is " + age + " years old.");

// The Above syntax of code is outdated and doesn't get used much nowadays. 
// The following is how the code format is writtern now 

// We will use "back text" and string interpolation 

console.log(`Hey! My name is ${name} and everyone consider me ${age} years old.`);

const gameName = new String('Shubham-poke')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

// Write an article on Strings on console.

const newString = gameName.substring(0, 7)
console.log(newString);

/* 
We can't use (-ve) values in substring as slice.
If we do then substring will ignore that value and simply start from 
zero
*/

const anotherString = gameName.slice(-9, 7)
console.log(anotherString);

const newStringOne = "    Shubham     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/wikipedia/Shubham%20Maurya"

console.log(url.replace('%20', '-'));

console.log(url.includes('Shubham'));
console.log(url.includes('Sundar'));

const Pokemaine = "We-Are-The-Warriors"
console.log(Pokemaine.split('-'));