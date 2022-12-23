// TRAILING COMMAS

/* Consiste en utilzar comas sin valores dentro de un array, para crear esos espacios vacios y seguir aun asi con otros elementos del array */

const array = [24, 34, 25, 24, , , ,48];

console.log(array); // [24, 34, 25, 24, <empty items>, 48]
console.log(array.length); // 8 
