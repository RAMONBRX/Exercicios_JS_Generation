"use strict";
const leia = require("readline-sync");

let nomeColaborador = leia.question("Insira o nome do colaborador: ");

let codigoDoCargo = leia.questionInt("Insira o codigo do seu cargo (Numeros de 1 a 6):  ", {
    limitMessage: "Digite um numero inteiro: "
});

let salario;

if (codigoDoCargo > 0 && codigoDoCargo < 7) {
    salario = leia.questionFloat("Salario:  ", {
        limitMessage: "Digite um numero inteiro: "
    });
}

switch (codigoDoCargo) {
    case 1: {
        console.log(`Nome do colaborador: ${nomeColaborador}
        Cargo: Gerente    
        Valor tolal: R$ ${(salario + (0.1 * salario)).toFixed(2)} `);
        break;
    }
    case 2: {
        console.log(`Nome do colaborador: ${nomeColaborador}
        Cargo: Vendedor   
        Valor tolal: R$ ${(salario + (0.07 * salario)).toFixed(2)} `);
        break;
    }
    case 3: {
        console.log(`Nome do colaborador: ${nomeColaborador}
        Cargo: Supervisor   
        Valor tolal: R$ ${(salario + (0.09 * salario)).toFixed(2)} `);
        break;
    }
    case 4: {
        console.log(`Nome do colaborador: ${nomeColaborador}
        Cargo: Motorista   
        Valor tolal: R$ ${(salario + (0.06 * salario)).toFixed(2)} `);
        break;
    }
    case 5: {
        console.log(`Nome do colaborador: ${nomeColaborador}
        Cargo: Estoquista   
        Valor tolal: R$ ${(salario + (0.05 * salario)).toFixed(2)} `);
        break;
    }
    case 6: {
        console.log(`Nome do colaborador: ${nomeColaborador}
        Cargo: Tecnico de TI    
        Valor tolal: R$ ${(salario + (0.08 * salario)).toFixed(2)} `);
        break;
    }
    default: {
        console.log("Cargo nao existe.")
    }
}