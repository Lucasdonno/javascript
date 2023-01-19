//funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)// recebe valor único mas fica undefined
imprimirSoma(2, 10, 5, 3, 6, 9) // recebe variaveis não setadas previamente normalmente
imprimirSoma()// executa mas deixa como indefinido pois não tem parâmetros


// Funcão com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())