import { DebitoConta } from "./DebitoConta";

export class DebitoContaCorrente extends DebitoConta {
    debitar(valor: number, conta: string): string {
        // debita conta corrente
        return this.formatarTransacao()
    }
}

// poderia ser ao inves de uma herança, poderia receber no constructor:
export class DebitoContaCorrente2 {

    constructor(private readonly debitoConta: DebitoConta){

    }
    debitarContaCorrente(valor: number, conta: string): string {
        // debita conta corrente
        return this.debitoConta.formatarTransacao()
    }
}