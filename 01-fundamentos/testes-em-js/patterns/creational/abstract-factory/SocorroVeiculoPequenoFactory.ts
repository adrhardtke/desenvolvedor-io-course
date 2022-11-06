import { AutoSocorroFactory } from "./AutoSocorroFactory";
import { Guincho, GuinchoCreator } from "./Guincho";
import { Porte, PorteEnum, Veiculo, VeiculoCreator } from "./Veiculo";

// concrete factory
export class SocorroVeiculoPequenoFactory extends AutoSocorroFactory {
    criarGuinho(): Guincho {
        return GuinchoCreator.criar(PorteEnum.pequeno)
    }
    criarVeiculo(modelo: string, porte: Porte): Veiculo {
        return VeiculoCreator.criar(modelo, porte)
    }

}