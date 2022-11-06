import { DebitoConta } from "./DebitoConta";

export class DebitoContaPoupanca extends DebitoConta {
    debitar(valor: number, conta: string): string {
        // Valida aniversario da conta
        // Debita conta corrente
        return this.formatarTransacao()
    }
}