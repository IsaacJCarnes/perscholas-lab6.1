class Product {
  private sku: string;
  private name: string;
  public price: number;
  public taxRate: number = 0.08;

  constructor(sku: string, name: string, price: number) {
    [this.sku, this.name, this.price] = [sku, name, price];
  }

  displayDetails(){
    return this.name + ": $"+this.price+"  -  " + this.sku
  }

  getPrice(){
    return this.price
  }

  getPriceWithTax(){
    return this.price * (1 + this.taxRate)
  }
}

export default Product
