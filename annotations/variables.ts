let apples: number = 5;

let speed: string = "speed";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

console.log(now);

// Array
const colors: string[] = ["red", "yellow"];

// colors.push(1);

// classes
class Car {}

const car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// function
const logNum: (i: number) => void = (i: number) => {
    console.log(i);
};

const json = "{'x':10,'y':20}";
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let word of words) {
    if (word == "green") foundWord = true;
}

// type inference won't work
let numbers = [-12, 10, -3];
let numberAboveZero: boolean | number = false;

for (let num of numbers) {
    if (num > 0) numberAboveZero = num;
}
