"use strict";
// namespace: 命名空间
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
    function calcCircle(value) {
        return value * MyMath.PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
var PI = 2.88;
console.log(MyMath.sumValue(15, 10));
console.log(PI);
console.log(MyMath.PI);
