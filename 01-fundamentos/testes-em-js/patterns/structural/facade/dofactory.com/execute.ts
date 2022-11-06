import { Mortgage } from "./Mortgage"

const run = () => {
    let mortgage = new Mortgage("joan Templeton")
    var result = mortgage.applyFor("$1000,00")

    console.log(result)
}

run()