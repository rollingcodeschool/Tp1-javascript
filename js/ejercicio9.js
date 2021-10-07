// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
let phrase = prompt('Escribe una frase');
phrase = phrase.toLowerCase();
console.log(phrase);
for (let i = 0; i < phrase.length; i++) {
	if (
		phrase.substr(i, 1) == 'a' ||
		phrase.substr(i, 1) == 'e' ||
		phrase.substr(i, 1) == 'i' ||
		phrase.substr(i, 1) == 'o' ||
		phrase.substr(i, 1) == 'u'
	) {
		document.write(phrase.substr(i, 1));
	}
}
