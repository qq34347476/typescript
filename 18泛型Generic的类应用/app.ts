// 泛型-class
class CountNumber<T extends number> {
  number1: T;
  number2: T;

  constructor(num1: T, num2: T) {
    this.number1 = num1;
    this.number2 = num2;
  }

  calcalate(): number {
    return +this.number1 / +this.number2;
  }
}

const countNumber = new CountNumber<number>(10, 20);
console.log(countNumber.calcalate());
