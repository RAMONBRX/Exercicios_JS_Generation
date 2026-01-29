"use strict";
const leia = require("readline-sync");

let primeiroNumero = leia.questionInt("Digite o primeiro numerodo do intervalo: ");

let ultimoNumero = leia.questionInt("Digite o ultimo numerodo do intervalo: ");

if(primeiroNumero >= ultimoNumero ){
    console.log("intervalo invalido!");        
}else{
    console.log(`No intervalo entre ${primeiroNumero} e ${ultimoNumero}: `);
    for(let i = primeiroNumero; i <= ultimoNumero; i++ ){
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log(`${i} e multiplo de 3 e 5`);
        }
    }
}



