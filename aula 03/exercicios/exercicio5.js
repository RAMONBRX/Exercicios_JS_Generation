"use strict";
const leia = require("readline-sync");

let codigoProduto = leia.questionInt("Insira o codigo do seu produto (Numeros de 1 a 6):  ",{
                                    limitMessage: "Digite um numero inteiro: "
});
let quantidade;
if(codigoProduto >0 && codigoProduto<7){
    quantidade = leia.questionInt("Insira a quantidade: ",{
                                    limitMessage: "Digite um numero inteiro: "
});

}

switch(codigoProduto){
    case 1:{
        console.log(`Produto: Cachorro Quente
        Valor tolal: R$ ${10 * quantidade} ` );
        break;
    }
    case 2:{
        console.log(`Produto: X-Salada
        Valor tolal: R$ ${15 * quantidade} ` );
        break;
    }
    case 3:{
        console.log(`Produto: X-Bacon
        Valor tolal: R$ ${18 * quantidade} ` );
        break;
    }
    case 4:{
        console.log(`Produto: Bauru
        Valor tolal: R$ ${12 * quantidade} ` );
        break;
    }
    case 5:{
        console.log(`Produto: Refrigerante
        Valor tolal: R$ ${8 * quantidade} ` );
        break;
    }
    case 6:{
        console.log(`Produto: Suco de laranja
        Valor tolal: R$ ${13 * quantidade} ` );
        break;
    }
    default:{
        console.log("Produto nao cadastrado.")
    }
}