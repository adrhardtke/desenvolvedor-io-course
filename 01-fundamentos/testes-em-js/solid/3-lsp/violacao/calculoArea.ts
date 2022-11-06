import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";

export class CalculoArea {
    obterAreaRetangulo(ret: Retangulo){
        console.log(ret.area())
    }

    calcular(){
        let quad = new Quadrado(10,5)
        this.obterAreaRetangulo(quad)
    }
}

new CalculoArea().calcular()