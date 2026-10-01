import Product from "./Products.js"

class DigitalProduct extends Product {
    private _fileSize: number
    public taxRate: number = 0
    constructor(sku: string, name: string, price: number, fileSize:number){
        super(sku, name, price)
        this._fileSize = fileSize
    }

    public get fileSize(){
        return this._fileSize + " mg"
    }
}

export default DigitalProduct