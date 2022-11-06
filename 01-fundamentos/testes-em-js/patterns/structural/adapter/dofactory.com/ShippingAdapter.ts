import { AdvancedShipping } from "./AdvancedShipping";

export class ShippingAdapter {
    shipping: AdvancedShipping

    constructor(credentials: Object){
        this.shipping = new AdvancedShipping()
        this.shipping.login(credentials)
    }

    request(zipStart: string, zipEnd: string, wieght: string) {
        this.shipping.setStart(zipStart)
        this.shipping.setDestination(zipEnd)
        return this.shipping.calculate(wieght)
    }
}

