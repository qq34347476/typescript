var MyMath;
(function (MyMath) {
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
})(MyMath || (MyMath = {}));
