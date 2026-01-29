"use strict";

const leia = require("readline-sync");

let numero = 0;
let soma = 0;
let cont = 0;
do{
    
    numero = leia.questionInt("Digite um numero: ");
    if((numero % 3 === 0) && (numero !== 0)){
        soma+= numero;
        cont += 1;
    }
}while(numero != 0);

console.log(`A media de todosos numeros multiplos de 3 e: ${(soma/cont).toFixed(2)}`);
