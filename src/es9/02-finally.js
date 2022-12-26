// FINALLY PARA PROMESAS Y GENERADORES ASINCRONOS

/* El metodo Finally, consiste en ejecutar codigo despues de que una promesa haya sido ejecutada. */

promesa()
    .then(response => console.log(response) // Promesa resuelta
    .catch(error => console.log(response) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  