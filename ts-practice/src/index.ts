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
  return message;
} 

// interfaces

interface Cat {
  name: string,
  age: number,
  isHungry?: boolean
}

const kidd: Cat = {
  name: "Kid",
  age: 1,
}

console.log()