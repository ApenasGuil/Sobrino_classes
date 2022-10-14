// Função

function calcularMedia(notaP1, notaP2) {
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
console.log("Soma()= " + soma());