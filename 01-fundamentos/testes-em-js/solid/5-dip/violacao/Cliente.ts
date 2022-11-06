import { CPF } from "./CPF"
import { Email } from "./Email"

export class Cliente {
    clienteId: number
    nome: string
    email: Email
    cpf: CPF
    dataCadastro: Date

    constructor(clienteId: number, nome: string, email: Email, cpf: CPF, dataCadastro: Date) {
        this.clienteId = clienteId
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.dataCadastro = dataCadastro
	}

    validar(): boolean {
        return this.email.validar() && this.cpf.validar()
    }
}