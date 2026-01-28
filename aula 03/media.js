"use strict";
const leia = require("readline-sync");

let media = leia.questionFloat("Digite a media do aluno: ",{
                            limitMessage: "Digite um numero "
});

if(media >= 7){
    console.log("aluno Aprovado!");
}else if(media >= 5 && media <= 7){
    console.log("aluno de Exame!");
}else{
    console.log("aluno Reprovado!");
}