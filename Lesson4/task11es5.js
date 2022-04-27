"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = +(this.price * 0.75).toFixed(2);
}

let prod = new Product("колбаса", 2.20);
console.log(prod);
prod.make25PercentDiscount();
console.log(prod.name + " со скидкой: " + prod.price);