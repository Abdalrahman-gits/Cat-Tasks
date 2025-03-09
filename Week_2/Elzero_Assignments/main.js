/* ***** 31 => 32 ***** */
console.group("Lessons 31 => 32");

/* Assign_1 */
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 != -"-40"); // true
console.log(+ "10" == 10); // true
console.log(! 20 == false); // true

/* Assign_2 */
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(num2 > num1); // true
console.log(Boolean(num1)); // true
console.log(num1 <= num2); // true
console.log(num2 >= num1); // true

/* Assign_3 */
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a != b > a >= c); // true
console.log(!(a == b) && !(a === b) && !(a < c) && !(a <= c)); // true

console.groupEnd()



/* ================================= */
/* ************ 33 => 37 *********** */
console.group("Lessons 33 => 37");

/* Assign_1 */

let num = 9; // "009"

if(num < 10){
  console.log(`00${num}`);
}
else if(num < 100){
  console.log(`0${num}`);
}
else {
  console.log(`${num}`);
}

/* Assign_2 */

let val = 9;
let str = "10";
let str2 = "20";

if(val === str) {
  console.log(`{num1} Is The Same Value As {str}`);
}
else if(val == str){
  console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
}
else{
  if(typeof val === typeof str){
    console.log("{str} Is The Same Type As {str} But Not The Same Value");
  }
  else{
    console.log("{num1} Is Not The Same Value Or The Same Type As {str}")
  }
}


/* Assign_3 */

let val1 = 10;
let val2 = 30;
let val3 = "30";

if((val3 > val1) && (typeof val3 != typeof val2)){
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
else if((val3 > val1) && ( val3 ==  val2) && (typeof val3 != typeof val2)){
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
else if((val3 !== val1) && (typeof val3 != typeof val2)){
  console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}


/* Assign_4 */

let n1 = 11;
let n2 = 10;
let n3 = 11;
let n4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (n1 > n2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (n1 > n2 && n1 < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (n1 > n2 && n1 === n3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((n1 + n2) < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((n1 + n3) < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((n1 + n2 + n3) < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (n4 - (n1 + n3) + n2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.groupEnd();




/* ================================= */
/* ************ 38 => 39 *********** */

console.group("Lessons 38 => 39");

let day = "   monday  ";

day = day.trim().toLowerCase().split("");
day[0] = day[0].toUpperCase();
day = day.join("");

switch (day) {
  
  case 'Friday':
    case 'Saturday':
      case 'Sunday':
        
        console.log("No Appointments Available");
        break;
        
        case 'Monday':
          case 'Thursday':
            
    console.log("From 10:00 AM To 5:00 PM");
    break;
    
    case 'Tuesday':
      console.log("From 10:00 AM To 6:00 PM");
      break;
      
      case 'Wednsday':
        console.log("From 10:00 AM To 7:00 PM");
        break;
        
        default:
          console.log("Its Not A Valid Day")
}

console.groupEnd();




/* ================================= */
/* ************ 40 => 47 *********** */

/* Assign_1 */
console.group("Lessons 40 => 47");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let ind = 3;

ind-=ind
// Method 1
console.log(myFriends.slice(ind,--ind)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(ind);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/* Assign_2 */
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

console.log(friends.splice(true,true+true)); // ["Eman", "Osama"]

/* Assign_3 */
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/* Assign_4 */
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length-true][0].toUpperCase().substring(true+true)); // ZERO

/* Assign_5 */
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.includes(needle)){
  console.log("Found")
}
if(haystack.indexOf(needle)){
  console.log("Found")
}
if(haystack[1] === needle){
  console.log("Found")
}

/* Assign_6 */
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join("").slice(-arr1.length).toLowerCase();
console.log(allArrs); // fxy

console.groupEnd();

/* ================================= */
/* ************ 48 => 53 *********** */
console.group("Lessons 48 => 53");

/* Assign_1 */
let start = 10;
let end = 100;
let exclude = 40;

for (let index = start; index <= end; index+=10) {
  if (index == 40)
    continue;
  console.log(index);
  
}

console.log("========================");

/* Assign_2 */
start = 10;
end = 0;
stop = 3;

for(let i=start;i>=end;i--){
  i < 10 ? console.log(`0${i}`) : console.log(`${i}`);
  if(i == stop)
    break;
}

console.log("========================");

/* Assign_3 */
start = 1;
end = 6;
let breaker = 2;

for(let i = start;i <= end;i++){
  console.log(i);
  console.log("-- ",breaker)
  console.log("-- ",breaker ** breaker);
}

console.log("========================");

/* Assign_4 */
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if(index < (jump ** jump))
    break;
}

console.log("========================");

/* Assign_5 */
friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length;

for (let i = 0; i < friends.length; i++) {
  if(friends[i][0].toLowerCase() == letter )
    continue;
  else{
    console.log(`${count++} => ${friends[i]}`);
  }
}

console.log("========================");

/* Assign_6 */
start = 0;
let swappedName = "elZerO";

swappedName = swappedName.split("");

for (let i = 0; i < swappedName.length; i++) {
  if(swappedName[i] == swappedName[i].toUpperCase()){
    swappedName[i] = swappedName[i].toLowerCase();
  }
  else{
    swappedName[i] = swappedName[i].toUpperCase();
  }
}

swappedName = swappedName.join("");
console.log(swappedName);


console.log("========================");

/* Assign_7 */
start = 0;
let mix = [1, 2, 3, "a", "B", "C", 4,"A"];

for(let i = start;i<mix.length;i++){
  if(typeof mix[i] == "number" && mix[i] != true)
    console.log(mix[i]);
}


/* ================================= */
/* ************ 54 => 56 *********** */
console.group("Lessons 54 => 56");

friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
index = 0;
let counter = 0;


while (index < friends.length) {
  if((typeof friends[index] != "number") && !(friends[index].startsWith('A'))){
    console.log(`${++counter} => ${friends[index]}`);
  }
  index++;
}

console.groupEnd();

// Output
// "1 => Sayed"
// "2 => Mahmoud"