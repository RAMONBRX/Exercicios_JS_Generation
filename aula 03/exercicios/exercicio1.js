"use strict";
const leia = require("readline-sync");

let numero1 = leia.questionInt("Digite o primeiro numero: ",{
                            limitMessage: "Digite um numero inteiro "
});

let numero2 = leia.questionInt("Digite o segundo numero: ",{
                            limitMessage: "Digite um numero inteiro "
});

let numero3 = leia.questionInt("Digite o terceiro numero: ",{
                            limitMessage: "Digite um numero inteiro "
});

(numero1+numero2)> numero3 ? console.log(`A soma de ${numero1} + ${numero2} é maior que ${numero3}`) : 
console.log(`A soma de ${numero1} + ${numero2} é menor que ${numero3}`);