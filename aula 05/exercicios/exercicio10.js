"use strict";
const leia = require("readline-sync");
let soma = 0;
let media = [];

let matriz = Array.from({ length: 2 }, () =>
     Array.from({ length: 4 },
         () => 0));


         
for (let linha = 0; linha < matriz.length; linha  ++){
    for(let coluna = 0; coluna < matriz[linha].length; coluna ++){
        matriz[linha][coluna] = leia.questionFloat(`Insira a ${coluna} nota: `)
        soma += matriz[linha][coluna];

        if(coluna === 4){
            media.push((soma/ 4).toFixed(2));
        }
    }
}

console.log(media)