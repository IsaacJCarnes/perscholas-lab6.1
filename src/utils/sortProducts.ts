import Product from "../models/Products.js"

function sortGeneral(array: Array<any>, asc: boolean, sortFunction: (a:any, b:any) => number){
    if(asc) return array.sort(sortFunction)
    return array.sort(sortFunction).reverse()
}

function sortByName(products: Array<Product>, asc:boolean = true){
    return sortGeneral(products, asc, (a:Product, b:Product) => a.name.localeCompare(b.name))
}

function sortByPrice(products: Array<Product>, asc:boolean = true){
    return sortGeneral(products, asc, (a:Product, b:Product) => a.price > b.price ? 1 : -1)
}

export {sortByName, sortByPrice}