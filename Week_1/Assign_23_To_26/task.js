/* Assign_2 */
console.log(-Number.MIN_SAFE_INTEGER);

/* Assign_3 */
console.log(Number.MAX_SAFE_INTEGER.toString().length)

/* Assign_4 */

let myVar = "100.56789 Views";

console.log(Math.trunc(Number(myVar.split(" ")[0]))); // 100
console.log(Number(Number(myVar.split(" ")[0]).toFixed(2))); // 100.57

/* Assign_5 */
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

/* Assign_6 */
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Math.round(flt)); // 10
console.log(Number(flt.toString().split(".")[0])); // 10

/* Assign_7 */
console.log(Math.trunc(Math.random() * 5));
