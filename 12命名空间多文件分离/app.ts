// 命名空间 多文件分离

console.log(MyMath.sumValue(15, 10));
console.log(MyMath.calcCircle(8));

// tsc --outfile app.js circle.ts sumValue.ts app.ts
