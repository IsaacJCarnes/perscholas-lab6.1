import Product from "./Products.js"
import type {DiscountableProducts} from "../interfaces/DiscountableProducts.js"

class PhysicalProduct extends Product implements DiscountableProducts {
    taxRate: number = 0.1
    private _weight: number
    discount: number
    doApplyDiscount:boolean
    constructor(sku: string, name: string, price: number, weight:number, discount:number = 0, doApplyDiscount = false){
        super(sku, name, price)
        this._weight = weight
        this.discount = discount
        this.doApplyDiscount = doApplyDiscount
    }

    applyDiscount(): number {
        return this.price + this.price * this.discount
    }

    getPriceWithTax(): number {
        if(this.doApplyDiscount)
            return this.applyDiscount() * (1 + this.taxRate)
        return this.price * (1 + this.taxRate)
    }

    public get weight(){
        return this._weight + " kg"
    }
}

export default PhysicalProduct