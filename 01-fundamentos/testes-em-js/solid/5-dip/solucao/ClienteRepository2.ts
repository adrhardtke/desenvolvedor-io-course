import { Cliente } from "./Cliente";
import { IClienteRepository } from "./interfaces/IClienteRepository";

export class ClienteRepository2 implements IClienteRepository {
    adicionarCliente(cliente: Cliente): void {
        // usar outra forma de ir até o BD
    }

}