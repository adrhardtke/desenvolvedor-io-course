import { ELetrodomestico } from "./03-abstracao"

export class CafeteiraEspressa extends ELetrodomestico {

    constructor(nome = "Padrao", voltagem = 220){
        super(nome, voltagem)
    }

    private aquecerAgua(){

    }

    private moerGraos(){

    }

    prepararCafe(){
        this.testar()
        this.aquecerAgua()
        this.moerGraos()
    }
    
    testar(): void {
        console.log('Cafeteira Espressa Test')
    }

    ligar(): void {
        console.log('ligando')
    }
    desligar(): void {
        console.log('desligando')
    }
}