import { Calculator } from "./Calculator"
import { addCommand, divCommand, mulCommand, subCommand } from "./command"

const run = () => {
    let calculator = new Calculator()

    // issue commands

    calculator.execute(new addCommand(100).get())
    calculator.execute(new subCommand(24).get())
    calculator.execute(new mulCommand(6).get())
    calculator.execute(new divCommand(2).get())

    calculator.undo()
    calculator.undo()

    console.log("\nValue: " + calculator.getCurrentValue())
}

run()