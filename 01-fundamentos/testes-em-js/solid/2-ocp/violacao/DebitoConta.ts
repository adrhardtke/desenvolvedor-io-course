import { TipoConta } from "./TipoConta";

class DebitoConta {

    debitar(valor: number, conta: string, tipoConta: TipoConta){
        if(tipoConta == TipoConta.corrente){
           // debita conta corrente
        }
        if(tipoConta == TipoConta.poupanca){
            // debita conta poupanca
        }
    }
}