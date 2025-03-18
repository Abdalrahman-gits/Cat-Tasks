/* Functions and Parameters */ 

/* Assign_1 */  
function sayHello(theName, theGender) {
  theGender == "Male" ? console.log(`Hello Mr ${theName}`) :
  theGender == "Female" ? console.log(`Hello Miss ${theName}`) : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
console.log("=======================");

/* ======================= */ 

/* Assign_2 */
function calculate(firstNum, secondNum, operation) {
  if(!firstNum || !secondNum){
    console.log("Second Number Not Found");
    return 0;
  }
  switch(operation){
    default:
      case 'add':
        console.log(firstNum + secondNum);
        break;
        case 'subtract':
          console.log(firstNum - secondNum);
          break;
          case 'multiply':
            console.log(firstNum * secondNum);
      break;
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
  
  console.log("=======================");
  
  /* ======================= */ 
  
  /* Assign_3 */
  function ageInTime(theAge) {
    
    if(theAge < 100 && theAge > 10){

      console.log(`Age in Months => ${theAge * 12}`);
      console.log(`Age in Weeks => ${theAge * 12 * 4}`);
      console.log(`Age in days => ${theAge * 12 * 4 * 7}`);
      console.log(`Age in hours => ${theAge * 12 * 4 * 7 * 24}`);
      console.log(`Age in minutes => ${theAge * 12 * 4 * 7 * 24 * 60}`);
      console.log(`Age in seconds => ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
      
    }
    
    else
    console.log("Age Out Of Range")
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("=======================");

/* ======================= */ 

/* Assign_4 */
function checkStatus(a, b, c) {
  let name,age,availablitiy;

  if(typeof a == "string"){
    name = a;
    if(typeof b == "number"){
      age = b;
      availablitiy = c == true ? "You Are Available For Hire" : "You Are Not Available For Hire";
    }
    else{
      age = c;
      availablitiy = b == true ? "You Are Available For Hire" : "You Are Not Available For Hire";
    }
  }
  else if(typeof b == "string"){
    name = b;
    if(typeof a == "number"){
      age = a;
      availablitiy = c == true ? "You Are Available For Hire" : "You Are Not Available For Hire";
    }
    else{
      age = c;
      availablitiy = a == true ? "You Are Available For Hire" : "You Are Not Available For Hire";
    }
  }
  else{
      name = c;
      if(typeof b == "number"){
        age = b;
        availablitiy = a == true ? "You Are Available For Hire" : "You Are Not Available For Hire";
      }
      else{
        age = a;
        availablitiy = b == true ? "You Are Available For Hire" : "You Are Not Available For Hire";
      }
  }

  console.log(`Hello ${name},Your Age Is ${age},${availablitiy}`);

}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("=======================");

/* ======================= */ 

/* Assign_5 */
function createSelectBox(startYear, endYear) {

  let selectBox = document.createElement("select");

  for(let start = startYear;start <= endYear;start++){
    let option = document.createElement("option");
    option.value = start;
    option.innerHTML = start;
    selectBox.appendChild(option);
  }

  document.body.appendChild(selectBox);
}

createSelectBox(2000, 2021);
console.log("In the Document Page");
console.log("=======================");

/* ======================= */ 

/* Assign_6 */
function multiply(...args){
  let result = 1;
  
  for(let i = 0 ; i < args.length; i++){
    if(typeof args[i] != "string"){
      result *= Math.trunc(args[i]);
    }
  }
  
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log("=======================");

/* ======================= */

/**************************** Functions and Scopes ***************************/ 
/* Assign_1 */

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    zName = zName.split(" ");
    firstName = zName[0];
    secondName = zName[1].toUpperCase().split("");
    secondName.splice(1,secondName.length-1,'.');
    secondName = secondName.join("");
    return firstName + " " + secondName;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    zAge = zAge.split(" ");
    return `Your Age Is ${zAge[0]}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    zCountry = zCountry.toUpperCase().split("");
    zCountry.splice(2);
    zCountry = zCountry.join("")
    return zCountry;
  }
  function fullDetails() {
    // Write Your Code Here
    return namePattern(zName)+ ", " + ageWithMessage(zAge) + ", " + countryTwoLetters(zCountry);
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log("==========================")

/* ==================== */
/* Assign_2 */

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = _ => `Iam A Normal Function`; // Arrow Function_1

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`; // Arrow Function_2

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("==========================")

/* ==================== */
/* Assign_3 */


// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`; // My Arrow

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("====================");
/* =======================*/
/* Assign_4 */

function specialMix(...data){
  let sum =0;
  let allstrings = true;

  for(let i=0;i<arguments.length;i++){
    if(Number.isInteger(arguments[i])){
      allstrings=false;
      sum+=arguments[i];
    }
    else{
      let stringum=[];
      let currentString = arguments[i].split("");
      for(let j=0;j<currentString.length;j++){
        if(!Number.isNaN(+currentString[j])){
          allstrings=false;
          stringum.push(+currentString[j]);
        }
        else
          break;
      }
      if(stringum.length){
        stringum = stringum.join("");
        sum = sum + +stringum;
      }
    }
  }
  if(allstrings)
    return "All Is Strings";
  else
    return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/* ========================== */
/*************************** Higher Order Functions *************************/

// Assign_1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

mix = mix.map((ele) => {
  if(Number.isInteger(ele))
    return ele="";
  else
    return ele;
}).reduce((acc,ele) => acc + ele);
console.log(mix)

/****************************************/
// Assign_2
let myString = "EElllzzzzzzzeroo";
let repeats =[];
let myStringNew =myString.split("").filter((ele) => {
  if(repeats.includes(ele)){
    return false;
  }
  else{
    repeats+=ele;
    return true;
  }
}).join("");

console.log(myStringNew);

/*****************************************/
// Assign_3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newString = myArray.reduce((acc,ele) => {
  if(typeof ele === "object"){
    for(let i=0;i<ele.length;i++){
      acc+=ele[i];
    }
    return acc;
  }
  else{
    return acc+=ele;
  }
},"");
console.log(newString);

/****************************************/
// Assign_4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newArr = numsAndStrings.filter((ele) => Number.isInteger(ele))
                            .map((ele) => -ele);
console.log(newArr);

/*****************************************/
// Assign_5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function(acc,ele){
  if(ele % 2 === 0)
    return acc*=ele;
  else
    return acc+=ele;
},1);
console.log(result);

/* ================================ */
/* ********* Objects And Methods **************** */
// Assign_1
let member = {
  name:"Elzero",
  age:38,
  country:"Egypt",
  fullDetails : function(){
    return `My Name Is ${this.name} , My Age Is ${this.age} , I Live in ${this.country}`;
  },
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

/* ===================== */

/*********************************************/
// Method One
// Create Your Object Here
let objMethodOne = {
  property:"Methode One"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object({property:"methode two"});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.assign({},{property:"Methodethree"});

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour= Object.create({property:"four"})
console.log(objMethodFour.property); // "Method Four"

/*******************************************************/
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = {};
Object.assign(finalObject,finalObject.a = a ,threeNums,twoNums);

console.log(finalObject);

/******************************************************/
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length; // returns array of properties names

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"
