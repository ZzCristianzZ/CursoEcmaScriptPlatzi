// METODOS PRIVADOS 

/* Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase. */

class Clase {
    #private(valor){
      console.log(valor)
    }
    
    public(valor){
      console.log(valor)
    }
  }
  
  const clase = new Clase()
  clase.public("Hola")  // 'Hola'
  clase.private("Hola") // TypeError: clase.private is not a function