const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado!!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('valor não numérico') // tomar cuidado ao criar algo assim, a linguagem é de tipagem fraca e vai aceitar um tipo string no lugar de um tipo número