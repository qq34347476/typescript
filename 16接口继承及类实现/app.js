"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 接口: class中
var People = /** @class */ (function () {
    function People() {
        this.name = 'aaa';
        this.age = 31;
        this.salary = 8000;
        this.id = 101;
        this.course = 'it';
    }
    People.prototype.greet = function () {
        console.log('hello world');
    };
    return People;
}());
var People2 = /** @class */ (function (_super) {
    __extends(People2, _super);
    function People2(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    People2.prototype.hello = function () {
        console.log(this.name);
    };
    return People2;
}(People));
var aaa = new People2('aaa');
aaa.hello();
var employee = {
    name: 'aaa',
    age: 32,
    salary: 7000,
    sex: '男',
    work: '前端开发',
    greet: function () {
        console.log('hello');
    }
};
console.log(employee);
