import { Cliente } from './Cliente'

export class ClienteRepository {
    adicionarCliente(cliente: Cliente){
        // using (var cn = new SqlConnection())
        //     {
        //         var cmd = new SqlCommand();

        //         cn.ConnectionString = "MinhaConnectionString";
        //         cmd.Connection = cn;
        //         cmd.CommandType = CommandType.Text;
        //         cmd.CommandText = "INSERT INTO CLIENTE (NOME, EMAIL CPF, DATACADASTRO) VALUES (@nome, @email, @cpf, @dataCad))";

        //         cmd.Parameters.AddWithValue("nome", cliente.Nome);
        //         cmd.Parameters.AddWithValue("email", cliente.Email);
        //         cmd.Parameters.AddWithValue("cpf", cliente.Cpf);
        //         cmd.Parameters.AddWithValue("dataCad", cliente.DataCadastro);

        //         cn.Open();
        //         cmd.ExecuteNonQuery();
        //     }
    }
}