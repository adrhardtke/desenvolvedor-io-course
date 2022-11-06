export abstract class Paralelogramo {
    altura: number
    largura: number

    constructor(){
        this.altura = 0
        this.largura = 0
    }

    getAltura(){
        return this.altura
    }

    setAltura(altura: number){
        this.altura = altura
    }

    getLargura(){
        return this.largura
    }

    setLargura(largura: number){
        this.largura = largura
    }

    area(){
        return this.altura * this.largura
    }
}