"use strict";
// interface 可以继承  type不能继承
// type Person2 = { name: string; age: number };
var person = {
    name: 'aaa',
    age: 28,
    // sex: '男'
    salary: 7000,
    ids: [1, 5, 10]
};
// person.salary = 1000;
function printPerson(person) {
    console.log("\u6211\u53EB " + person.name + ", \u6211\u7684\u5E74\u9F84\u662F" + person.age + ", \u6211\u7684\u5DE5\u8D44\u662F" + person.salary);
}
printPerson(person);
