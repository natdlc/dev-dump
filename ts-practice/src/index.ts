let id: number = 5;
let company: string = "orius";
let isTodoList: boolean = true;

console.log(isTodoList);

let numbers: number[] = [1, 2, 3];

//Objects

type Animal = {
	id: number;
	age: number;
	isHungry: boolean;
};

const kid: Animal = {
	id: 50034,
	age: 1,
	isHungry: true,
};
//Enums

enum Cats {
	kid,
	kuya,
	ate,
}

// Type assertion

let cid: any = 1;
let customerId = <number>cid;
let customName = cid as string;

customerId = 1;
customName = "true";

function addNum(x: number, y: string): string {
	return x + y;
}

//void
function log(message: string | number): void {
	// return message;
}

// interfaces

interface Cat {
	name: string;
	age: number;
	isHungry?: boolean;
}

const kidd: Cat = {
	name: "Kid",
	age: 1,
};

kidd.age = 3;

console.log();

function map<Input, Output>(
	arr: Input[],
	func: (arg: Input) => Output
): Output[] {
	return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

console.log(parsed);

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
	return x.length;
}

console.log(len("true"));

function sum({ a, b, c }: { a: number; b: number; c: number }) {
	console.log(a + b + c);
}