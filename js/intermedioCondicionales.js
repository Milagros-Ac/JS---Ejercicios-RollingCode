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

/*2. Validar fecha 
○ Comprobar si una fecha (día, mes, año) ingresada por el usuario es válida.*/
const dia = Number(prompt("Ingrese Día:"));
const mes = Number(prompt("Ingrese Mes:"));
const año = Number(prompt("Ingrese Año:"));

let esValida = false;

if (año > 0 && mes >= 1 && mes <= 12) {
    if (mes === 2) { 
        const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
        const maxDias = esBisiesto ? 29 : 28;
        if (dia >= 1 && dia <= maxDias) esValida = true;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) { 
        if (dia >= 1 && dia <= 30) esValida = true;
    } else { 
        if (dia >= 1 && dia <= 31) esValida = true;
    }
}

esValida ? console.log("Fecha válida") : console.log("Fecha no válida");

/*3. Verificación de acceso por roles 
○ Solicitar nombre de usuario y rol. Permitir o denegar acceso dependiendo si 
es "admin", "editor" o "invitado".*/

const rol = prompt("Ingresa tu rol (admin, editor, invitado):").toLowerCase();

if (rol === "admin") {
    console.log("Acceso total concedido.");
} else if (rol === "editor") {
    console.log("Acceso de edición concedido.");
} else if (rol === "invitado") {
    console.log("Acceso de solo lectura.");
} else {
    console.log("Rol no reconocido. Acceso denegado.");
}