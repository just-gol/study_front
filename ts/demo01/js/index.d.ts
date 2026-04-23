declare let str: string;
declare let str1: string;
declare var flag: boolean;
declare var num: number;
declare let arr1: number[];
declare let arr2: Array<number>;
declare let arr3: [string, boolean];
declare enum Flag {
    success = 1,
    error = -1
}
declare let f: Flag;
declare let any: any;
declare let num1: undefined;
declare let num2: number | undefined;
declare function run(): void;
declare let a: never;
declare let fun: () => number;
declare function getInfo1(name: string, age: number): string;
declare function getInfo2(name: string, age?: number): string;
declare function getInfo3(name: string, age?: number): string;
declare function getInfo4(name: string, age: number): string;
declare function getInfo4(name: string): string;
declare class Person {
    name: string;
    constructor(name: string);
    run(): string;
    work(): string;
    static print(): void;
}
interface FullName {
    firstName: string;
}
declare function printName(name: FullName): void;
declare const user: {
    firstName: string;
};
interface encrypt {
    (key: string, value: string): string;
}
declare const mm: encrypt;
interface Animal {
    eat(str: string): void;
}
interface Person2 extends Animal {
    work(): void;
}
declare class Web implements Person2 {
    work(): void;
    eat(str: string): void;
}
declare const w: Web;
declare function getDeta<T>(value: T): T;
interface Sky {
    <T>(v1: T, v2: T): T;
}
declare const b1: Sky;
interface Sky2<T> {
    (v1: T, v2: T): T;
}
declare const b2: Sky2<string>;
declare function get(params: any): (target: any, method: any, desc: any) => void;
declare class Client {
    url: any | undefined;
    constructor();
    getData(): void;
}
//# sourceMappingURL=index.d.ts.map