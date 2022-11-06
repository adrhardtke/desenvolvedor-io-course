import { Paralelogramo } from "./Paralelogramo";
import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";

export class CalculoArea {
    obterAreaParalelograma(par: Paralelogramo){
        console.log(par.area())
    }

    calcular(){
        let quad = new Quadrado(5,5)
        this.obterAreaParalelograma(quad)

        let ret = new Retangulo(10,5)
        this.obterAreaParalelograma(ret)
    }
}

new CalculoArea().calcular()