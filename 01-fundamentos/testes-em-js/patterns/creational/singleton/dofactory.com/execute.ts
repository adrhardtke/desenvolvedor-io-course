import { Singleton } from "./Singleton";

function run() {
    let instance1 = Singleton.getInstance()
    let instance2 = Singleton.getInstance()

    console.log(instance1)
    console.log(instance2)
    console.log("Mesma instancia? "+ instance1 === instance2)
}

run()