/* Sidebar Open-Close */
let arrowbtn = document.querySelector(".menu-arrow");

if(arrowbtn){ // Validation
  arrowbtn.addEventListener("click" , (event) => {
    arrowbtn.parentElement.classList.toggle("menu-closed");
  })
}
/* =============================== */


/* Settings General Info */
let changeField = document.querySelector("#general-info .email input");
let changeBtn = document.querySelector("#general-info .email a");
let noChange = true;

if(changeBtn) { // Validation
  changeBtn.addEventListener("click" , (e) => {
    if(noChange){
      e.preventDefault();
      changeField.removeAttribute("disabled");
      changeBtn.innerHTML = "Save";
      noChange = false;
    }
  });
}
/* ================================== */


/* Plans */
let plans = document.querySelectorAll("#plans-page .plan");
let planbtns = document.querySelectorAll("#plans-page .plan button");

if(planbtns){ // Validation
  planbtns.forEach((planbnt) => {
    planbnt.addEventListener("click" , (e) => {
      removeJoinedClass();
      planbnt.parentElement.classList.add("joined"); // Make the plan Joined
    })
  });
}


function removeJoinedClass() {
  planbtns.forEach((planbnt) => {
    planbnt.parentElement.classList.remove("joined"); // Make all the Classes Unjoined
  })
}