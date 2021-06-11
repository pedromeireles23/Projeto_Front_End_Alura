console.log(`\n Trabalhando com condicionais`)


const listaDeDestino = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
)

const idadeComprador = 17
const estaAcompanhada = true
let temPassagemComprada = false
const destino = `São Paulo`
console.log(`\n Destinos possíveis:`)



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true
    
 let contador = 0 
 let destinoExiste = false
 while (contador < 3 ){
     if (listaDeDestino[contador] == destino){
         console.log(`Destino existente`)
         destinoExiste = true
         break
     }
     contador += 1
 }

 console.log(`Destino existe:`, destinoExiste)

 if(podeComprar && destinoExiste){
     console.log(`Boa viagem`)
 }
 else{
     console.log(`Desculpe tivemos um erro`)
 }


 for (let cont = 0; contador < 3; cont++  ){
    if (listaDeDestino[contador] == destino){
        console.log(`Destino existente`)
        destinoExiste = true
        break
    }
}