import { Paralelogramo } from "./Paralelogramo";

export class Quadrado extends Paralelogramo {
    constructor(altura: number, largura: number){
        super()
        if(largura != altura) throw new Error("Os dois lados precisam ser iguais")
        this.setAltura(altura)
        this.setLargura(largura)
    }
}