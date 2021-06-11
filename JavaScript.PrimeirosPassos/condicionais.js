console.log(`Trabalhando com condicionais`)


const listaDeDestino = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
)

const idadeComprador = 17
const estaAcompanhada = true
const temPassagemComprada = true
console.log(`Destinos possíveis:`)

// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade`)
//     listaDeDestino.splice(1, 1) // removendo item
// } else if (estaAcompanhada){
//     //A pessoa é menor de idade
//         console.log(`Comprador está acompanho`)
//         listaDeDestino.splice(1, 1) // removendo item
//     }else {
//         console.log(`Não é maior de idade e não posso vender`)
//     }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Boa Viagem!!`)
    listaDeDestino.splice(1, 1) // removendo item
}
 else {
    console.log(`Não é maior de idade e não posso vender`)
}

console.log(`Embarque: \n\n`)

if (idadeComprador >= 18 && temPassagemComprada){
    console.log(`Boa viagem`)
}
else{
    console.log(`Você não pode embarcar`)
}
console.log(listaDeDestino)

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador == 18)


