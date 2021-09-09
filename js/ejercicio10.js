//10- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let n1 = prompt("Escribe un número");
if (n1 % 2 == 0 || n1 % 3 == 0 || n1 % 5 == 0 || n1 % 7 == 0) {
    document.write("El numero ingresado es divisible por 2, 3, 5 o 7");
} else {
    document.write("El numero ingresado no es divisible por 2, ni por 3, ni por 5, ni por 7");
}