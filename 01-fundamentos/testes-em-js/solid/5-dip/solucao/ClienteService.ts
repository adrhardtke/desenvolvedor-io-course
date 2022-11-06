import { Cliente } from "./Cliente";
import { IClienteRepository } from "./interfaces/IClienteRepository";
import { IClienteService } from "./interfaces/IClienteServices";
import { IEmailService } from "./interfaces/IEmailServices";

export class ClienteService implements IClienteService {

    constructor(private readonly emailServices: IEmailService, private readonly clienteRepository: IClienteRepository){}

    adicionarCliente(cliente: Cliente) {
        if(!cliente.validar()) return 'Dados invalidos'

        this.clienteRepository.adicionarCliente(cliente)

        this.emailServices.enviar('test@test.com', cliente.email.endereco, 'Bem-vindo','Você está cadastro')

        return 'Cliente cadastrado com sucesso'
    }
}