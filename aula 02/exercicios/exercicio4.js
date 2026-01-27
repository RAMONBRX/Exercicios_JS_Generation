const leia = require("readline-sync");
let numero1, numero2, numero3, numero4;

numero1 = leia.questionFloat("Digite o valor do primeiro numero: ");
numero2 = leia.questionFloat("Digite o valor do segundonumero: ");
numero3 = leia.questionFloat("Digite o valor do terceiro numero: ");
numero4 = leia.questionFloat("Digite o valor do quarto numero: ");

console.log("Diferença: " + ((numero1*numero2)-(numero3 *numero4)).toFixed(2) );