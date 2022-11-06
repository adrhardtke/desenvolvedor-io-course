export abstract class DebitoConta {
    numeroTransacao: string

    constructor(){
        this.numeroTransacao = ''
    }
    
    abstract debitar(valor: number, conta: string): string

    formatarTransacao(){
        this.numeroTransacao = Math.random().toString()

        return this.numeroTransacao
    }
}