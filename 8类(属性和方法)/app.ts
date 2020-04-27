// class 类(属性,方法)
class Person {
  public name: string;
  protected gender: string = '男';
  private age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
    this.username = username;
  }

  printAge(age: number) {
    this.age = age;
    console.log(this.age);
    this.setGender(this.gender);
  }

  private setGender(gender: string) {
    this.gender = gender;
    console.log(this.gender);
  }
}

const person = new Person('aaa', 'bbb');
console.log(person.name, person.username);

person.printAge(30);
