/*1. Clasificador de edades 
○ Dado un número, mostrar si es un niño, adolescente, adulto o adulto mayor. */
let edad = parseInt(prompt("Ingresá tu edad:"));

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
let dia = parseInt(prompt("Ingresá el día:"));
let mes = parseInt(prompt("Ingresá el mes:"));
let año = parseInt(prompt("Ingresá el año:"));

if (año > 0 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
    alert("Fecha válida");
} else {
    alert("Fecha inválida");
}

/*3. Verificación de acceso por roles 
○ Solicitar nombre de usuario y rol. Permitir o denegar acceso dependiendo si 
es "admin", "editor" o "invitado".*/

let usuario = prompt("Ingresá tu nombre de usuario:");
let rol = prompt("Ingresá tu rol (admin, editor, invitado):");

if (rol === "admin") {
    alert("Acceso total concedido");
} else if (rol === "editor") {
    alert("Acceso de edición concedido");
} else if (rol === "invitado") {
    alert("Acceso limitado concedido");
} else {
    alert("Acceso denegado");
}

/*4. Impuestos según ingreso 
○ Calcular el impuesto a pagar según rangos de ingreso (ej. menos de 
R$1.000, entre R$1.000 y R$5.000, más de R$5.000).*/

const ingreso = Number(prompt("Ingreso mensual:"));
let impuesto = 0;

if (ingreso <= 1000) {
    impuesto = 0;
} else if (ingreso <= 5000) {
    impuesto = ingreso * 0.10; 
} else {
    impuesto = ingreso * 0.20; 
}
console.log(`Impuesto a pagar: $${impuesto}`);

/*5. Conversión de temperatura 
○ Si se elige °C o °F, convertir entre ambas y verificar si la temperatura es 
normal, fiebre o hipotermia.*/

let tipo = prompt("Ingresá el tipo de temperatura (C o F):");
let temp = Number(prompt("Ingresá la temperatura:"));
let resultado;

if (tipo === "C") {
    resultado = (temp * 9/5) + 32;

    if (temp < 35) {
        alert("Hipotermia");
    } else if (temp <= 37) {
        alert("Temperatura normal");
    } else {
        alert("Fiebre");
    }

} else if (tipo === "F") {
    resultado = (temp - 32) * 5/9;

    if (resultado < 35) {
        alert("Hipotermia");
    } else if (resultado <= 37) {
        alert("Temperatura normal");
    } else {
        alert("Fiebre");
    }

} else {
    alert("Tipo inválido");
}

/*6. Juego de adivinanza 
○ Generar un número aleatorio entre 1 y 10, y verificar si el número ingresado 
por el usuario es mayor, menor o igual. */

const adivinanza = Math.floor(Math.random() * 10) + 1;
const intento = parseInt(prompt("Adiviná el número (1 al 10):"));

if (intento === adivinanza) {
    console.log("¡Ganaste! Era el " + adivinanza);
} else if (intento > adivinanza) {
    console.log("El número es mayor. Era el " + adivinanza);
} else {
    console.log("El número es menor. Era el " + adivinanza);
}
/*7. Evaluar contraseña 
○ Verificar si una contraseña tiene al menos 8 caracteres, incluye mayúsculas, 
números y símbolos. */
const contraseña = prompt("Crea una contraseña:");

if (contraseña.length >= 8) {
    console.log("Contraseña válida en longitud.");
} else {
    console.log("Demasiado corta.");
}

/*8. Calculo de tarifa por distancia 
○ Solicitar distancia en km y calcular el precio de envío según tramos de 
distancia. */
let distancia = parseFloat(prompt("Ingresá la distancia en km:"));
let precio;

if (distancia <= 10) {
    precio = 500;
} else if (distancia <= 30) {
    precio = 800;
} else {
    precio = 1200;
}

alert("El precio del envío es $" + precio);


/*9. Clasificación de películas 
○ Mostrar si un usuario puede ver una película según su edad y clasificación 
(Ej: +13, +18). */
let edadpelicula = parseInt(prompt("Ingresá tu edad:"));
let clasificacion = prompt("Ingresá la clasificación de la película (ATP, +13, +18):");

if (clasificacion === "ATP") {
    alert("Podés ver la película");
} else if (clasificacion === "+13") {
    if (edadpelicula >= 13) {
        alert("Podés ver la película");
    } else {
        alert("No tenés la edad suficiente");
    }
} else if (clasificacion === "+18") {
    if (edadpelicula >= 18) {
        alert("Podés ver la película");
    } else {
        alert("No tenés la edad suficiente");
    }
} else {
    alert("Clasificación no válida");
}


/*10. Simulación de semáforo 
○ Según color ingresado ("rojo", "amarillo", "verde"), mostrar acción 
correspondiente: detenerse, precaución o avanzar.*/
let color = prompt("Ingresá un color del semáforo (rojo, amarillo, verde):");

if (color === "rojo") {
    alert("Detenerse");
} else if (color === "amarillo") {
    alert("Precaución");
} else if (color === "verde") {
    alert("Avanzar");
} else {
    alert("Color no válido");
}
