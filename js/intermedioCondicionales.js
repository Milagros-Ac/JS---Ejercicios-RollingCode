/*1. Clasificador de edades 
○ Dado un número, mostrar si es un niño, adolescente, adulto o adulto mayor. */
const edad = Number(prompt("Ingresa tu edad:"));

if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("Adulto");
} else if (edad >= 65 && edad <= 130) {
    console.log("Adulto mayor");
} else {
    console.log("Edad no válida");
}