import { Pessoa } from "./01-estado-comportamento";

class Funcionario extends Pessoa {
    dataAdmissao: Date
    registro: string

    constructor(nome: string, dataNascimento: Date, dataAdmissao: Date, registro: string){
        super(nome, dataNascimento)
        this.dataAdmissao = dataAdmissao
        this.registro = registro
    }
    
}

class Processo {
    execute(){
        const funcionario = new Funcionario("Joao", new Date('1996-01-06 00:00:00'), new Date('2020-02-03 00:00:00'), "123456")
        funcionario.calcularIdade()
    }
}