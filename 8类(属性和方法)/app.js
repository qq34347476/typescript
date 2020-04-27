"use strict";
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
        this.setGender(this.gender);
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
        console.log(this.gender);
    };
    return Person;
}());
var person = new Person('aaa', 'bbb');
console.log(person.name, person.username);
person.printAge(30);
