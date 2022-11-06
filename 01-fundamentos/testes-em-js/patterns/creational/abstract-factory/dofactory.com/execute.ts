import { EmployeeFactory } from "./EmployeeFactory"
import { VendorFactory } from "./VendorFactory"

function run(){
    let persons = []
    let employeeFactory = new EmployeeFactory()
    let vendorFactory = new VendorFactory()

    persons.push(employeeFactory.create("Empl1"))
    persons.push(employeeFactory.create("Empl2"))
    persons.push(vendorFactory.create("Vend1"))
    persons.push(vendorFactory.create("Vend2"))

    persons.forEach(p => p.say())
}

run()