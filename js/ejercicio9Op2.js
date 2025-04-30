// segunda opcion del ejercicio 9 con la funcion CharAt
const phrase = prompt("Ingrese una phrase").toLowerCase();
console.log(phrase);
console.log(phrase.length);

// tomar un caracter variable.charAt(indice)
// preguntar si es vocal
// si es vocal lo muestro sino no hago nada
for (let vocal = 0; vocal < phrase.length; vocal++) {
  console.log(phrase.charAt(vocal));
  if (
    phrase.charAt(vocal) == "a" ||
    phrase.charAt(vocal) == "e" ||
    phrase.charAt(vocal) == "i" ||
    phrase.charAt(vocal) == "o" ||
    phrase.charAt(vocal) == "u"
  ) {
    document.writeln(phrase.charAt(vocal));
  }
}
