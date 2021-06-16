import {Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente ("Ricardo", 11122233309)
const cliente2 = new Cliente ("Alice",88822233309 )

//  cliente2.nome = "Alice"
//  cliente2.cpf = "88822233309"

const contaCorrenteRicardo = new ContaCorrente(cliente1,1001 )
// contaCorrenteRicardo.agencia = 1001
// contaCorrenteRicardo.cliente = cliente1

const conta2 = new ContaCorrente(cliente2,102)
// conta2.cliente = cliente1
// conta2.agencia = 102






contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.transferir(200,conta2)


console.log(ContaCorrente.numeroDeContas)
