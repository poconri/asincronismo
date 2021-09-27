function sum(num1, num2) {
    return num1 + num2;
}

//Es6 seria algo asi con la version comprimida de la funcion y ahorita ya entendi bien bien como funcionan estas funciones ya la pude aplicar aca abajo ahora bien abajo solo es ejemplo lastimosamente los calbacks no sirven con la version de ecma script 6 solo con las funciones regulares

//let sum = (num1, num2) => num1 + num2;
//console.log(sum());

//este es un ejemplo de call back es bueno recordar que para que el call back funcione tengo que ir al archivo .json y modificar donde dice script borrar el que esta y agregar lo siguiente "callback": "node src/callback/index.js"

function calc (num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(1,4,sum));

//esto me sirve para poner una funcion dentro de otra funcion y me permite trabajar esto de forma bastante espeficica por lo que entiendo abajo sentencio la funcion date con callback y hace un console log como new Date despues hace un metodo setTimeOut

function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);