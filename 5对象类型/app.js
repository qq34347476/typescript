"use strict";
// object & type
var dataObj = {
    name: 'Henry',
    age: 31
};
dataObj = {
    name: 'hello',
    age: 12
};
// 复杂对象类型
var complex = {
    data: [1, 2, 34],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 34],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
