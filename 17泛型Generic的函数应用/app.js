"use strict";
// TypeScript 中的泛型(Generic)
// 在函数中使用泛型
// function identify<T>(arg: T): T {
//   return arg;
// }
// 可以明确指定类型
// console.log(identify<string>('string'));
// 交给ts推断类型
// console.log(identify(true));
// 在接口中使用泛型
// interface GenericIdentify<T> {
//   (arg: T): T;
// }
// function identify<T>(arg: T): T {
//   return arg;
// }
// let myIdentify: GenericIdentify<number | string> = identify;
// // 可以明确指定类型
// console.log(myIdentify('my-string'));
// // 交给ts推断类型
// console.log(myIdentify(30));
// 为泛型添加约束
// function getLength<T extends { length: any }>(obj: T): any {
function getLength(obj) {
    return obj;
}
// const obj = {
//   name: 'aaa',
//   age: 30,
//   length: 10
// };
var obj = 25;
console.log(getLength(obj));
