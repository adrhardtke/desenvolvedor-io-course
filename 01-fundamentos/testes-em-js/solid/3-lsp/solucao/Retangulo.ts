import { Paralelogramo } from "./Paralelogramo";

export class Retangulo extends Paralelogramo {
    constructor(altura: number, largura: number){
        super()
        this.setAltura(altura)
        this.setLargura(largura)
    }
}