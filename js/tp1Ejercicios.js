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

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande
Dificultad:  🟢*/
let num1 = parseInt (prompt("Ingrese el primer numero"))
let num2 = parseInt (prompt("Ingrese el primer numero"))
let num3 = parseInt (prompt("Ingrese el primer numero"))
if (num1 >= num2 && num1 <= num3 ){
    mayor = num2
}
else if (num2 >= num1 && num2 >= num3){
    mayor = num2;
}
else{
    mayor = num3;
}
console.log(`El ${mayor} es el número más grande`);

/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
Dificultad:  🟢🟡 */
let numero = parseInt (prompt("Ingrese un numero"))
if (numero % 2 === 0) {
    console.log(`El ${numero} es divisible por 2.`)
}
else {
    console.log(`El ${numero} no es divisible por 2.`)
}