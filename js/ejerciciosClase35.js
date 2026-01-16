/*1-Número positivo o negativo
Escribir un programa que determine si un número ingresado por el usuario es
positivo, negativo o cero.*/
const numero = Number(prompt("Ingresa un número para saber si es positivo,negarivo o cero:"));

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

/* 3. Número par o impar
○ Comprobar si el número ingresado es par o impar*/

let parImpar = Number (prompt("Ingrese un numero para saber si es par o impar"));

if (parImpar % 2 === 0 ) {
    console.log(`El numero : ${parImpar} es par`);
        
} else {
    console.log(`el numero : ${parImpar} es impar`);
    
}

/*4. Contraseña segura
○ Comparar una contraseña ingresada con una contraseña guardada. Mostrar
mensaje si coinciden o no.*/
const contraGuardada = "123";
const contraIngresada = prompt("Ingresa tu contraseña:");

if (contraIngresada === contraGuardada) {
    console.log("La contraseña coincide.");
} else {
    console.log("La contraseña no coincide.");
}
/*5. Mayor de tres números
○ Pedir tres números al usuario y mostrar cuál es el mayor.*/
const n1 = Number(prompt("Primer número:"));
const n2 = Number(prompt("Segundo número:"));
const n3 = Number(prompt("Tercer número:"));

if (n1 >= n2 && n1 >= n3) {
    console.log("El mayor es: " + n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("El mayor es: " + n2);
} else {
    console.log("El mayor es: " + n3);
}

/*6. Calculadora básica
○ Usar if...else para realizar suma, resta, multiplicación o división según la
opción elegida.
 */

const operacion = prompt("Elige: suma (+), resta (-), mult (*), div (/)");
const a = Number(prompt("Número A:"));
const b = Number(prompt("Número B:"));

if (operacion === "+") {
    console.log("Resultado: " + (a + b));
} else if (operacion === "-") {
    console.log("Resultado: " + (a - b));
} else if (operacion === "*") {
    console.log("Resultado: " + (a * b));
} else if (operacion === "/") {
    b !== 0 ? console.log("Resultado: " + (a / b)) : console.log("No se puede dividir por 0");
}

/*7. Año bisiesto 
○ Solicitar un año y comprobar si es bisiesto. */
const año = Number(prompt("Ingresa el año:"));

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log("Es bisiesto.");
} else {
    console.log("No es bisiesto.");
}

/*8. Clasificación de calificaciones 
○ Pedir una calificación numérica (0-10) y mostrar la nota correspondiente 
(Aprobado, Reprobado, Excelente). */

const nota = Number(prompt("Ingresa tu nota (0-10):"));

if (nota >= 7) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}