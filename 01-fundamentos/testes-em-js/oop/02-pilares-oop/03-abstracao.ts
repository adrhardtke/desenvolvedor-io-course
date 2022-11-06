export abstract class ELetrodomestico {
    constructor(private readonly nome: string, private readonly voltagem: number){}

    abstract ligar(): void;
    abstract desligar(): void;

    testar(){
        console.log('Eletrodomestico test')
    }
}