export class Employee {
    constructor(readonly name: string){}

    say(){
        console.log(`I am employee: ${this.name}`)
    }
}