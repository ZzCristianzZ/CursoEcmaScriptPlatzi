// QUE SON LOS GENERADORES

/*Los generadores son funciones especiales que pueden pausar su ejecucion, y luego continuar en el punto que quedaron. 

Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

Cómo utilizar generadores

La sintaxis de los generadores comprende lo siguiente:

La palabra reservada function* (con el asterisco al final).
La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
Crear una variable a partir de la función generadora.
El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

*/

function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}

// COMO UTILIZAR FOR OF Y FOR IN

/*Es una nueva forma de ciclo que recorre iterables, como arrays */


// -------- ITERAR ARRAYS CON EL FOR OF ----- 


const array = [5, 4, 3, 2, 1]

for (let numero of array) {
  console.log(numero) // 5 4 3 2 1
}

//Esto en palabras mas sencillas significa que por cada numero en el array muestre el numero; Por consecuente nos muestra cada VALOR (No su indice), del array.

// Otro ejemplo del uso del valor de cada indice del array 

for (let numero of array) {
    valor *= 2 
    console.log(numero) // 10 8 6 4 2
  }
   
  console.log(array) // [ 5, 4, 3, 2, 1 ]

// Mas sin embargo si utilizamos el (for in) en los arrays, no dara error pero estaremos trabajando con los indices mas no con sus valores.

const array1 = [5, 4, 3, 2, 1]

for (let elemento in array1) {
  console.log(elemento) // '0' '1' '2' '3' '4'
}

// ------ ITERAR CON OBJETOS CON EL FOR IN ------

  // NOTA IMPORT!! : No podemos iterar de esta manera (for of) un objeto, ya que estos no son iterables por defecto, y nos dara error.Mas sin embargo si utilizamos el (for in) este recorrera las propiedades del objeto (las propiedades de un objeto se definen como pares clave.valor).

// Iterar con las Claves de un objeto

const objeto = { a: 1, b: 2, c: 3 }

for (let elemento in objeto) {
  console.log(elemento) // 'a' 'b' 'c'
}
// Iterar con los valores de un objeto

let objeto1 = { a: 1, b: 2, c: 3 }

for (let valor  in objeto1) {
  console.log(objeto1[valor]) // 'a' 'b' 'c'
}

// DIFERENCIA ENTRE LOS DOS

// La diferencia consiste en que el For of itera con los valores de una secuencia de datos, mientras que el for in itera a traves de las propiedades de un objeto.