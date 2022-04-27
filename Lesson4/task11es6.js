"use strict";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = +(this.price * 0.75).toFixed(2);
    }
}

let prod = new Product("колбаса", 2.20);
console.log(prod);
prod.make25PercentDiscount();
console.log(prod.name + " со скидкой: " + prod.price);