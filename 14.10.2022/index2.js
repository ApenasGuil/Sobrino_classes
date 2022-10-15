// arrays

const arrayExemplo = ["ADS", 5, 5.5, true];

console.table(arrayExemplo)
/* console.log(arrayExemplo); */
console.log ("Tipo do array: " + typeof arrayExemplo);
console.log ("Quem é o elemento 4: " + arrayExemplo[3]);
console.log ("Tipo do elemento 4: " + typeof arrayExemplo[3]);
console.log ("Tamanho: " + arrayExemplo.length);

const professores = ["Sobrino", "Luiz Antonio", "Guerra"];
/* console.table(professores); */

professores.unshift("Avelino", "Claudio Carvalho"); // Adiciona na posição 0 vetor
/* professores.shift(); // Remove a posição 0 do vetor */

/* professores.push("Avelino, Branquinho"); // Adiciona no final do vetor
professores.pop(); // Remove a última posição */

/* console.table(professores); */

/* professores.splice(3, 4) // A partir da posição X, elimina Y */

/* professores.splice(1, 1, "Rangel") // A partir da posição 1, elimina 1, e insere "Rangel" */

/* professores.sort(); // Ordena em ordem alfabética */

console.table(professores);

// iteração com for

for (let i = 0; i < professores.length; i++) {
    console.log(professores[i]);
}