// 字符串
let str: string = "nihao ts"
let str1: string = "jiayou"

// 布尔类型
var flag: boolean = true
flag = false
console.log(flag)

// 数字类型(浮点型)
var num: number = 123
num = 12.3
console.log(num)

// 数组1
let arr1: number[] = [1, 2, 3]
arr1.forEach(v => {
  console.log(v)
})
// 数组2 泛型
let arr2: Array<number> = [2, 3, 4]
console.log(arr2)

//元组
let arr3: [string, boolean] = ["jiayou", false]
console.log(arr3)

// 枚举
enum Flag { success = 1, error = -1 }
let f: Flag = Flag.success
console.log(f)

// 任意类型
let any: any = "任意类型"
console.log(any)
any = 123
console.log(any)

// null 和 undefined
let num1: undefined
console.log(num1)
let num2: number | undefined
console.log(num2)

// void
function run(): void {
  console.log("没有返回类型")
}
run()

// never类型
let a: never

//函数
// 匿名函数
let fun = function (): number {
  return 1;
}
console.log(fun())
// 自定义参数
function getInfo1(name: string, age: number): string {
  return `${name}----${age}`
}

console.log(getInfo1("xiaoli", 18));

// 可选参数必须放在最后面
function getInfo2(name: string, age?: number): string {
  return `${name}----${age}`
}
console.log(getInfo2("xiaoli"));

//默认参数
function getInfo3(name: string, age: number = 35): string {
  return `${name}----${age}`
}
console.log(getInfo3("xiaoli"));

//重载
function getInfo4(name: string, age: number): string
function getInfo4(name: string): string
function getInfo4(name: any, age?: any): any {
  if (typeof age === "number") {
    console.log("我是1")
  } else if (typeof name == "string") {
    console.log("我是2")
  } else {
    console.log(3)
  }
}
getInfo4("11", 11)

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
  name: string; // 默认public
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name}在运动`
  }
  work() {
    return `${this.name}在工作`
  }
  static print() {
    console.log("打印")
  }
}
Person.print()

// 多态

// 对象接口
interface FullName {
  firstName: string;
}
function printName(name: FullName) {
  console.log(name)
}

printName({ firstName: "hhh" })

const user = { firstName: "小白" }
printName(user)

// 函数类型接口
interface encrypt {
  (key: string, value: string): string
}

const mm: encrypt = function (key: string, value: string): string {
  return key + value
}
console.log(mm("1", "2"))

// 类类型接口
// interface Animal {
//   name: string
//   eat(str: string): void
// }
// class Dog implements Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat(): void {
//     console.log("eat eat ~!!!!")
//   }

// }
// const d = new Dog("嗨");
// d.eat();
// 扩展接口

interface Animal {
  eat(str: string): void
}

interface Person2 extends Animal {
  work(): void
}
class Web implements Person2 {
  work(): void {
    console.log("我要工作")
  }
  eat(str: string): void {
    console.log("吃" + str)
  }

}

const w = new Web();
w.work()
w.eat("apple")