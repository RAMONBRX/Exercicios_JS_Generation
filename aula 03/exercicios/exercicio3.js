"use strict";
const leia = require("readline-sync");
let idade;
let primeiraDoacao;
let nome;

nome = leia.question("Digite o Nome do doador: ", {
    limitMessage: "Digite apenas letras "
}
)

idade = leia.questionInt("Digite a idade do doador: ", {
    limitMessage: "Digite um numero inteiro: "
});

primeiraDoacao = leia.keyInYNStrict("Primeira doacao de sangue? ");

if (idade >= 60 && primeiraDoacao === false) {
    console.log(`${nome}  está apto para doar sangue!`);
} else if (idade <= 59 && idade >= 18) {
    console.log(`${nome}  está apto para doar sangue!`);
}
else {
    console.log(`${nome} não está apto para doar sangue!`);
}