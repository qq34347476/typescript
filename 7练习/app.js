"use strict";
var sumValue = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Henry',
    sumValue: sumValue,
    friends: ['bucky', 'elyse']
};
handleCount.sumValue.count(500);
console.log(handleCount);
