// 基本数据类型
// let num = 25;
// let flo = 25.5;
// let hex = 0xf000;
// let binary = 0b1001;
// let octal = 0o733;

// 重新赋值
// num = '25'; // 不能存储非原有的类型数据
// num = 25.5;

// ts原型
let num = 25;
// 等同于
// let num: number = 25;

// boolean
let isLogin = false; // let isLogin:boolean = false; true & false
// 更改
// isLogin = 1; // 不行

// string
let str: string = 'hello world';

let anything; // let anything: any
anything = 25;
anything = 'hello';
