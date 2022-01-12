// string, boolean, number, array, object, null, undefined...
let x:number = 10;

x = 12;

console.log(x);

// inferência x anotation
let y = 12;
// y = "teste";

let z: number = 12;

// tipos básicos
let firstName: string = "João";
let age: number = 30;
const isAdmin: boolean = true;

//string != string

console.log(typeof firstName);

firstName = "João";

console.log(firstName);

// objects
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUppercase());
console.log(firstName.toUpperCase());
myNumbers.push(4);

console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

// myTuple = [true, false, true]

// object literals -> {prop: value}
const user: { name: string, age: number } = {
    name: "João",
    age: 30
};

console.log(user);

console.log(user.name);

// user.job = "Programador"

// any
let a:any = 0;

a = "teste";
a = true;
a = {};


// union type
let id: string | number = "10";

id = 20;

// id = true
// id = []

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const prudctId: myIdType = "00001";
const shirId: myIdType = "00002";

// enum
// tamanho de roupas (size: Médio, size: Grande, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;

// teste = "outrovalor";
teste = "autenticado";

// funções
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 12));
// console.log(sum(12, true));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("João"));

function logger(message: string): void {
    console.log(message);
}

logger("Teste!");

function greeting(name: string, greet?: string): void {
    if(greet) {
    console.log(`Olá ${greet} ${name}`);
    return;    
    }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("João", "Sr.");

//interface
interface MathFucntionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFucntionParams): number {
    return nums.n1 + nums.n2;
}

sumNumbers({n1: 12, n2: 24});

console.log(sumNumbers({n1: 12, n2: 24}));

function multiplyNumbers(nums: MathFucntionParams): number {
    return nums.n1 * nums.n2;
}

const someNumbers:MathFucntionParams = {n1: 5, n2: 10};

console.log(multiplyNumbers(someNumbers));

// narrowing
// check types
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

    const a1 = [1, 2, 3];
    const a2 = ["a", "b", "c"];

    showArraysItems(a1);
    showArraysItems(a2);

    // classes
    class User {
        name
        role
        isApproved

        constructor(name: string, role: string, isApproved: boolean) {
            this.name = name;
            this.role = role;
            this.isApproved = isApproved;
        }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`O nome do usuário é ${this.name}`);
            return;
        }
        console.log("Não foi possível mostrar o nome do usuário");
    }
}

    const zeca = new User("Zeca", "Admin", true);

    console.log(zeca);

    zeca.showUserName();

    zeca.showUserRole(false);

    // interfaces em classes
    interface IVehicle {
        brand: string;
        showBrand(): void;
    }

    class Car implements IVehicle {
        brand
        wheels

        constructor(brand: string, wheels: number) {
            this.brand = brand;
            this.wheels = wheels;
        }

        showBrand(): void {
            console.log(`A marca é ${this.brand}`);
        }
    }

    const Ka = new Car("Ford", 4);

Ka.showBrand();

// classes com herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine:number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

// decorators
function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}> (constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
    };
};
}

@BaseParamters()
class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log(sam);