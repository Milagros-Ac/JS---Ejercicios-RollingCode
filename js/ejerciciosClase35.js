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