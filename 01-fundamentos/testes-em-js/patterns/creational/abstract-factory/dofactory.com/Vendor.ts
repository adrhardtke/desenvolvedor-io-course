export class Vendor {
    constructor(readonly name: string){}

    say(){
        console.log(`I am vendor: ${this.name}`)
    }
}