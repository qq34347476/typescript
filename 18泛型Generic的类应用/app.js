"use strict";
// 泛型-class
var CountNumber = /** @class */ (function () {
    function CountNumber(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    CountNumber.prototype.calcalate = function () {
        return +this.number1 / +this.number2;
    };
    return CountNumber;
}());
var countNumber = new CountNumber(10, 20);
console.log(countNumber.calcalate());
