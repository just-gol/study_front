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