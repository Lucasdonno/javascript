const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 89.90,
    obj: {
        blabla: 1,
        obj: { //o obj pode ser colocado mais de uma vez pois está dentro de outro atributo
            blabla: 2,
        }
    }
}

console.log(prod2)