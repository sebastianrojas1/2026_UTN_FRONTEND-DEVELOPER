/* 
BUCLES

Son una estructura que nos permite repetir bloques de codigo
Hay dos tipos de bucles:
Por condicion (while): la condicion determina si se sigue ejecutando el bucle o no
Por limite (for): El limite determina hasta cuando se ejecuta algo

*/
/*Vamos a implementar un bucle que permita repetir el bloque de codigo
de solicitud de acumulacion por tres veces*/

/*
let sumatoria = 0
let cantidad_de_notas = 3
for( let iterador = 1; iterador <= cantidad_de_notas; iterador++) {
    let numero = prompt("Ingrese un numero")
    numero = Number(numero)
    sumatoria = sumatoria + numero

}
alert("el promedio resultante es"+sumatoria/cantidad_de_notas)
*/
/*
let contraseña=1234
for (let i=1; i<=3; i++)
{
    let numero = prompt("Ingrese un numero")
    if(numero==contraseña)
    {
        alert("contraseña correcta")
        break
    }
    else
    {
        alert("contraseña incorrecta")
    }
}
*/
/*
let palabra_prohibida = prompt("Ingrese una palabra")
while(palabra_prohibida!="voldemort") {

    alert("Esa palabra no es la correcta")
    palabra_prohibida = prompt("Ingrese una palabra")
}
    alert("Ese nombre no debe ser pronunciado")
    
*/
let numero = prompt("ingrese un numero")
while(numero === null || numero.trim() === "" || isNaN(numero) || numero <=0) {
    alert("Por favor, ingrese un numero valido")
    numero = prompt("ingrese un numero")
}
alert("el numero ingresado es: "+numero)

/* 
Practica recomendada
)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
6)Imprime los números del 1 al 10, pero salta el 5
7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
*/