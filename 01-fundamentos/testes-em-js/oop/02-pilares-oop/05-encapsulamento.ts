import { CafeteiraEspressa } from "./04-polimorfismo";

class AutomacaoCafe {
    servirCafe(){
        const espresso = new CafeteiraEspressa()
        espresso.ligar()
        espresso.prepararCafe()
        espresso.desligar()
    }
}

new AutomacaoCafe().servirCafe()