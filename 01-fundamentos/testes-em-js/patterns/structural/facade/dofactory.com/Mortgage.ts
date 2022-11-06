import { Background } from "./Background"
import { Bank } from "./Bank"
import { Credit } from "./Credit"

export class Mortgage {
    constructor(readonly name: string){}

    // access multiple subsystems
    applyFor(amount: string){
        let result = "approved"

        if(!new Bank().verify(this.name, amount)){
            result = "denied"
        }
        else if(!new Credit().get(this.name)){
            result = "denied"
        }
        else if(!new Background().check(this.name)){
            result = "denied"
        }

        return this.name + " has been " + result + " for a " + amount + " mortgage"
    }
}