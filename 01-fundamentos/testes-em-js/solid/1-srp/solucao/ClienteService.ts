import { Cliente } from "./Cliente";
import { ClienteRepository } from "./ClienteRepository";
import { EmailService } from "./EmailService";

export class ClienteService {
    adicionarCliente(cliente: Cliente) {
        if(!cliente.validar()) return 'Dados invalidos'

        let repo = new ClienteRepository()
        repo.adicionarCliente(cliente)

        EmailService.enviar('test@test.com', cliente.email.endereco, 'Bem-vindo','Você está cadastro')

        return 'Cliente cadastrado com sucesso'
    }
}