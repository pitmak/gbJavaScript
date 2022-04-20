console.log("ЗАДАНИЕ 5");

/**
 * Выполняет заданную арифметическую операцию над двумя аргументами
 * @param {number} arg1 первый аргумент 
 * @param {number} arg2 второй аргумент 
 * @param {string} operation арифметическая операция: "+", "-", "*", "/" 
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return mul(arg1, arg2);
        case "/":
            return div(arg1, arg2);
    }
}

console.log("12 + 4 = " + mathOperation(12, 4, "+"));
console.log("12 - 4 = " + mathOperation(12, 4, "-"));
console.log("12 * 4 = " + mathOperation(12, 4, "*"));
console.log("12 / 4 = " + mathOperation(12, 4, "/"));
