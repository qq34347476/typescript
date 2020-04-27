// 命名空间 多重命名空间
/// <reference path="circle.ts" />
/// <reference path="sumValue.ts" />

console.log(MyMath.sumValue(15, 10));
console.log(MyMath.Circle.calcCircle(8));

// tsc --outfile app.js circle.ts sumValue.ts app.ts
