// abstractProduct
export enum PorteEnum {
    "pequeno",
    "medio",
    "grande"
}

export type Porte =  PorteEnum.pequeno | PorteEnum.medio | PorteEnum.grande

export abstract class Veiculo {
    constructor(readonly modelo: string, readonly porte: Porte){}
}

// produto concreto
export class VeiculoPequeno extends Veiculo {
    constructor(modelo: string, porte: Porte){
        super(modelo, porte)
    }
}

// produto concreto
export class VeiculoMedio extends Veiculo {
    constructor(modelo: string, porte: Porte){
        super(modelo, porte)
    }
}

// produto concreto
export class VeiculoGrande extends Veiculo {
    constructor(modelo: string, porte: Porte){
        super(modelo, porte)
    }
}

export class VeiculoCreator {
    static criar(modelo: string, porte: Porte): Veiculo {
        switch(porte){
            case PorteEnum.pequeno: return new VeiculoPequeno(modelo, porte)
            case PorteEnum.medio: return new VeiculoMedio(modelo, porte)
            case PorteEnum.grande: return new VeiculoGrande(modelo, porte)
            default: throw new Error("Porte desconhecido")
        }
    }
}