/******** 86 => 93 **********/
// 1
console.group("86 => 93");

let assi_1 = document.getElementById("elzero");
console.log(assi_1);

assi_1 = document.getElementsByClassName("element")[0];
console.log(assi_1);

assi_1 = document.getElementsByName("js")[0];
console.log(assi_1);

assi_1 = document.getElementsByTagName("div")[0];
console.log(assi_1);

assi_1 = document.getElementsByTagNameNS("*","div")[0];
console.log(assi_1);

assi_1 = document.querySelector("div");
console.log(assi_1);

assi_1 = document.querySelector("div.element");
console.log(assi_1);

assi_1 = document.querySelector("div#elzero");
console.log(assi_1);

assi_1 = document.querySelector("div[name='js']");
console.log(assi_1);

assi_1 = document.querySelectorAll("div")[0];
console.log(assi_1);

assi_1 = document.querySelectorAll("div.element")[0];
console.log(assi_1);

assi_1 = document.querySelectorAll("div#elzero")[0];
console.log(assi_1);

assi_1 = document.querySelectorAll("div[name='js']")[0];
console.log(assi_1);

assi_1 = document.body.firstChild;
console.log(assi_1);

assi_1 = document.body.firstElementChild;
console.log(assi_1);

assi_1 = document.all[6];
console.log(assi_1);

console.log("===========================");
// 2
let imgs_2 = document.querySelectorAll(".assign-1-2 img");

Array.from(imgs_2).forEach((img) => {
  img.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  img.setAttribute("alt","Elzero Logo");
});

console.log("===========================");
// 3
let input_3 = document.querySelector(".assign-1-3 form > input");
let result = document.querySelector(".assign-1-3 form > .result");

input_3.addEventListener("input",(event) => {
  if(event.currentTarget.value === ""){ // event.currentTarget.value === input_3.value
    result.textContent = `{0} USD Dollar = {0.00} Egyptian Pound`;
  }
  else
    result.textContent = `{${input_3.value}} USD Dollar = {${(input_3.value * 15.6).toFixed(2)}} Egyptian Pound`;
});

console.log("===========================");

// 4
let assi_4 = document.querySelector(".assign-1-4");
// Destructuring
[assi_4.firstElementChild.textContent , assi_4.lastElementChild.textContent] = 
[assi_4.lastElementChild.textContent , assi_4.firstElementChild.textContent];

assi_4.firstElementChild.setAttribute("title" , assi_4.firstElementChild.textContent); 
assi_4.lastElementChild.setAttribute("title" , assi_4.lastElementChild.textContent); 

assi_4.lastElementChild.append(" ",assi_4.childElementCount);

console.log("==========================");

// 5
let assi_5_imgs = document.querySelectorAll(".assign-1-5 img");

assi_5_imgs.forEach((img) => {
  if(img.hasAttribute("alt")){
    img.setAttribute("alt","Old");
  }
  else {
    img.setAttribute("alt","Elzero New");
  }
})

//=======================================

// 6
let myInputs = document.getElementsByClassName("input");
let createBtn = document.getElementsByClassName("create")[0];
let results = document.getElementsByClassName("results")[0];

let inputStyle = "display:block;width:250px;padding:10px;background-color:#ddd;box-sizing:border-box;margin:10px auto"

myInputs[0].setAttribute("style",inputStyle);
myInputs[1].setAttribute("style",inputStyle);
myInputs[2].setAttribute("style",inputStyle);
createBtn.setAttribute("style","display:block;width:250px;padding:10px;background-color:green;color:white;margin:10px auto");
results.setAttribute("style","display:flex;flex-wrap:wrap;justify-content:space-between;align-content:space-between;margin-top:30px");


document.forms[1].onsubmit = function(e) {
  if(myInputs[0].value === "" || myInputs[1].value === ""){
    e.preventDefault();
    throw new Error("eroor!!!!");
  }
  else{
    let numElements = myInputs[0].value;
    let text = myInputs[1].value;
    let type = myInputs[2].value;
  
    let eleStyle = "width:calc(90% / 3); background-color:orangered;color:white;padding:10px;text-align:center;margin-bottom:15px";
  
    for(let i=0;i<numElements;i++){
      let myElement = document.createElement(type);
      myElement.className = "Element";
      myElement.setAttribute("id",`id-${i+1}`);
      myElement.textContent = text;
      myElement.setAttribute("style",eleStyle);
      results.appendChild(myElement);
    }
  }

  e.preventDefault()

}

console.groupEnd();

/********** 94 => 101 **********/
/***** Assignment_2 *****/
let myform = document.forms[2];
let myInputs_2 = document.querySelectorAll(".assign-2-2 input");
let myElement = document.querySelector(".assign-2-2 div");
let classes = document.querySelector(".assign-2-2 .show");
let container = document.querySelector(".assign-2-2 .container");

container.innerHTML = "No Classes To Show";

// Form Style
myform.style.display = "flex";
myform.style.flexWrap = "wrap";
myform.style.justifyContent = "space-between";
myform.style.width = "600px";
myform.style.margin = "100px auto";

// Inputs Style
for(let i=0;i<myInputs_2.length;i++){
  myInputs_2[i].onfocus = function (){
    myInputs_2[i].style.outline = "none";
  }

  myInputs_2[i].style.display = "block";
  myInputs_2[i].style.width = "100%";
  myInputs_2[i].style.padding = "10px";
  myInputs_2[i].style.marginBottom = "10px";
}

// Element Style
myElement.style.width = "100%";
myElement.style.backgroundColor = "#ddd";
myElement.style.padding = "15px";
myElement.style.marginTop = "15px";
myElement.style.textAlign = "center";

// Class Element Style
classes.style.width = "100%";
classes.style.backgroundColor = "#ddd";
classes.style.padding = "15px";
classes.style.marginTop = "15px";
classes.style.fontWeight = 'bold';

// Container Style
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.width = "100%";
container.style.margin = "15px auto";

//Logic For Add Input
myInputs_2[0].addEventListener("blur",function(e) {
  if(myInputs_2[0].value === ""){
    console.log("Write A Class To Add !!");
  }
  else{
    let classNames = myInputs_2[0].value.split(" ");
    for(let i=0;i<classNames.length;i++){
      myElement.classList.add(classNames[i].toLowerCase());
    }

    toshow(myElement);
    myInputs_2[0].value = "";
  }
});

//Logic For remove Input
myInputs_2[1].addEventListener("blur",function(e) {
  if(myInputs_2[1].value === ""){
    console.log("Write A Class To Remove !!");
  }
  else{
    let classNames = myInputs_2[1].value.split(" ");
    for(let i=0;i<classNames.length;i++){
      myElement.classList.remove(classNames[i].toLowerCase());
    }
    
    toshow(myElement);
    myInputs_2[1].value = "";
  }
});

function toshow(myElement){
  let classNames = Array.from(myElement.classList).sort();
  container.innerHTML = ""; 
  
  if(classNames.length === 0)
    container.innerHTML = "No Classes To Show";

  for(let i=0;i<classNames.length;i++){
    let ele = document.createElement("p");

    ele.textContent = classNames[i];
    ele.style.padding = "10px";
    ele.style.marginRight = "10px";
    ele.style.color = "white"
    ele.style.backgroundColor = "orangered"
    ele.style.borderRadius = "6px";

    container.append(ele);
  }
}

/***** Assignment_3 *****/
document.querySelector(".assign-2-3 p").remove();

let ourEle = document.querySelector(".our-element");
let beforeEle = document.createElement("div");
let afterEle = document.createElement("div");

beforeEle.className = "start";
beforeEle.title = "Start Element";
beforeEle.setAttribute("data-value","Start");
beforeEle.textContent = "Start";

afterEle.className = "end";
afterEle.title = "End Element";
afterEle.setAttribute("data-value","End");
afterEle.textContent = "End";

ourEle.before(beforeEle);
ourEle.after(afterEle);

/***** Assignment_4 *****/
let assign4 = document.querySelector(".assign-2-4");
console.log(assign4.lastChild.textContent.trim());

/***** Assignment_5 *****/
document.onclick = function(e){
  console.log(`This is ${e.target.tagName}`)
}




