// segunda opcion del ejercicio 9 con la funcion CharAt
let frase = prompt("Ingrese una frase");
console.log(frase.toLowerCase());
frase = frase.toLowerCase();
console.log(frase.length);

// tomar un caracter variable.charAt(indice)
// preguntar si es vocal
// si es vocal lo muestro sino no hago nada
for (let vocal = 0; vocal < frase.length; vocal++) {
  console.log(frase.charAt(vocal));
  if (
    frase.charAt(vocal) == "a" ||
    frase.charAt(vocal) == "e" ||
    frase.charAt(vocal) == "i" ||
    frase.charAt(vocal) == "o" ||
    frase.charAt(vocal) == "u"
  ) {
    document.write(frase.charAt(vocal));
  }
}
