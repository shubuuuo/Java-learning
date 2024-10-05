const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

/* 
Pushes one array into another.. But, it has one loophole.
the loophole is that when it pushes then the array that is pushed
becomes one single array as a output intead of being a spread out value.
Therefore we have to use the below method to access the given array.
*/

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

/* 
But the problem is that this method is not really compatible with complicated coding.
Hence, we use concat.
*/

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// We need to declare a new value to use concat

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Another way to spread out array is to use flat.
// Although we shouldn't use infinity in it but we took it granted in this condition rather than giving it a specific value.



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));