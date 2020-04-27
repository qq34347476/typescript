var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircle(value) {
        return value * PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
