
type SumVsaluse = { money: number, count:(value: number) => void }

let sumValues: SumVsaluse = {
  money: 200,
  count(value: number): void {
    this.money += value
  }
}


let handleCoun: {
  name: string,
  sumValues: SumVsaluse,
  friends: string[]
} = {
  name: 'Henry',
  sumValues: sumValues,
  friends: ['bucky', 'elyse']
}

handleCoun.sumValues.count(500)
console.log(handleCoun);

class Person {
  public name: string;
  protected gender: string;
  private age: number = 27;
}