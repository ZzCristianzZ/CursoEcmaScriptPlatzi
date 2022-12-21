/*Clases

En palabras sencillas, una clase es un plantilla para crear objetos con sus mismos atributos y metodos(atributos se refieren en el codigo como las variables, y los metodos como las funciones; todo esto dentro del objeto).

Como ejemplo podemos visualizar las Clases, como moldes para hacer galletas y sus objetos como las galletas ya listas para su consumo.Aunque debido a su molde (clase) todas las galletas (objeto), tendrian la misma forma cada galleta puede tener gomitas, otras crema, entre muchas otras, esto de les podria llamar los atributos de nuestros objetos (galletas). 

Una INSTANCIA de una CLASE: se refiere al objeto creado a partir de la clase.

La sintaxis que utiliza la clase es la siguiente :   */

//Se declara la clase:

class NombredelaClase {
    //atributos y metodos
}

//Se crea una instancia (objeto), de la clase:

const NuevoObjeto = new NombredelaClase();

// El profe Oscar inicia desde los metodos(una funcion), para explicarnos como crear la instancia (objeto) de la clase User(molde), de la siguiente manera:

class User {
    //Metodos
    greeting(){
        return 'Hello';
    }
};

// El metodo greetin es una funcion, para metodos practicos vamos a utilizar el nombre 'Pepe' en vez de llamar el objeto 'gndx'.

//Se crea el objeto a partir de la clase User y se llama el metodo para mostrarla en consola de la siguiente manera:

const pepe = new User();
console.log(pepe.greeting()); // Hello

// Se declara  el nuevo objeto 'pepe' a partir de la clase user, y se llama a la funcion greeting dentro de nuestro objeto 'pepe'.En consola tenemos el 'Hello'

// Cuando se refiere a la herencia, en este caso de las clased, significa que la clase puede tener varios objetos de diferente nombre pero con los mismos atributos y metodos de la clase. 

// la palabra reservada 'new', es un constructor, que sirve para crear objetos personalizados

// El this, basicamente en palabras mas sencillas es decirle a tu codigo que cuando le escribes this, es en el contexto, llamese dentro de una funcion, dentro de un objeto, que de este mismo requieras. En las clases no es lo mismo traer la asignacion de un atributo del padre (molde), que la asignacion de atributo de un hijo (galletas), aunque tengan un mismo atributo.


// En un ejemplo mas practico vamos a recrear un poco un juego (Mario Bros) y vamos a crear con una clase 'Player'a nuestros personajes como 'player1' a Mario y a 'player2' como a Luigi.Vamos tomar como atributos nombre y colorSombrero, por ahora, y el metodo de saludar.

class Player {
    constructor(nombre, colorSombrero){
        //atributos con su contexto
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
    }
}
 //Creacion de jugadores (Objetos)

let player1 = new Player('Mario','Rojo');
let player2 = new Player('Luigi', 'Verde');

console.log(player1);//Player {nombre: 'Mario', colorSombrero: 'Rojo'}
console.log(player1);////Player {nombre: 'Luigi', colorSombrero: 'Verde'}

//Llamar metodos de los jugadores (Objetos)

console.log(player1.saludar()); // Hola soy Mario y mi sombrero es Rojo


// Los metodos Get y Set nos permiten tener acceso a leer o modificar el atributo de un objeto. Siendo Get, para mostrar el nombre del atributo y Set, para modificar ese atributo.En el ejemplo del juego:

class Player {
    constructor(nombre, colorSombrero){
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
}

//GET
console.log(player1.nombre); // Mario
//SET 
player1.nombre = 'Alberto';
console.log(player1.nombre);// Alberto









 

