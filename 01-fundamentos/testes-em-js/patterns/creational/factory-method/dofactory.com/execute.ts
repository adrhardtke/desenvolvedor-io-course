import { Factory } from "./Factory"

const run = () => {
    let employees = []
    let factory = new Factory()

    employees.push(factory.createEmployee("fulltime"))
    employees.push(factory.createEmployee("parttime"))
    employees.push(factory.createEmployee("temporary"))
    employees.push(factory.createEmployee("contractor"))

    employees.forEach(e => e.say())
}

run()