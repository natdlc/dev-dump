console.log("hello ts");

//implicit
let helloWorld = "hello world";

//explicit
let firstName: string = "John";
let age: number = 30;

//tuple
type stringAndNumber = [string, number];
let x: stringAndNumber = ["hello", 10];

//enums
enum Cities {
	Makati,
	QC,
	Mandaluyong,
	Pasig,
	TMC,
}

//usage
let region = Cities.Pasig;
console.log(region);

//Interface
interface User {
	name: string;
	id: number;
}

const user: User = {
	name: "nat",
	id: 0,
};

