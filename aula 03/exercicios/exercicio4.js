"use strict";
const leia = require("readline-sync");

console.log("insira 3 caracteristicas do seu animal.");

let caracteristica1 = leia.question("primeira caracteristica do seu animal: ").toLowerCase();

let caracteristica2 = leia.question("segunda caracteristica do seu animal: ").toLowerCase();

let caracteristica3 = leia.question("terceira caracteristica do seu animal: ").toLowerCase();

if(caracteristica1 === "vertebrado"){
    if(caracteristica2 === "ave"){

        if(caracteristica3 === "carnivoro"){

            console.log("O Seu Animal é a Águia");

        }else if(caracteristica3 === "onivoro"){

            console.log("O Seu Animal é a Pomba");

        }
        else{
            console.log("Seu animal nao esta listado, tente outra combinacao de caracteristicas");
        }
    }else if(caracteristica2 === "mamifero"){

        if(caracteristica3 === "onivoro"){

            console.log("O Seu Animal é o Homem");

        }else if(caracteristica3 === "herbivoro"){

            console.log("O Seu Animal é a Vaca");

        }else{

            console.log("Seu animal nao esta listado, tente outra combinacao de caracteristicas");
        }
    }else{
        console.log("Seu animal nao esta listado, tente outra combinacao de caracteristicas");
    }
}else if(caracteristica1 === "invertebrado"){

    if(caracteristica2 === "inseto"){

        if(caracteristica3 === "hematofago"){

            console.log("O Seu Animal é a Pulga")

        }else if(caracteristica3 === "herbivoro"){
            console.log("O Seu Animal é a Lagarta")
        }
    }else if(caracteristica2 ==="anelideo"){

        if(caracteristica3 === "hematofago"){

            console.log("O Seu Animal é o Sanguessuga")

        }else if(caracteristica3 === "onivoro "){

            console.log("O Seu Animal é a Minhoca");
        }else{
            console.log("Seu animal nao esta listado, tente outra combinacao de caracteristicas");
        }
    }else{

        console.log("Seu animal nao esta listado, tente outra combinacao de caracteristicas");

    }
}else{
    console.log("Seu animal nao esta listado, tente outra combinacao de caracteristicas");
}