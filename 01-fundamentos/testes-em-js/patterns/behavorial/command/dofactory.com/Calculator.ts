import { Command } from "./command"

export class Calculator {
    current: number = 0
    commands: Command[] = []

    action(command: Command){
        let name = command.execute.toString().substr(9,3)
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    execute(command: Command){
        this.current = command.execute(this.current, command.value)
        this.commands.push(command)
        console.log(this.action(command) + ": " + command.value)
    }

    undo(){
        var command = this.commands.pop()
        if(command){
            this.current = command.undo(this.current, command.value)
            console.log("Undo "+ this.action(command) + ": "+command?.value)
        }
    }

    getCurrentValue(){
        return this.current
    }
}