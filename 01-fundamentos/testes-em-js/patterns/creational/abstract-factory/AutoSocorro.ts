// client class

import { AutoSocorroFactory } from "./AutoSocorroFactory";
import { Guincho } from "./Guincho";
import { SocorroVeiculoGrandeFactory } from "./SocorroVeiculoGrandeFactory";
import { SocorroVeiculoMedioFactory } from "./SocorroVeiculoMedio";
import { SocorroVeiculoPequenoFactory } from "./SocorroVeiculoPequenoFactory";
import { PorteEnum, Veiculo } from "./Veiculo";

export class AutoSocorro {
    veiculo: Veiculo
    guincho: Guincho

    constructor (factory: AutoSocorroFactory, veiculo: Veiculo){
        this.veiculo = factory.criarVeiculo(veiculo.modelo, veiculo.porte)
        this.guincho = factory.criarGuinho()
    }

    realizarAtendimento(){
        this.guincho.socorrer(this.veiculo)
    }

    static criarAutoSocorro(veiculo: Veiculo): AutoSocorro {
        switch(veiculo.porte){
            case PorteEnum.pequeno: return new AutoSocorro(new SocorroVeiculoPequenoFactory(), veiculo)
            case PorteEnum.medio: return new AutoSocorro(new SocorroVeiculoMedioFactory(), veiculo)
            case PorteEnum.grande: return new AutoSocorro(new SocorroVeiculoGrandeFactory(), veiculo)
            default: throw new Error("Nao foi possivel identificar o veiculo")
        }
    }
}