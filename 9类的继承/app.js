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
// class 类(属性,方法)
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.gender = '男';
        this.age = 27;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function (age) {
        this.age = age;
        console.log(this.age);
        // this.setGender(this.gender);
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
        // console.log(this.gender);
    };
    Person.prototype.printName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    return Person;
}());
var person = new Person('aaa', 'bbb');
// console.log(person.name, person.username);
// person.printAge(30);
// student类 继承于 person类
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, username, studentId) {
        var _this = _super.call(this, name, username) || this;
        // console.log(this.gender); // yes
        // console.log(this.age); // no
        _this.studentId = studentId;
        return _this;
        // this.setGender('女'); // no
    }
    Student.prototype.studentPrint = function () {
        console.log(this.studentId);
    };
    // 重写父类方法
    Student.prototype.printName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    return Student;
}(Person));
var misterwu = new Student('aaa', 'bbb2', 2001);
console.log(misterwu);
misterwu.studentPrint();
misterwu.printAge(32);
