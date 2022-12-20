let hello = 'Hello';
let world = 'World';
//let epicPhrase1 = hello + ' '+ world +'!';

// Template literals
// Se usa con las comillas francesas `` (ALT+96)

let epicPhrase = `${hello} ${world}!`;
console.log(epicPhrase); // Hello world!

// Multi-line strings, barra invertida \ (ALT+92)

let lorem = 'Esto es un string \n'+'Esto es otra linea';

let lorem2 = `Esta es una frase epica
  La Continuacion de esa frase epica.`;

  console.log(lorem);/*Esto es un string 
                      Esto es otra linea*/ 
  console.log(lorem2);/*Esta es una frase epica
                       La Continuacion de esa frase   epica.*/