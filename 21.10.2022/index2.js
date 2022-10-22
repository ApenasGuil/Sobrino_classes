// Objeto

var person = {
    name: "Guilherme",
    age: 24,
    isStudent: true
}

console.table(person);
console.log(typeof person);
console.log(typeof person.name);
console.log(typeof person.age);
console.log(typeof person.isStudent);

person.height = 1.58; // Adiciona propriedade no array, caso não exista

console.table(person);

const arrayAmigos = [
    {
        nome: "Alexandre",
        idade: 32,
        eAluno: false,
    },
    {
        nome: "Guerra",
        idade: 37,
        eAluno: false,
    },
    {
        nome: "Maurício",
        idade: 35,
        eAluno: false,
},
]

// Array de objetos
console.table(arrayAmigos[1].nome.length);