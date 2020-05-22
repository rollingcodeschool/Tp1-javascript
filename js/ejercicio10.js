let n1 = prompt("Escribe un número");
if (n1 % 2 == 0 || n1 % 3 == 0 || n1 % 5 == 0 || n1 % 7 == 0) {
    document.write("El numero ingresado es divisible por 2, 3, 5 o 7");
} else {
    document.write("El numero ingresado no es divisible por 2, ni por 3, ni por 5, ni por 7");
}