import { Shipping } from "./Shipping"
import { ShippingAdapter } from "./ShippingAdapter"

const run = () => {
    let shipping = new Shipping()
    let credentials = { token: "abcdefg" }
    let adapter = new ShippingAdapter(credentials)

    // original shipping object and interface

    var cost = shipping.request("78701","10010"," 2 lbs")
    console.log("old cost: "+cost)

    // new shipping object with adapter interface
    cost = adapter.request("78701","10010","2 lbs")
    console.log("new cost "+cost)
}