import { Cliente } from "../Cliente";

export interface IClienteRepository {
    adicionarCliente(cliente: Cliente): void
}