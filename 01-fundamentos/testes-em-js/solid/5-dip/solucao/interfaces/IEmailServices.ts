export interface IEmailService {
    enviar(de: string, para: string, assunto: string, mensagem: string): void
}