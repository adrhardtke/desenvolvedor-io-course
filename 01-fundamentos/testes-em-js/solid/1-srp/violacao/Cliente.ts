class Solid {
    clientId: number
    nome: string
    email: string
    cpf: string
    dataCadastro: Date


	constructor(clientId: number, nome: string, email: string, cpf: string, dataCadastro: Date) {
        this.clientId = clientId
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.dataCadastro = dataCadastro
	}

    adicionarCliente(){
        if(!this.email.includes('@'))
            return "CLiente com email invalido"

        if(this.cpf.length !== 11)
            return "Cliente com cpf invalido"

        // ---------- CONECTAR COM O BANCO DE DADOS
        console.log('Conectando DB')
        // using (var cn = new SqlConnection())
        // {
        //     var cmd = new SqlCommand();

        //     cn.ConnectionString = "MinhaConnectionString";
        //     cmd.Connection = cn;
        //     cmd.CommandType = CommandType.Text;
        //     cmd.CommandText = "INSERT INTO CLIENTE (NOME, EMAIL CPF, DATACADASTRO) VALUES (@nome, @email, @cpf, @dataCad))";

        //     cmd.Parameters.AddWithValue("nome", Nome);
        //     cmd.Parameters.AddWithValue("email", Email);
        //     cmd.Parameters.AddWithValue("cpf", CPF);
        //     cmd.Parameters.AddWithValue("dataCad", DataCadastro);

        //     cn.Open();
        //     cmd.ExecuteNonQuery();
        // }
        // ----------------------------------------

        // ---------- ENVIANDO E-MAIL
        console.log('Enviando Email')
        // var mail = new MailMessage("empresa@empresa.com", Email);
        // var client = new SmtpClient
        // {
        //     Port = 25,
        //     DeliveryMethod = SmtpDeliveryMethod.Network,
        //     UseDefaultCredentials = false,
        //     Host = "smtp.google.com"
        // };

        // mail.Subject = "Bem Vindo.";
        // mail.Body = "Parabéns! Você está cadastrado.";
        // client.Send(mail);
        // ----------------------------------------

        return "Cliente cadastrado com sucesso"
    }
    
}