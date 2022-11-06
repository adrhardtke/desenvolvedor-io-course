import { Cliente } from "../Cliente";

export interface IClienteService {
    adicionarCliente(cliente: Cliente): void
}