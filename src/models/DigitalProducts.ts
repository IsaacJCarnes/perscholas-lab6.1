import Product from "./Products.js"

class DigitalProduct extends Product {
    _fileSize: number
    constructor(sku: string, name: string, price: number, fileSize:number){
        super(sku, name, price)
        this._fileSize = fileSize
    }
    getPriceWithTax(): number {
        return this.price
    }

    public get fileSize(){
        return this._fileSize + " mg"
    }
}

export default DigitalProduct