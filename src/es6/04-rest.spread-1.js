/* Spread Operator (Operador de expansion), copia, es decir nos sirve para copiar y expandir un elemento sin la necesidad de modificar el original. Su SINTAXIS ES*/

const numbers = [-12, 2, 3, 23, 43, 43, 2, 3];

console.log(...numbers); // Nos muestra el cada numero por separado // -12 2 3 23 43 43 2 3

// Ejemplo 2

const array = [..."Hola"];
console.log(array); // Array(4) [ "H", "o", "l", "a" ]

// Por que cuando le aplico spread al array realizado de la expancion de la palabra Hola, entonces no deja acceder a sus elementos si estos por su indice deberia permitirlo

// Enviar elementos en un array a una funcion 

const addNumbers = (a, b, c) => {
    console.log(a + b + c)
}

let numbersToAdd  = [1,2,3]

addNumbers (...numbersToAdd)// 6

// Si No se da como argumento a la funcion con el metodo spread, (...), la funcion tomara el primer elemento y los demas como undefined


// AÑADIR UN ARRAY A OTRO ARRAY
/* Normalmente para agregar nuevos elementos a de un array a otro se realiza de la siguiente manera: */

let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes']

let newUsers = ['Martha', 'Jaime', 'Laura']

users.push(newUsers[0], newUsers[1], newUsers[2])
console.log(users); //Array(8) [ "Javier", "David", "Rosa", "Juan", "Mercedes", "Martha", "Jaime", "Laura" ]

/*Con el spread operator podemos hacer lo mismo de esta manera */

users.push(...newUsers)

// Con esto modemos hacer lo mismo e igualmente utililzar otros metodos como el unshift, splice, etc.

// COPIAR ARRAYS (La ventaja es que si se  añade un nuevo elemennto al original al copia tambien se le añade)

let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]

console.log(arr2); // Array(4) [ 1, 2, 3, 4 ]

// CONCATENAR ARRAYS
/*Para concatenar se  utiliza el metodo concat para juntar los dos arrays, de la siguiente manera  */

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8]

var arrConcat = array1.concat(array2)
console.log(arrConcat); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Pero con el spread operator se puede hacer de esta manera y obtener el mismo resultado 

let arrConcat = [...array1, ...array2]
console.log(arrConcat); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// ENVIAR UN NUMERO INDEFINIDO DE ARGUMENTOS A UNA FUNCION (parametros REST), Esto se utiliza cuando no conocemos el numero de argumentos que vamos a recibir, de una ip etc.

const restParms = (...numbers) => {
    console.log(numbers)
}

restParms(1,2,3,4,5,6); // Array(6) [ 1, 2, 3, 4, 5, 6 ]

// LIBRERIA MATH, muestra el numero mayor dentro de un conjunto de elmentos.

const numbers1 = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers1))







