let n1 = prompt("Escribe el primer número");
let n2 = prompt("Escribe el segundo número");
let n3 = prompt("Escribe el tercer número");
if (n1 > n2 && n1 > n3) {
    document.write("El numero mayor es " + n1);
} else if (n2 > n3) {
    document.write("El numero mayor es " + n2);
} else {
    document.write("El numero mayor es " + n3);
}