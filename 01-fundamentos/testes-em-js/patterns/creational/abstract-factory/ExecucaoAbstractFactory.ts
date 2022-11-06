import { AutoSocorro } from "./AutoSocorro";
import { PorteEnum, VeiculoCreator } from "./Veiculo";

export class ExecucaoAbstractFactory {
    static executar(){
        let veiculosSocorro = [
            VeiculoCreator.criar("celta", PorteEnum.pequeno),
            VeiculoCreator.criar("jetta", PorteEnum.medio),
            VeiculoCreator.criar("bmw", PorteEnum.grande)
        ]

        veiculosSocorro.forEach(veiculo => {
            AutoSocorro.criarAutoSocorro(veiculo).realizarAtendimento()
        })
    }
}

ExecucaoAbstractFactory.executar()