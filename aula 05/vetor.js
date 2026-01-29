"use strict";
const leia = require("readline-sync");
let numeros = [10, 25, 5, 45, 85];

let cores = Array(5);

for(let i = 0; i< 5; i++){
    console.log(`numeros [${i}] = ${numeros[i]}`);
}

console.log(`o tamanho do vetor é ${numeros.length}`);

console.table(numeros);
/*
for(let i = 0; i < 5; i++){
    cores[i] = leia.question("Digite o nome de uma cor: ");
}
*/
console.table(cores);

console.table(numeros.sort((a, b) => a - b));

console.table(cores.sort());