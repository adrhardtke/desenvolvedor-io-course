import { ICadastro } from "./ICadastro"

export interface ICadastroCliente extends ICadastro {
    validarDados(): void
    EnviarEmail(): void
}