var sumValues = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCoun = {
    name: 'Henry',
    sumValues: sumValues,
    friends: ['bucky', 'elyse']
};
handleCoun.sumValues.count(500);
console.log(handleCoun);
