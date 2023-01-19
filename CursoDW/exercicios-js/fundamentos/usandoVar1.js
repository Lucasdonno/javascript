{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() { // variavel dentro de função respeita o escopo, só retorna dentro.
    var local = 123
    console.log(local)
}

teste()
console.log(local)