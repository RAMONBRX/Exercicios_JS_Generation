"use strict";

const leia = require("readline-sync");

let codigoAreaDesenvolvimento;
let codigoGenero;
let idade = 0;
let continuar = 'S';
let totalBackend = 0;
let totalMulheresFrontend = 0;
let totalHomensMobile = 0;
let totalNaoBinarioFullstack = 0;
let somatorioIdade =0;
let count = 0;

while (continuar === 'S') {

    idade = leia.questionInt("Idade: ");
    codigoGenero = leia.questionInt("Identidade de Genero: ");
    codigoAreaDesenvolvimento = leia.questionInt(" Pessoa Desenvolvedora: ");


    if (codigoAreaDesenvolvimento === 1) {
        totalBackend += 1;

    }
    else if ((codigoGenero === 1 || codigoGenero === 4) && codigoAreaDesenvolvimento === 2) {
        totalMulheresFrontend += 1;

    }
    else if (((codigoGenero === 2) || (codigoGenero === 5)) && (codigoAreaDesenvolvimento === 3) && (idade > 40)) {
        totalHomensMobile += 1;

    }
    else if ((codigoGenero === 3) && (codigoAreaDesenvolvimento === 4) && (idade < 30)) {
        totalNaoBinarioFullstack += 1;

    }

    somatorioIdade += idade;
    count += 1;

    continuar = leia.keyIn("Deseja Continar (S/N): ").toUpperCase();
}

console.log(`Total de pessoas desenvvolvedoras Backend: ${totalBackend}
Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFrontend}
Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobile}
Total de Pessoas Nao Binarias desenvvolvedoras FullStack menores de 30 anos: ${totalNaoBinarioFullstack}
O numero total de pessoas que responderam a pesquisa: ${count}
A media de idade das pessoas que responderam a pesquisa: ${(somatorioIdade / count).toFixed(2)}
`);
