"use strict";

const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let procuraNumero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

if(vetor.indexOf(procuraNumero)>= 0 && vetor.indexOf(procuraNumero) < vetor.length ){
    console.log(`O numero ${procuraNumero} esta localizado na posicao: ${vetor.indexOf(procuraNumero)}`)
}else{
    console.log(`O numero ${procuraNumero} nao foi encontrado!`)
}

