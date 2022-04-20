console.log("ЗАДАНИЕ 6"); 1

let amount = parseInt(prompt("Введите сумму для зачисления:"));

let oneDigit = amount % 10;
let tenDigit = Math.floor(amount / 10) % 10;

let rubleInWords = "";
if (oneDigit == 1 && tenDigit != 1) {
    rubleInWords = " рубль";
} else if (oneDigit > 1 && oneDigit < 5 && tenDigit != 1) {
    rubleInWords = " рубля";
} else {
    rubleInWords = " рублей";
}

alert("Ваша сумма в " + amount + rubleInWords + " успешно зачислена.");
