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