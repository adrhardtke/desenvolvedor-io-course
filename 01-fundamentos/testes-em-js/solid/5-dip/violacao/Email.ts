export class Email {
    constructor(readonly endereco: string){}

    validar(): boolean {
        return this.endereco.includes('@')
    }
}