import { Vendor } from "./Vendor";

export class VendorFactory {
    create(name: string){
        return new Vendor(name)
    }
}