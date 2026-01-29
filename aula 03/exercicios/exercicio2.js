"use strict";
const leia = require("readline-sync");

let numero = leia.questionInt("Digite o primeiro numero: ", {
    limitMessage: "Digite um numero inteiro "
});

numero % 2 === 0 ? console.log(`O numero ${numero} é par`) :
    console.log(`O numero ${numero} é impar`);