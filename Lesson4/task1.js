"use strict";

function createObjectFromNumber(num) {
    if (!Number.isInteger(num)) {
        console.log("createObjectFromNumber: " + num + " - не число");
        return {};
    }
    if (num < 0 || num > 999) {
        console.log("createObjectFromNumber: " + num + " - вне диапазона [0,999]");
        return {};
    }
    let res = {};
    res.units = num % 10;
    res.tens = Math.floor(num / 10) % 10;
    res.hundreds = Math.floor(num / 100) % 10;
    return res;
}

console.log(createObjectFromNumber("123"));
console.log(createObjectFromNumber(1000));
console.log(createObjectFromNumber(123));