const arrayNomes = [
    "Norberto",
    "João",
    "Ryan",
    "William",
    "Karlla",
];

const arrayNumeros = [
    2,
    6,
    4,
    9,
    12,
];

function locateElement(array, elemento) {
    return array.indexOf(elemento);
}

/* console.log("Qual o índice de Ryan? "+array.indexOf("Ryan"));

let x = array.indexOf("Norberto");
console.log(x); */

console.log("Qual o índice da Karlla? "+ locateElement(arrayNomes, "Karlla"));

console.log("Qual o índice do 9? "+ locateElement(arrayNumeros, 9));