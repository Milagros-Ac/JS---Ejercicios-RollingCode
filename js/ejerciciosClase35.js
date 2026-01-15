/*1-Número positivo o negativo
Escribir un programa que determine si un número ingresado por el usuario es
positivo, negativo o cero.*/
const numero = Number(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else if (numero === 0) {
    console.log("El número es cero.");
} else {
    console.log("Lo que ingresaste no es un número válido.");
}


/*2. Edad para votar
○ Solicitar la edad del usuario y mostrar si puede votar*/
let edad = Number (prompt("Ingresa tu edad:"));
if (edad > 16) {
    console.log("Si podes votar");
}
else{
    console.log("No podes votar");
}