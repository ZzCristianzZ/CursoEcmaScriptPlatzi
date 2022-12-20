var lastName = 'David';
lastName = 'Oscar';
console.log(lastName); // Oscar

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit); // Kiwi

const animal = 'Dog';
animal = 'Cat';
console.log(animal); // Error

function fruits() {
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1);// Apple
    console.log(fruit2);// Error Scope, block scope
    console.log(fruit3);// Error, block scope 
}

fruits();
