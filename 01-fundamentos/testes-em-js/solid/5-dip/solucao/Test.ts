import { ClienteRepository } from "./ClienteRepository";
import { ClienteService } from "./ClienteService";
import { EmailService } from "./EmailService";

class Teste {
    testeDip(){
        let cliService = new ClienteService(new EmailService(), new ClienteRepository())
    }
}