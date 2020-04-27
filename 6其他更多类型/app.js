"use strict";
// union type 检查类型 null undefined never
// union type
var unionType = 12;
unionType = '12';
unionType = true;
// 检查类型
var checkType = 10;
if (typeof checkType == 'string') {
    console.log('number');
}
// null 和 undefined
var myNull = null;
myNull = undefined;
// never  never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。通常表现为抛出异常或无法执行到终止点（例如无线循环）
var x;
// 不能将其他类型 转为 never类型
// x = 123;
// never的应用场景 抛出异常
function error(message) {
    throw new Error(message);
}
// 死循环
function loop() {
    while (true) { }
}
var y;
y = (function () {
    throw new Error('message');
})();
