const leia = require("readline-sync");
let salario;
let adicionalNoturno;
let horasExtras;
let descontos;

salario = leia.questionFloat("Digite o valor do seu Salario Bruto: R$");
adicionalNoturno = leia.questionFloat("Digite o valor do seu Adicional Noturno: R$");
horasExtras = leia.questionInt("Digite a quantidade de horas extras realizadas: ");
descontos = leia.questionFloat("Digite o valor dos seus descontos: R$");

console.log("Novo Salário : ",
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(salario + adicionalNoturno + (horasExtras * 5) - descontos)
);