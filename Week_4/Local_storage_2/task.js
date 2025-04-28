/* Assignment_2 LocalStorage */
let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");

// Check if there is value in session storage for select
if(window.sessionStorage.getItem(`${select.name}`)){
  select.value = window.sessionStorage.getItem(`${select.name}`);
}
select.addEventListener("change",(id) => {
  // set the value in the sessionStorage for select 
  window.sessionStorage.setItem(id.currentTarget.name,id.currentTarget.value);
})

/*****************************/

inputs.forEach((input) => {
  // Check if there is value in session storage for inputs
  if(window.sessionStorage.getItem(`${input.name}`)){
    input.value = window.sessionStorage.getItem(`${input.name}`);
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", (i) => {
    // set the value in the sessionStorage for inputs
    window.sessionStorage.setItem(i.currentTarget.name,i.currentTarget.value);
  })
});
