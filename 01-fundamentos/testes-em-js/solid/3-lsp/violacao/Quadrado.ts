import { Retangulo } from "./Retangulo";

export class Quadrado extends Retangulo {
    constructor(altura: number, largura: number){
        super()
        this.setAltura(altura)
        this.setLargura(largura)
    }

    setAltura(altura: number): void {
        this.altura = this.largura = altura
    }

    setLargura(largura: number): void {
        this.largura = this.altura = largura 
    }
}