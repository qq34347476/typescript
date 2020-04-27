"use strict";
// 1.class set get修饰词 用于隔离私有属性 和 可公开属性
// 2.class 静态属性和方法
var Person = /** @class */ (function () {
    function Person() {
        this._name = 'aaa';
    }
    Person.calcCircle = function (value) {
        return this.PI * value;
    };
    Object.defineProperty(Person.prototype, "setName", {
        // 私有属性赋值
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        // 私有属性取值
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Person.PI = 3.14;
    return Person;
}());
// let person = new Person();
// console.log(person.getName);
// person.setName = 'bbb';
// console.log(person.getName);
// console.log(person.PI);
console.log(Person.PI);
console.log(Person.calcCircle(8));
