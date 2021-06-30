//Classe Abstrata : só funciona para ser herdada
export class Conta{
    constructor( saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta ){
            throw new Error('Você não deveria instanciar um objeto do tipo Conta diretamente')
        }
    }
    // Método abstrato
    sacar(valor) {
       throw new Error ("O método sacar da conta é abstrato")
    }
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}