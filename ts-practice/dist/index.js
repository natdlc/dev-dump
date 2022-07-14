"use strict";
let id = 5;
let company = "orius";
let isTodoList = true;
console.log(isTodoList);
let numbers = [1, 2, 3];
const kid = {
    id: 50034,
    age: 1,
    isHungry: true,
};
//Enums
var Cats;
(function (Cats) {
    Cats[Cats["kid"] = 0] = "kid";
    Cats[Cats["kuya"] = 1] = "kuya";
    Cats[Cats["ate"] = 2] = "ate";
})(Cats || (Cats = {}));
// Type assertion
let cid = 1;
let customerId = cid;
let customName = cid;
customerId = 1;
customName = "true";
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    // return message;
}
const kidd = {
    name: "Kid",
    age: 1,
};
kidd.age = 3;
console.log();
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);
function len(x) {
    return x.length;
}
console.log(len("true"));
function sum({ a, b, c }) {
    console.log(a + b + c);
}
