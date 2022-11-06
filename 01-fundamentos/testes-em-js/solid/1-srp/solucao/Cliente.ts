import { CPF } from "./CPF"
import { Email } from "./Email"

export class Cliente {
    clientId: number
    nome: string
    email: Email
    cpf: CPF
    dataCadastro: Date


	constructor(clientId: number, nome: string, email: Email, cpf: CPF, dataCadastro: Date) {
        this.clientId = clientId
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.dataCadastro = dataCadastro
	}

    validar() {
        return this.email.validar() && this.cpf.validar()
    }
}