import { ICadastro } from "./ICadastro"

export interface ICadastroProduto extends ICadastro {
    validarDados(): void
}