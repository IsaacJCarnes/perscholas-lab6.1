import Product from "../models/Products.js"

function sortByName(products: Array<Product>, asc:boolean = true){
    if(asc) return products.sort((a:Product, b:Product) => a.name.localeCompare(b.name))
    return products.sort((a:Product, b:Product) => b.name.localeCompare(a.name))
}

function sortByPrice(products: Array<Product>, asc:boolean = true){
    if(asc) return products.sort((a:Product, b:Product) => a.price > b.price ? 1 : -1)
    return products.sort((a:Product, b:Product) => a.price > b.price ? -1 : 1)
}

export {sortByName, sortByPrice}