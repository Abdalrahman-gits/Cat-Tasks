// Assignment 1

function car(name, model, price) {
  this.n = name;
  this.model = model;
  this.price = price;

  this.carRun = () => {
    return `Car is Running`;
  }
  

  this.carStop = function() {
    return `Car is Stopping`;
  }
}

let car1 = new car("Benz", 2003, 1200);
let car2 = new car("BMW", 2020, 2008);
let car3 = new car("Suzoki", 1991, 5000);

console.log(`Car one Name is ${car1.n} And Model is ${car1.model} And Price is ${car1.price}`);
console.log(`Car two Name is ${car2.n} And Model is ${car2.model} And Price is ${car2.price}`);
console.log(`Car three Name is ${car3.n} And Model is ${car3.model} And Price is ${car3.price}`);

console.log(car1.carRun())
console.log(car2.carStop())

console.log("=".repeat(30));

// Assignment 2

class phone {
  constructor(name, serial, price){
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends phone {
  constructor(name, serial, price, size="Unknown"){
    super(name, serial, price);
    this.size = size;
  }

  fullDetails(){
    return `${this.name} Serial is ${this.serial} And Size is ${this.size}`;
  }
}

Tablet.prototype.hellofun = function() {
  return `hello ${this.price}`;
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

console.log(`${TabletThree.hellofun()}`);
// hello 650

console.log("=".repeat(30));

// Assignment 3

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card.toString().match(/\d{1,4}/g).join("-");
  }

  get showData(){
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

console.log("=".repeat(30));

// Assignment 4

let myStr = "Elzero";

String.prototype.addLove = function() {
  return `I Love ${this} Web School`;
}

console.log(myStr.addLove()); // I Love Elzero Web School

console.log("=".repeat(30));

// Assignment 5

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj,{id:{enumerable:false},score:{writable:false}});
delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}

console.log("=".repeat(30));

