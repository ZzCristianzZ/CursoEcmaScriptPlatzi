// PROMESAS 

//Es una forma de manejar el asincronismo en javascript(El asincronismo se refiere al hecho de poder ejecutar multiples tareas al mismo tiempo), se representa como un objecto que puede generar un valor a futuro.

// tiene metodos then y catch; con sus dos estados: resolve : cuando la promesa es resuelta y reject : cuando la promesa es rechazada.

const promesa = () => {
    return new Promise((resolve, reject) => {
      if (something) {
        //true o false
        resolve("Se ha resuelto la promesa")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }
  
  promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject