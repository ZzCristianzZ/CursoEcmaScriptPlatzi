//GENERADORES ASINCRONOS

/*Combinan los generadores que ya conocemos pero los combinan con las promesas */

async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
  }
  
  const generador = anotherGenerator()
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))