"use strict";

const leia = require("readline-sync");
let vetor = Array(10);
let numerosIndiceImpar = [];
let numerosPares = [];
let soma = 0;


for(let i = 0; i < vetor.length; i++){
    vetor[i] = leia.questionInt(`Digite um numero inteira para posicao [${i + 1}]: `);
    if((i+1) % 2 !== 0){
        numerosIndiceImpar.push(vetor[i]);
    }
    if(vetor[i] % 2 === 0){
        numerosPares.push(vetor[i]);
    }

    soma +=vetor[i];
}
console.log(`Elementos nos indices impares: ${numerosIndiceImpar}`);
console.log(`Elementos pares: ${numerosPares}`);
console.log(`Soma: ${soma}`);
console.log(`Media: ${(soma/vetor.length).toFixed(2)}`);