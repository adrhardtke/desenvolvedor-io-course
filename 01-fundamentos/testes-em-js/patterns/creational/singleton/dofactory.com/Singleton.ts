export class Singleton {
    private static instance: Singleton

    private constructor(){}

    private static createInstance() {
        let object = new Object({
            name: 'I am the instance',
            id: Math.ceil(Math.random() * 100)
        })
        return object
    }

    static getInstance(): Singleton {
        if(!Singleton.instance){
            Singleton.instance = this.createInstance()
        }

        return Singleton.instance
    }
}