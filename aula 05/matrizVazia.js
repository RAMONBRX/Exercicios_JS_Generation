"use strict";
const leia = require("readline-sync");
/*
let matriz = new Array(2);

// Adicionando linha da matriz
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = Array(3);
}


// entrada de dados na matriz via teclado
for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = leia.questionInt(`matriz [${linha}] [${coluna}] = `);
    }
}

*/

let matriz = Array.from({ length: 2 }, () =>
     Array.from({ length: 3 },
         () => leia.questionInt("Digite um numero: ")));

// visualizando dados da matriz
console.table(matriz);