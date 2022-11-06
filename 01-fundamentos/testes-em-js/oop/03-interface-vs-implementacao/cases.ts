interface IRepositorio {
    adicionar(): void
}

class Repositorio implements IRepositorio {

    adicionar(): void {
        
    }
}

class RepositorioFake implements Repositorio {
    adicionar(): void {
        
    }
}

class UsoImplementacao {
    processo(){
        let repositorio = new Repositorio()
        repositorio.adicionar()
    }
}

class UsoAbstracao {
    constructor(private readonly repositorio: IRepositorio){
    }

    processo(){
        this.repositorio.adicionar()
    }
}

class TesteInterfaceImplementacao {

    constructor(){
        const repoImp = new UsoImplementacao()
        repoImp.processo()

        const repoAbs = new UsoAbstracao(new Repositorio())
        repoAbs.processo()

        const repoAbsFake = new UsoAbstracao(new RepositorioFake())
        repoAbsFake.processo()
    }
}