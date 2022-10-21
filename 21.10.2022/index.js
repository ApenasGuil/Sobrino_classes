const arrayNomes = [
    "João",
    "Norberto",
    "João",
    "Ryan",
    "William",
    "João",
    "Karlla",
    "João",
];

const arrayNumeros = [
    2,
    6,
    4,
    9,
    12,
];

/* function locateElement(array, elemento) {
    return array.indexOf(elemento);
} */

/* console.log("Qual o índice de Ryan? "+array.indexOf("Ryan"));

let x = array.indexOf("Norberto");
console.log(x); */

/* console.log("Qual o índice da Karlla? "+ locateElement(arrayNomes, "Karlla"));

console.log("Qual o índice do 9? "+ locateElement(arrayNumeros, 9)); */

// ---

/* Splice - https://www.javascripttutorial.net/javascript-array-splice/#:~:text=Deleting%20elements%20using%20JavaScript%20Array's%20splice()%20method&text=The%20position%20specifies%20the%20position,that%20contains%20the%20deleted%20elements. */

/* function deleteElement(arrayNomes, element) {
    let pos = arrayNomes.indexOf(element);
    if(pos != -1){
        // return arrayNomes.splice(pos, 1); // Retorna o elemento excluído
        arrayNomes.splice(pos, 1); // Retorn o resto do array SEM o elemento excluído
        return arrayNomes;
    } else {
        return "Elemento não existe no array.";
    }
    
} */

/* console.log("Excluir o Ryan do array: " + deleteElement(arrayNomes, "Ryan")); */

function deleteElements(arrayNomes, element) {
    let pos = arrayNomes.indexOf(element);
    while(pos != -1){ // Enquanto haver o elemento, apaga
        arrayNomes.splice(pos, 1);
        pos = arrayNomes.indexOf(element);
    }
    return arrayNomes;
};

console.log("Excluir todos os João do array: " + deleteElements(arrayNomes, "João"));