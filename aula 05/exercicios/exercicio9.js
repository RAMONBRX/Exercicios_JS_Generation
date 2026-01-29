"use strict";
const leia = require("readline-sync");

let diagonalPrincipal = [];
let diagonalSecundaria = [];
let SomaDiagonalPrincipal = 0;
let SomaDiagonalSecundaria = 0;

let matriz = Array.from({ length: 3 }, () =>
     Array.from({ length: 3 },
         () => leia.questionInt("Digite um numero: ")));

for (let linha = 0; linha < matriz.length; linha  ++){
    for(let coluna = 0; coluna < matriz[linha].length; coluna ++){

        if(linha === coluna){
            diagonalPrincipal.push(matriz[linha][coluna]);
            SomaDiagonalPrincipal += matriz[linha][coluna];

        } 
        if((coluna + linha === (matriz.length )- 1)   ){
            diagonalSecundaria.push(matriz[linha][coluna]);
            SomaDiagonalSecundaria += matriz[linha][coluna];
        }
        
    }
}

console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`);
console.log(`Elementos da Diagonal Secundaria: ${diagonalSecundaria}`);
console.log(`Soma dos Elementos da Diagonal Principal: ${SomaDiagonalPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundaria: ${SomaDiagonalSecundaria}`);
