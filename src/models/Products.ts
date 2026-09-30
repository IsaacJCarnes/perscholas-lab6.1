class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    [this.sku, this.name, this.price] = [sku, name, price];
  }

  displayDetails(){
    return this.name + ": $"+this.price+"  -  " + this.sku
  }

  getPriceWithTax(){
    return this.price// * 1.08
  }
}

export default Product
