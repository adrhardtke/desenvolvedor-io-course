export class CPF {
    constructor(readonly cpf: string){}

    validar(): boolean {
        return this.cpf.length == 11
    }
}