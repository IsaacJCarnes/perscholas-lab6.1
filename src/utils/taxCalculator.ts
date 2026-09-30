import Product from "../models/Products.js";

function calculateTax(product: Product){
    return Math.round(product.getPriceWithTax() * 100) / 100
}

export default calculateTax;