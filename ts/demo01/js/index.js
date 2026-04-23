"use strict";
// 字符串
let str = "nihao ts";
let str1 = "jiayou";
// 布尔类型
var flag = true;
flag = false;
console.log(flag);
// 数字类型(浮点型)
var num = 123;
num = 12.3;
console.log(num);
// 数组1
let arr1 = [1, 2, 3];
arr1.forEach(v => {
    console.log(v);
});
// 数组2 泛型
let arr2 = [2, 3, 4];
console.log(arr2);
//元组
let arr3 = ["jiayou", false];
console.log(arr3);
// 枚举
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
let f = Flag.success;
console.log(f);
// 任意类型
let any = "任意类型";
console.log(any);
any = 123;
console.log(any);
// null 和 undefined
let num1;
console.log(num1);
let num2;
console.log(num2);
// void
function run() {
    console.log("没有返回类型");
}
run();
// never类型
let a;
//函数
// 匿名函数
let fun = function () {
    return 1;
};
console.log(fun());
// 自定义参数
function getInfo1(name, age) {
    return `${name}----${age}`;
}
console.log(getInfo1("xiaoli", 18));
// 可选参数必须放在最后面
function getInfo2(name, age) {
    return `${name}----${age}`;
}
console.log(getInfo2("xiaoli"));
//默认参数
function getInfo3(name, age = 35) {
    return `${name}----${age}`;
}
console.log(getInfo3("xiaoli"));
function getInfo4(name, age) {
    if (typeof age === "number") {
        console.log("我是1");
    }
    else if (typeof name == "string") {
        console.log("我是2");
    }
    else {
        console.log(3);
    }
}
getInfo4("11", 11);
//箭头函数
// setTimeout(() => {
//   console.log(1)
// }, 1000)
// es6
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let p = new Person("zs", 18);
// console.log(p.name);
// 继承
// class Person {
//   name: string; // 默认public
//   constructor(name: string) {
//     this.name = name;
//   }
//   run(): string {
//     return `${this.name}在运动`
//   }
// }
// let p = new Person("王五");
// console.log(p.run());
// class Web extends Person {
//   constructor(name: string) {
//     super(name)
//   }
// }
// let p2 = new Web("李斯");
// console.log(p2.run())
// 静态方法
class Person {
    constructor(name) {
        this.name = name;
    }
    run() {
        return `${this.name}在运动`;
    }
    work() {
        return `${this.name}在工作`;
    }
    static print() {
        console.log("打印");
    }
}
Person.print();
function printName(name) {
    console.log(name);
}
printName({ firstName: "hhh" });
const user = { firstName: "小白" };
printName(user);
const mm = function (key, value) {
    return key + value;
};
console.log(mm("1", "2"));
class Web {
    work() {
        console.log("我要工作");
    }
    eat(str) {
        console.log("吃" + str);
    }
}
const w = new Web();
w.work();
w.eat("apple");
// 泛型
function getDeta(value) {
    return value;
}
console.log(getDeta(111));
const b1 = function (value, value2) {
    return value;
};
console.log(b1("b", "c"));
const b2 = function (value, value2) {
    return value2;
};
console.log(b2("b", "c"));
// 泛型类
//# sourceMappingURL=index.js.map