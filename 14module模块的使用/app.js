"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 模块
// import { PI, calcCircle } from './stuff/circle';
var Circl = __importStar(require("./stuff/circle"));
// import { sumValue } from './stuff/sumValue';
var sumValue_1 = __importDefault(require("./stuff/sumValue"));
console.log(Circl.PI);
console.log(Circl.calcCircle(8));
console.log(sumValue_1.default(8, 120));
