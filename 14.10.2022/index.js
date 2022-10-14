// Função

/* function calcularMedia(notaP1, notaP2) {
    var media = (notaP1 + 2 * notaP2);
    return media;
}

console.log("A média do aluno 1 é " + calcularMedia(10,5));
console.log("A média do aluno 2 é " + calcularMedia(7,7.5));
console.log("A média do aluno 3 é " + calcularMedia(6,3));
console.log("A média do aluno 4 é " + calcularMedia(8,10));

let mediaQuintoAluno = calcularMedia(6,9);
console.log("A média do aluno 5 é " + mediaQuintoAluno);

// Expressão de função

let soma = function(n1 = 0, n2 = 0) {
    return n1 + n2;
}

console.log("Soma de 8+3= " + soma(8,3));
console.log("Soma de 1+7= " + soma(1,7));
console.log("Soma()= " + soma()); */

// Controle de repetição de função
/* 1. Apresentar na tela as seguintes sequencias envolvendo estruturas de controle de repetição.
Atençao: usar variáveis de escopo local nos três casos. 

For     1 a 10
While   10 a 0
do/while    pares de 2 a 20

2. Utilizando uma expressão de função, indicar se um número fornecido como argumento é par (retornar 0 ou "Par") ou impar (retornar 1 ou "Ímpar").*/

//for
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//while
let i=10;
while(i>=-1){
    console.log(i);
    i--;
}

//do/while

i=2;
do {
    console.log(i);
    i+=2;
} while (i<=20);

// Expressão de função

let parOuImpar = function(num = 0) {
    if (num%2 == 0) {
        return "PAR";
    }
    return "ÍMPAR";
}

console.log("5 é par ou ímpar? " + parOuImpar(5));
console.log("8 é par ou ímpar? " + parOuImpar(8));

// Operador condicional ternário

let parOuImparV2 = function(num = 0) {
    return (num % 2 == 0) ? "PAR" : "ÍMPAR";
}

console.log("5 é par ou ímpar? " + parOuImparV2(5));