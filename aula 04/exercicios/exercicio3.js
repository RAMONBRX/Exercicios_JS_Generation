"use strict";

const leia = require("readline-sync");

let idade = leia.questionInt("Digite uma idade: ");

let pessoasMenoresDe21 =0;
let pessoasMaioresDe50 = 0;

while(idade >= 0){
    if(idade < 21){
        pessoasMenoresDe21+= 1;
    }else if(idade > 50){
        pessoasMaioresDe50 += 1;
    }
    idade = leia.questionInt("Digite uma idade: ");
}

console.log(`Total de pessoas menores de 21: ${pessoasMenoresDe21}
Total de pessoas maiores de 50 anos: ${pessoasMaioresDe50}`);