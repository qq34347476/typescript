// namespace: 命名空间
namespace MyMath {
  export const PI = 3.14;

  export function sumValue(num1: number, num2: number): number {
    return num1 + num2;
  }

  export function calcCircle(value: number) {
    return value * PI;
  }
}

const PI = 2.88;

console.log(MyMath.sumValue(15, 10));
console.log(PI);
console.log(MyMath.PI);
