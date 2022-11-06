export const add = (x: number, y: number)=> x + y
export const sub = (x: number, y: number)=> x - y
export const mul = (x: number, y: number)=> x * y
export const div = (x: number, y: number)=> x / y

export class Command {
    constructor(readonly execute: any, readonly undo: any, readonly value: any){}
}

export class addCommand{
    constructor(readonly value: any){
    }

    get(){
        return new Command(add, sub, this.value)
    }
}

export class subCommand{
    constructor(readonly value: any){
    }

    get(){
        return new Command(sub, add, this.value)
    }
}

export class mulCommand{
    constructor(readonly value: any){
    }
    get(){
        return new Command(mul, div, this.value)
    }
}

export class divCommand{
    constructor(readonly value: any){
    }
    get(){
        return new Command(div, mul, this.value)
    }
}