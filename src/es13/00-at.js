// METODO AT

/* La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes. */

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"

//Puedes utilizar la notación de corchetes, pero necesitas obtener la longitud del array y restarle una unidad, generando mucho código que puede volverse difícil de leer.

nombres[nombres.length -1] // "Richard"