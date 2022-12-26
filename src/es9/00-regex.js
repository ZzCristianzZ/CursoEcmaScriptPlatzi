// EXPRESIONES REGULARES

/* RegEx, son patrones de busqueda y manipulacion de cadenas de caracteres increiblemente potente. En javascript se crea el patron entre barras inclinadas */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')

