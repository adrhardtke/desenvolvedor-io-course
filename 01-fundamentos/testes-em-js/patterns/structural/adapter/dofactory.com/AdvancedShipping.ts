// new interface

export class AdvancedShipping {
    login(credentials: Object){
        // ...
    }
    setStart(start: string){
        // ...
    }
    setDestination(destination: string){
        // ...
    }
    calculate(weight: string){
        // ...
        return "$39.50"
    }
}