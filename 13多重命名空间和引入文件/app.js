var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircle(value) {
            return value * PI;
        }
        Circle.calcCircle = calcCircle;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
})(MyMath || (MyMath = {}));
// 命名空间 多重命名空间
/// <reference path="circle.ts" />
/// <reference path="sumValue.ts" />
console.log(MyMath.sumValue(15, 10));
console.log(MyMath.Circle.calcCircle(8));
// tsc --outfile app.js circle.ts sumValue.ts app.ts
