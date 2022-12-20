
// Antes, para evitar errores a la hora de establecer las funciones y que estas al ser llamadas no reciban argumentos y se nos mueste el error NaN, se establecen valores por defecto de esta manera utilizando el || (or).

function newUser (name,age,country){
    var name =  name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log( name,age,country);
}

newUser();// Oscar, 34, MX
newUser('David', 15 , 'CO');// David, 15,CO


// Despues de ECMAScript6 cambio y se pueden definir de las siguiente manera:

function newAdmin(name = 'Oscar', age = 32, country = 'Cl'){
    console.log(name,age,country);
}

newAdmin();// Oscar, 32, CL
newAdmin('Ana', 28, 'PE');// Ana, 28, PE