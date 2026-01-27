const leia = require("readline-sync");
let nota1, nota2, nota3, nota4, media;

nota1 = leia.questionFloat("Digite o valor da sua primeira nota: ");
nota2 = leia.questionFloat("Digite o valor da sua segunda nota: ");
nota3 = leia.questionFloat("Digite o valor da sua terceira nota: ");
nota4 = leia.questionFloat("Digite o valor da sua quarta nota: ");
media = (nota1 + nota2 + nota3 + nota4)/4;

console.log("Media Final: " + media.toFixed(2));