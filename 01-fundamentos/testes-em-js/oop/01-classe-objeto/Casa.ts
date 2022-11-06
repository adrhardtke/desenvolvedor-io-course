class Casa { // Classe -> representação de algo do mundo real
    tamanhoM2: number
    andares: number
    valor: number
    numeroVagas: number

    constructor(tamanhoM2: number, andares: number, valor: number, numeroVagas: number){
        this.tamanhoM2 = tamanhoM2
        this.andares = andares
        this.valor = valor
        this.numeroVagas = numeroVagas
    }

}

class Objeto {

    constructor(){
        const casa = new Casa(100, 2, 10000, 3) // Objeto é a instancia da classe
    }
}