"use strict";
const leia = require("readline-sync");

let totalPares = 0;
let totalImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = leia.questionInt(`Digite o ${i} numerodo: `);
    if (numero % 2 === 0){
        totalPares += 1;
    }else{
        totalImpares += 1;
    }
}

console.log(`\n Total de numeros pares: ${totalPares}`);
console.log(`\n Total de numeros impares: ${totalImpares}`);