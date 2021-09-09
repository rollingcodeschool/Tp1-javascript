// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
if (n1 > n2) {
    document.write("El numero mayor es " + n1);
} else {
    if(n1 == n2){
        document.write("Los numeros ingresados son iguales"); 
    }else{
        document.write("El numero mayor es " + n2);
    }
}