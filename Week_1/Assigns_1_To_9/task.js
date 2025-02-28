/* Assigment_2 */
let assign_2 = document.querySelector(".assign_2");
let h1 = document.createElement("h1");

h1.innerHTML = "Elzero";
h1.style.color = "blue";
h1.style.fontSize = "40px";
h1.style.fontWeight = "bold";
h1.style.textAlign = "center";
h1.style.fontFamily = "Arial";

assign_2.appendChild(h1);

/* Assignment_3 */

console.log(`%cElzero %cweb %cSchool`,`color:red; font-size:40px; font-weight:bold;`
                                    ,`color:green; font-size:40px; font-weight:bold;`
                                    ,`color:blue; font-size:40px; font-weight:bold;`);

/* Assignment_4 */
console.group("Group 1")
console.log("Message one");
console.log("Message two");
console.group("child group");
console.log("message one");
console.log("message two");
console.group("Grand child group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd();

/* Assignment_5 */

let assign_5 = ["Elzero","Ahmed","Sameh","Gamal","Ghozal"];
console.table(assign_5);

/* Assignment_6 */

//console.log("Iam In Console");
//document.write("Iam In Page");

function excute() {
  console.log("Iam In Console");
  document.write("Iam In Page");
} // until Calling Function



