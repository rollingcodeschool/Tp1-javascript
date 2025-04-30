// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const n1 = prompt("Escribe el primer número");
const n2 = prompt("Escribe el segundo número");
const n3 = prompt("Escribe el tercer número");
if (n1 > n2 && n1 > n3) {
    document.writeln("El numero mayor es " + n1);
} else if (n2 > n3) {
    document.writeln("El numero mayor es " + n2);
} else {
    document.writeln("El numero mayor es " + n3);
}