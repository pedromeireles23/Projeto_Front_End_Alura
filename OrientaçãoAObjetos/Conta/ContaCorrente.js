import { Conta } from "./Conta.js"
export class ContaCorrente extends Conta {
    static numeroDeContas = 0

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

// Extends é usado para Herdar uma classe
// Assim conseguimos compartilhar classes para deixar o código mais limpo
// O comando super() faz uma referência para a classa que estamos herdando, a classe mãe