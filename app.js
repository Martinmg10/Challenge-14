//1- A través de document.write concatena un saludo almacenado en 2 variables.

let saludo1 = ('<h1>Hola');
let saludo2 = (' soy Martin</h1>');

document.write(saludo1 + saludo2);

//2- Pedirle el nombre al usuario y devolver un msj con saludo en el HTML

let nombre = prompt('Ingrese su nombre');
document.write(saludo1 + nombre);

//3- (Introducir un número y devolver el doble del mismo num)

let num = parseInt(prompt('Ingrese un numero'));
document.write(` <br> El doble de ${num} es ${num*2}`  );

//punto 4

let user = prompt('Ingrese apellido');

document.write(`<br> tu apellido es ${user} la ultima letra es ${user.charAt(user.length-1)}`)
