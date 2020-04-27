// 1.class set get修饰词 用于隔离私有属性 和 可公开属性
// 2.class 静态属性和方法

class Person {
  private _name: string = 'aaa';
  static PI: number = 3.14;

  static calcCircle(value: number): number {
    return this.PI * value;
  }

  // 私有属性赋值
  set setName(value: string) {
    this._name = value;
  }

  // 私有属性取值
  get getName() {
    return this._name;
  }
}

// let person = new Person();
// console.log(person.getName);
// person.setName = 'bbb';
// console.log(person.getName);
// console.log(person.PI);

console.log(Person.PI);
console.log(Person.calcCircle(8));
