// interface 接口
interface Person {
  name: string;
  age: number; // :号 必须要写的
  sex?: string; // ?: 可选的
  readonly salary: number; // 只读 不能修改
  [propName: string]: any;
}
// interface 可以继承  type不能继承
// type Person2 = { name: string; age: number };

let person: Person = {
  name: 'aaa',
  age: 28,
  // sex: '男'
  salary: 7000,
  ids: [1, 5, 10]
};

// person.salary = 1000;

function printPerson(person: Person) {
  console.log(
    `我叫 ${person.name}, 我的年龄是${person.age}, 我的工资是${person.salary}`
  );
}

printPerson(person);
