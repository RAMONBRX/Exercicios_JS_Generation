let matriz = [
    [1, 5, 6],
    [2, 4, 7]
]

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha  ++){
    for(let coluna = 0; coluna < matriz[linha].length; coluna ++){
        console.log(`matriz [${linha}] [${coluna}] = ${matriz[linha] [coluna]}`)
    }
}