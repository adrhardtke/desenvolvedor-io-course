// abstract product

import { Porte, PorteEnum, Veiculo } from "./Veiculo";

export abstract class Guincho {
    constructor(readonly porte: Porte){}

    abstract socorrer(veiculo: Veiculo): void
}

// produto concreto
export class GuinchoPequeno extends Guincho {
    constructor(porte: Porte){
        super(porte)
    }

    socorrer(veiculo: Veiculo): void {
        console.log(`Socorrendo Carro pequeno - modelo ${veiculo.modelo}`)
    }

}

// produto concreto
export class GuinchoMedio extends Guincho {
    constructor(porte: Porte){
        super(porte)
    }

    socorrer(veiculo: Veiculo): void {
        console.log(`Socorrendo Carro medio - modelo ${veiculo.modelo}`)
    }

}

// produto concreto
export class GuinchoGrande extends Guincho {
    constructor(porte: Porte){
        super(porte)
    }

    socorrer(veiculo: Veiculo): void {
        console.log(`Socorrendo Carro grande - modelo ${veiculo.modelo}`)
    }

}

export class GuinchoCreator {
    static criar(porte: Porte): Guincho {
        switch(porte){
            case PorteEnum.pequeno: return new GuinchoPequeno(porte)
            case PorteEnum.medio: return new GuinchoMedio(porte)
            case PorteEnum.grande: return new GuinchoGrande(porte)
            default: throw new Error("Porte de guincho desconhecido")
        }
    }
}