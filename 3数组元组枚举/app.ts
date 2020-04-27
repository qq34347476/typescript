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
enum Color {
  Black, // 0
  Yellow = 100,
  Red
}

let myColor: Color = Color.Red;
console.log(myColor);
