import { Pessoa } from "../02-pilares-oop/01-estado-comportamento";

// CASE 1
class PessoaFisica extends Pessoa {
    cpf: string
    constructor(nome: string, dataNascimento: Date, cpf: string){
        super(nome, dataNascimento)
        this.cpf = cpf
    }
}

class PessoaFisica2 {
    cpf: string
    pessoa: Pessoa

    constructor(pessoa: Pessoa, cpf: string){
        this.pessoa = pessoa
        this.cpf = cpf
    }
}

class TestesHerancaComposicao {
    constructor(){
        const pessoaHeranca = new PessoaFisica("Joao", new Date('1996-01-06 00:00:00'), '123.456.789-10')
        const pessoaComposicao = new PessoaFisica2(new Pessoa('Joao', new Date('1996-01-06 00:00:00')), '123.456.789-10')

        let nomeHeranca = pessoaHeranca.nome
        let nomeComposicao = pessoaComposicao.pessoa.nome
    }
}

// CASE 2


interface IRepositorio<T> {
    adicionar(obj: T): void
    excluir(obj: T): void
}

interface IRepositorioPessoa {
    adicionar(obj: Pessoa): void
}

class Repositorio<T> implements IRepositorio<T> {
    adicionar(obj: T): void {
        
    }
    excluir(obj: T): void {
        
    }
}


class RepositorioHerancaPessoa extends Repositorio<Pessoa> implements IRepositorioPessoa {
    adicionar(obj: Pessoa): void {
        
    }
    excluir(obj: Pessoa): void {
        
    }
}


class RepositorioComposicaoPessoa implements IRepositorioPessoa {
    constructor(private readonly repositorioPessoa: IRepositorio<Pessoa>){}

    adicionar(obj: Pessoa): void {
        this.repositorioPessoa.adicionar(obj)
    }
}

class TestesHerancaComposicao2 {
    constructor(){
        const repoHeranca = new RepositorioHerancaPessoa()
        repoHeranca.adicionar(new Pessoa('',new Date()))
        repoHeranca.excluir(new Pessoa('',new Date()))

        const repoComposicao = new RepositorioComposicaoPessoa(new Repositorio<Pessoa>())
        repoComposicao.adicionar(new Pessoa('',new Date()))
    }
}