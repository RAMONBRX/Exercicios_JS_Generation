const leia = require("readline-sync");
let salario;
let abono;

salario = leia.questionFloat("Digite o valor do seu salario: R$");
abono = leia.questionFloat("Digite o valor do seu salario: R$");

console.log("Novo Salário : ",
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(salario + abono)
);