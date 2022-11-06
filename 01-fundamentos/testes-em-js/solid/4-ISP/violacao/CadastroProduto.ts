import { ICadastro } from "./Icadastro";

export class CadastroProduto implements ICadastro {
    validarDados(): void {
        // validar valor
    }
    salvarBanco(): void {
        // insert tabela produto
    }
    EnviarEmail(): void {
        // produto nao tem email, o que faço agora?
        throw new Error('method not implemented')
    }
    
}