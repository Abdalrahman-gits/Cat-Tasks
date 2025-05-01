// Assignment 1

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

let iter = setOfNumbers.values();

iter.next();
iter.next();
console.log(iter.next().value);

console.log("===========================")

// Assignment 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

myFriends = [...new Set(myFriends)].sort();

console.log(myFriends);

console.log("===========================")

// Assignment 3

let myMap = new Map();

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

/* Converting Object to Map */

// for(let key in myInfo){
  //   myMap.set(key,myInfo[key]);
  // }
  
  // OR 
  
myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('role'));

console.log("===========================");

// Assignment 4

let theNumber = 100020003000;

console.log(+[...new Set([...`${theNumber}`])].filter(item => item !=='0').join(""));

console.log("===========================");

// Assignment 5

let theName = "Elzero";
let arrName =[];

console.log(theName.split(""));
console.log(Array.from(theName));
console.log([... theName]);

for(let i=0; i < theName.length; i++){
  arrName.push(theName[i]);
}

console.log(arrName);
console.log(Object.assign([],theName))

console.log("===========================");

// Assignment 6

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let arrnums = [];

chars.forEach( item => {
  if(typeof(item) === "number"){
    arrnums.push(item);
  }
});

chars = chars.filter(item => typeof(item) !== "number");

chars.unshift(...arrnums);

chars.copyWithin(0,arrnums.length,arrnums.length * 2);

console.log(chars);

console.log("===========================");



// Assignment 7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo]);

console.log(numsOne.concat(numsTwo));

numsOne.push(...numsTwo);
console.log(numsOne);

console.log("===========================");

// Assignment 8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * [...n1 , ...n2].length);

console.log("===========================");