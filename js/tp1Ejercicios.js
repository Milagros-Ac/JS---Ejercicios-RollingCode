/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
Dificultad:  🟢*/
alert("un mensaje")

/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
Dificultad:  🟢*/
document.writeln("Hello world")

/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
Dificultad:  🟢*/
document.writeln(3+5)

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 
input: Coder 
Output: Hola Coder
Dificultad:  🟢*/
let Coder = prompt("Ingrese su nombre")
document.writeln("Hola "+ Coder)

/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
Dificultad:  🟢*/
let numer1 = parseInt(prompt("Introduce el primer número:"));
let numer2 = parseInt(prompt("Introduce el segundo número:"));
console.log(`El resultado de la suma es: ${numer1 + numer2}`);

/*6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande
Dificultad:  🟢*/
let numero1 = parseFloat (prompt("Ingrese el primero numero"))
let numero2 = parseFloat (prompt("Ingrese el segundo numero"))
if (numero1 > numero2){
    document.writeln("El" + numero1 + " es el numero mas grande")
}
else {
    document.writeln("El " + numero2 + " es el numero mas grande")
}