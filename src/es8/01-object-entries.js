// METODOS DE TRANSFORMACION DE OBJETOS A ARRAYS 

/* Llega el 2017 y en Ecmascript que implementan estos metodos que sirven para obtener informacion de las propiedades, sus valores o ambas */

// ----- OBJECT.ENTRIES() ----//

// Object.entries es una función de JavaScript que devuelve una matriz de pares clave/valor de un objeto dado como argumento. Esta función es útil para iterar sobre los pares clave/valor de un objeto, o para transformar un objeto a otro formato, como una matriz.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/

