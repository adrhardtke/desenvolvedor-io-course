import { Employee } from "./Employee";

export class EmployeeFactory {
    create(name: string){
        return new Employee(name)
    }
}