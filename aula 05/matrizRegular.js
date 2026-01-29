let matriz = [
    [1, 5, 6],
    [2, 4, 7],
    [9, 3, 10]
]

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha  ++){
    for(let coluna = 0; coluna < matriz.length; coluna ++){
        console.log(`matriz [${linha}] [${coluna}] = ${matriz[linha] [coluna]}`)
    }
}