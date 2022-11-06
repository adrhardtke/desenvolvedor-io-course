export class Pessoa {
    nome: string
    dataNascimento: Date

    constructor(nome: string, dataNascimento: Date){
        this.nome = nome
        this.dataNascimento = dataNascimento
    }

    calcularIdade() {
        const dataAtual = new Date()
        let idade = dataAtual.getFullYear() - this.dataNascimento.getFullYear()
        // if(dataAtual.getFullYear() < this.dataNascimento.setFullYear(idade)) idade--

        return idade
    }
}

const pessoa = new Pessoa('Adriano', new Date('1996-02-01 00:00:00'))
console.log(pessoa.calcularIdade())

