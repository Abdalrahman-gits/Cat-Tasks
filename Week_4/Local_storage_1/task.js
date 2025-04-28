/* Assignment_1 of Local Storage */

// Creating fontSize Select
let fontSize = document.createElement("select");
let fontSizeLabel = document.createElement("label");
let hr = document.createElement("hr");

fontSize.name = "font-size";
fontSize.className = "font-size";
fontSize.id = "font-size";

fontSizeLabel.setAttribute("for","font-size");
fontSizeLabel.innerHTML = "Choose Your Font size : "

for(let fSize = 16;fSize <= 30;fSize++){
  let option = document.createElement("option");
  option.value = fSize;
  option.innerHTML = fSize;
  fontSize.appendChild(option);
}
document.forms[0].append(fontSizeLabel,fontSize,hr);


/********** Start Local Storge Coding **********/
let fontFamily = document.querySelector(".font-family");
let pageColor = document.querySelector(".page-color");
let container = document.querySelector(".container");

/* For Family font */

// Check if Local Storage has font family value
if(window.localStorage.getItem("fontFamily")){
  // apply the font family value
  container.style.fontFamily = window.localStorage.getItem("fontFamily");
  // update the font family value
  fontFamily.value = window.localStorage.getItem("fontFamily");
}
fontFamily.addEventListener("change",(opt) => {
  // set the font family value in LocalStorage
  window.localStorage.setItem("fontFamily",opt.currentTarget.value);
  // apply the font family value
  container.style.fontFamily = window.localStorage.getItem("fontFamily");
});

/* For color */

// Check if Local Storage has color value
if(window.localStorage.getItem("pageColor")){
  // apply the color value
  container.style.color = window.localStorage.getItem("pageColor");
  // update the color value
  pageColor.value = window.localStorage.getItem("pageColor");
}
pageColor.addEventListener("change",(opt) => {
  // set the color value in LocalStorage
  window.localStorage.setItem("pageColor",opt.currentTarget.value);
  // apply the color value
  container.style.color = window.localStorage.getItem("pageColor");
});

/* For Family size */

// Check if Local Storage has font weight value
if(window.localStorage.getItem("fontSize")){
  // apply the font weight value
  container.style.fontSize = `${window.localStorage.getItem("fontSize")}px`;
  // update the font weight value
  fontSize.value = window.localStorage.getItem("fontSize");
}
fontSize.addEventListener("change",(opt) => {
  // set the font weight value in LocalStorage
  window.localStorage.setItem("fontSize",opt.currentTarget.value);
  // apply the font weight value
  container.style.fontSize = `${window.localStorage.getItem("fontSize")}px`;
});

