// PROPIEDADES DE PROPAGACION

/* Consiste en expandir las propiedades de un objeto utilizando el Spread Operator. */

const objeto = {
    nombre: "Andres",
    age: 23,
  }
  
  const usuario = {
      ...objeto,
      plataforma: "Platzi"
  }

  // Se puede copiar Objetos utilizando este metodo 

  const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false