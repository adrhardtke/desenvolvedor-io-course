// abstract factory 

import { Guincho } from "./Guincho"
import { Porte, Veiculo } from "./Veiculo"

export abstract class AutoSocorroFactory {
    abstract criarGuinho(): Guincho;
    abstract criarVeiculo(modelo: string, porte: Porte): Veiculo;
}