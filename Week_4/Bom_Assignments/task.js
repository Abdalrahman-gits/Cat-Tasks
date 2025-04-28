/* Assignment 1 */
let range = prompt("Print From-To","5-20");

range = range.split("-"); // Seperate the start and the end
range.sort((a,b) => (+a - +b));

for (let i = +range[0]; i <= +range[1]; i++) {
  console.log(i);
}

/* =============================== */
/* Assignment 2 */
let popup = document.querySelector(".popup");
let popupbtn = document.querySelector(".popup > span");

setTimeout(() => {
  popup.style.display = "block";
}, 5000);

popupbtn.onclick = () => {popup.style.display = "none";}

/* =============================== */
/* Assignment 3 */

// let downCount = document.querySelector(".down-counter");

// let downId = setInterval(() => {
//   if(+downCount.textContent){
//     downCount.textContent--;
//   }
//   else
//     clearInterval(downId);
// }, 1000);

/* =============================== */
/* Assignment 4 */

// let downCount = document.querySelector(".down-counter");

// let downId = setInterval(() => {
//   if(+downCount.textContent){
//     downCount.textContent--;
//   }
//   else{
//     location.replace("https://elzero.org/category/assignments/");
//     clearInterval(downId);
//   }
// }, 1000);

/* =============================== */
/* Assignment 5 */
let downCount = document.querySelector(".down-counter");

let downId = setInterval(() => {
  if(+downCount.textContent){
    downCount.textContent--;
  }
  else{
    window.open("https://elzero.org/category/assignments/","","width=400,height=400,top=100")
    clearInterval(downId);
  }
}, 1000);







