import type Product from "./models/Products.js";
import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProducts.js";
import calculateTax from "./utils/taxCalculator.js";

const iPad = new PhysicalProduct("001", "iPad", 299.99, 0.44, 0.05)
const minecraft = new DigitalProduct("002", "Minecraft Pocket Edition", 15.99, 150)
const products:Array<Product> = [
  iPad,
  minecraft,
];

let totalPrice:number = 0
products.forEach(product => {
    console.log(product.displayDetails())
    let priceWithTax = calculateTax(product)
    totalPrice += priceWithTax;
    console.log("Price w/ Tax $", priceWithTax, "\n")
});
console.log("Final Price for Everything - $", totalPrice)

iPad.doApplyDiscount = true
console.log("\n", "iPad price with discount (5%) - $", calculateTax(iPad))