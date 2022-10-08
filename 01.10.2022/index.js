"use strict";

/*
    Aula 1 de JS (Fundamentos de Desenvolvimento Web)
*/

console.log("Hello World!");

var a,b,c;
a=1;
b=2;
c=a+b;
console.log("O resultado da soma é", c);

let nome="Guilherme", idade=24, eAluno=false;

console.log("Nome: ",nome,"-",typeof nome);
console.log("Idade: ",idade,"-",typeof idade);
console.log("É aluno: ",eAluno,"-",typeof eAluno);

let notaP1=5, notaP2=9, notaP3;
console.log(typeof notaP3);
let media=(notaP1+2*notaP2)/3;
console.log('Média: ', media.toFixed(1));

console.log(`A média do ${nome} é ${media.toFixed(1)}`);

let estado, conceito;

if(media >= 5) {
    estado = "Aprovado";
} else {
    estado = "Reprovado";
}

if (media >= 9) {
    conceito = "A";
} else if (media >= 7) {
    conceito = "B";
} else if (media >= 5) {
    conceito = "C";
} else if (media >= 2) {
    conceito = "D";
} else {
    conceito = "E";
}

console.log("Média: ", media.toFixed(2));
console.log(`O aluno ${nome} está ${estado} com o conceito ${conceito}`)