import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor ("Rodrigo, 10000 , 12345678900")
const gerente = new Gerente ("Ricardo, 5000, 12378945601")
diretor.cadastrarSenha("123456")
gerente.cadastrarSenha("123")
const cliente = new Cliente ("Lais", 78945612379, "456")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)








// import {Cliente} from "./Conta/Cliente.js"
// import{ContaCorrente} from "./Conta/ContaCorrente.js"
// import { ContaPoupança } from "./Conta/ContaPoupança.js"
// const cliente1 = new Cliente ("Ricardo", 11122233309)
// // const cliente2 = new Cliente ("Alice",88822233309 )

// //  cliente2.nome = "Alice"
// //  cliente2.cpf = "88822233309"

// const contaCorrenteRicardo = new ContaCorrente(0, cliente1,1001 )
// // contaCorrenteRicardo.agencia = 1001
// // contaCorrenteRicardo.cliente = cliente1

// // const conta2 = new ContaCorrente(cliente2,102)
// // conta2.cliente = cliente1
// // conta2.agencia = 102

// contaCorrenteRicardo.depositar(500)
// contaCorrenteRicardo.sacar(100)
// // contaCorrenteRicardo.transferir(200,conta2)
// const contaPoupança = new ContaPoupança(50, cliente1, 1001) 

// console.log(contaCorrenteRicardo)
