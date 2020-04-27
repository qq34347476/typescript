// interface 接口
interface PersonInterface {
  name: string;
  age: number; // :号 必须要写的
  sex?: string; // ?: 可选的
  readonly salary: number; // 只读 不能修改
  [propName: string]: any;
  greet(): void;
}

interface StudentInterface {
  id: number;
  course: string;
}

// 接口: class中
class People implements PersonInterface, StudentInterface {
  name: string = 'aaa';
  age: number = 31;
  salary: number = 8000;
  id: number = 101;
  course: string = 'it';
  greet() {
    console.log('hello world');
  }
}

class People2 extends People implements PersonInterface, StudentInterface  {
  constructor(name:string) {
    super()
    this.name = name
  }
  hello(): void{
    console.log(this.name);
  }
}
const aaa = new People2('aaa')
aaa.hello()



// interface接口的继承
interface Employee extends PersonInterface {
  work: string;
}

const employee: Employee = {
  name: 'aaa',
  age: 32,
  salary: 7000,
  sex: '男',
  work: '前端开发',
  greet() {
    console.log('hello');
  }
};

console.log(employee);
