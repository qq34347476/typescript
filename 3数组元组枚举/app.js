"use strict";
// 数组 元组 枚举
// let names: Array<string> = ['henry', 'bucky'];
// let numbers: Array<number> = [1, 2];
// let numbers: number[] = [1, 2];
// let anyArray: any[] = ["hehe", 1, false];
// console.log(names[0]);
// names[0] = 'hello';
// 元组
// let colors: [string, number] = ['hello', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 100] = "Yellow";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
