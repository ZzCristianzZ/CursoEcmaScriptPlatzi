// Para que el código de JavaScript sea más ordenado, legible y mantenible; ES6 introduce una forma de manejar código en archivos de manera modular. Esto involucra exportar funciones o variables de un archivo, e importarlas en otros archivos donde se necesite.

// LAS EXPORTACIONES DE CODIGO 
/*Consiste en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada 'export' */

// QUE SON LAS IMPORTACIONES DE CODIGO
// Consiste en usar funciones o variables de otros archivos mediante la palabra reservada 'import'.

// EXPORTACIONES POR DEFECTO 

// Si solo un valor sera exportado,entonces se puede utilizar 

// export default

//Ejemplo 

// funciones.js
const PI = 3.14;

function area(radio){
    return PI*radio**2;
}

export {area};



// main.js

import {area} from './funciones.js'

console.log('area: '+ area(10));
