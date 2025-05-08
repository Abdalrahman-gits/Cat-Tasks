// Assignment 1

let regex_1 = /^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

console.log(regex_1.test(ip)); // True

console.log("=========================");


// Assignment 2

let regex_2 = /\bOs\d*O\b/g;

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(regex_2));

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log("========================");


// Assignment 3

let regex_3 = /^\+\(\d{3}\)-\d{3} \(\d{4}\)$/;

let phone = "+(995)-123 (4567)";

console.log(phone.match(regex_3));

console.log("=======================")

// Assignment 4

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?   ====> it means that to be http or https
// :// 
// (?:....) it is Called Non Capturing Group which doesnot stores the between () but only checks the logic
// [-\w]+\.  means (- either word char) one or more time
// ? could be found or not 
// () Capturing group to be stored like "google"
// [-\w]+ like previous
// .* . -> for anything except newline ====  * -> zero or more

// Assignment 5

let regex_4 = /^(?:\d{1,2}(?:\/|(?: - )| )){2}(?:\d{2}|\d{4})$/;


let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
let date5 = "21 3 203";


console.log(regex_4.test(date1));
console.log(regex_4.test(date2));
console.log(date3.match(regex_4));
console.log(date4.match(regex_4));
console.log(date5.match(regex_4));

console.log("===========================")

// Assignment 6

let regex_5 = /(?:https?:\/\/(?:\w+\.)*)?([-\w]+\.\w+)(?::\d*.*)?/;

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url = 'https://my-site.org';

console.log(url1.match(regex_5));
console.log(url2.match(regex_5));
console.log(url3.match(regex_5));
console.log(url4.match(regex_5));
console.log(url5.match(regex_5));
console.log(url.match(regex_5));

console.log("=============================");