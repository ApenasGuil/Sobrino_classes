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