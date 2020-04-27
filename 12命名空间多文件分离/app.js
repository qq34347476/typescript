var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircle(value) {
        return value * PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
})(MyMath || (MyMath = {}));
/// <reference path="circle.ts" />
/// <reference path="sumValue.ts" />
console.log(MyMath.sumValue(15, 10));
console.log(MyMath.calcCircle(8));
