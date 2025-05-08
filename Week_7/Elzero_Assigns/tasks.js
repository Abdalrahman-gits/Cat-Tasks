// Assignment 1

// let dateBirth = new Date("mar 21, 2003");
// let dateBirth = new Date(2003,2,21)
// let dateBirth = new Date("2003 3 21");
// let dateBirth = new Date("2003-3-21");
let dateBirth = new Date("2003/3/21");
let dateNow = new Date();

let ageSecs = Math.trunc((dateNow - dateBirth) / 1000);
let ageMins = Math.trunc(ageSecs / 60);
let ageHrs = Math.trunc(ageMins / 60);
let ageDays = Math.trunc(ageHrs / 24);
let ageMonths = Math.trunc(ageDays / 30);
let ageYears = Math.trunc(ageMonths / 12);

console.log([ageSecs,ageMins,ageHrs,ageDays,ageMonths,ageYears]);

console.log("=".repeat(40));


// Assignment 2

let beginDate = new Date(0);

beginDate.setFullYear(beginDate.getFullYear() + 10);
beginDate.setHours(0,0,1,0);

console.log(beginDate);

console.log("=".repeat(40));

// Assignment 3

let monthMap = new Map([[0,"January"],[1,"February"],[2,"march"],[3,"april"],[4,"may"],[5,"june"],[6,"july"]]);
let todayDate = new Date();

todayDate.setDate(0);

console.log(`Previous Month Is ${monthMap.get(todayDate.getMonth()).toUpperCase()} And Last Day Is ${todayDate.getDate()}`);

console.log("=".repeat(40));


// Assignment 4

let mybirth1 = new Date("mar 21, 2003");
let mybirth2 = new Date(2003,2,21)
let mybirth3 = new Date("2003-3-21");

console.log(mybirth1);
console.log(mybirth2);
console.log(mybirth3);

console.log("=".repeat(40));

// Assignment 5

let perforBefore = performance.now();

// for(let i=1; i<=99999; i++){
//   console.log(i);
// }

let perforAfter = performance.now();

let timeTaken = perforAfter - perforBefore;

console.log(`Loop Took ${timeTaken} Milliseconds.`);

console.log("=".repeat(40));

// Assignment 6

function* gen() {
  let value = 14,
  adder = 140;

  while(true) {
    yield value;
    value += adder;
    adder += 200;
  }
}


let gen1 = gen(); 

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

console.log("=".repeat(40))

// Assignment 7

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield*genNumbers();
  yield*genLetters();
}

let generator = genAll();

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

console.log("=".repeat(40))

// Assignment 8

import calc from "/mod-1.js"; // imported calc function (exported default) instead {calc}
import * as vals from "/mod-2.js"; // imports all from mod-2.js

console.log(calc(vals.a,vals.b,vals.c))

console.log("=".repeat(40))