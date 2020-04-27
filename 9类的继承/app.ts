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
    // this.setGender(this.gender);
  }

  private setGender(gender: string) {
    this.gender = gender;
    // console.log(this.gender);
  }

  printName(name: string) {
    this.name = name;
    console.log(this.name);
  }
}

const person = new Person('aaa', 'bbb');
// console.log(person.name, person.username);
// person.printAge(30);

// student类 继承于 person类
class Student extends Person {
  studentId: number;
  constructor(name: string, username: string, studentId: number) {
    super(name, username);
    // console.log(this.gender); // yes
    // console.log(this.age); // no

    this.studentId = studentId;

    // this.setGender('女'); // no
  }

  studentPrint() {
    console.log(this.studentId);
  }

  // 重写父类方法
  printName(name: string) {
    this.name = name;
    console.log(this.name);
  }
}

const misterwu = new Student('aaa', 'bbb2', 2001);
console.log(misterwu);

misterwu.studentPrint();
misterwu.printAge(32);
