/* Asignacion de desestructuracion

Consiste en establecer variables a nuestros atributos en Objetos, y variables a nuestros indices en Arrays. mediante el mismo nombre de la propiedad */

// Antes, de ECMA,, se establecian las variables de la siguiente manera:

var usuario = {
    nombre : 'Andres', 
    edad: 23
}
//Asigancion de variables a los atributos
var name = usuario.nombre;
var age = usuario.edad;

console.log(name,age);// Andres, 23

/*Con la desestructuracion se puede hacer lo mismo con una sola linea */

const usuario = {
    nombre : 'Andres', 
    edad: 23
}
const {nombre, edad} = usuario; // traducido, significa que crea una variable constante de los atributos nombre y edad (Deben ser el mismo nombre de variable como el del atributo) del objeto usuario.

console.log(nombre, edad); // Andres, 23

//Ejemplo 2

let fruits = ['Apple','Banana'];
let [a,b] = fruits;
console.log(a, b); // Apple, Banana

// Objeto Destructuring

let user = {
    username : 'Oscar',
    age : 34,
}
let {username,age} = user;
console.log(username,user.age);

// Cambiar el nombre de las variables con Desestructuracion

const usuario = { 
nombre: "Andres", 
edad: 23, 
plataforma: "Platzi" 
}

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined

// Desestructuracion en parametros de una Funcion (Si mandamos un objeto como argumento de una funcion podemos declarar las variables directamente)

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'






