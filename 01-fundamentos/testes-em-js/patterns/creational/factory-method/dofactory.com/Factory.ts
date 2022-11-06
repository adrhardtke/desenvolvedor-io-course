import { Contractor } from "./Contractor";
import { FullTime } from "./Fulltime";
import { PartTime } from "./PartTime";
import { Temporary } from "./Temporary";

export class Factory {
    createEmployee(type: string){
        let employee: any

        switch (type) {
            case "fulltime":
                employee = new FullTime()
                break;
            case "parttime":
                employee = new PartTime()
                break;
            case "temporary":
                employee = new Temporary()
                break;
            case "contractor":
                employee = new Contractor()
                break;
            default:
                break;
        }
        employee.type = type
        employee.say = function () {
            console.log(`${this.type}: rate ${this.hourly}/hour`)
        }

        return employee
    }
}