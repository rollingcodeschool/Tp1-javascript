// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
const phrase = prompt('Escribe una frase').toLowerCase();
console.log(phrase);
for (let i = 0; i < phrase.length; i++) {
	if (
		phrase.substring(i, i+1) == 'a' ||
		phrase.substring(i, i+1) == 'e' ||
		phrase.substring(i, i+1) == 'i' ||
		phrase.substring(i, i+1) == 'o' ||
		phrase.substring(i, i+1) == 'u'
	) {
		document.writeln(phrase.substring(i, i+1));
	}
}
