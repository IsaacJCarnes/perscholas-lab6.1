import Product from "./Products.js"

class PhysicalProduct extends Product {
    _weight: number
    constructor(sku: string, name: string, price: number, weight:number){
        super(sku, name, price)
        this._weight = weight
    }
    getPriceWithTax(): number {
        return this.price * 1.1
    }

    public get weight(){
        return this._weight + " kg"
    }
}

export default PhysicalProduct