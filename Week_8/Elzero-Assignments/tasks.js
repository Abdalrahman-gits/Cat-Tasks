// Assignment 1,2,3,4

let req = new XMLHttpRequest();

req.open("get","./articles.json");
req.send();


req.onreadystatechange = function() {
  
  if(this.readyState == 4 && this.status == 200) {

    console.log(this.response);
    console.log("Data Loaded");

    let mainData = JSON.parse(this.response);

    setData(mainData);
    printConsole(mainData);

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    printinDoc(mainData);


  } 

}

function setData(data) {
  for(let article of data) {
    article.department = "All";
  }
}

function printConsole(data) {
  for(let article of data) {
    console.log(`The id is ${article.id}`);
    console.log(`The name is ${article.name}`);
    console.log(`The departemnt is ${article.department}`);
    console.log(`The title is ${article.title}`);
    console.log(`The content is ${article.content}`);
    console.log("=".repeat(30))
  }
}

function printinDoc(data) {
  let conatainer = document.createElement("div");
  conatainer.id = "data";

  for(let i=0;i<data.length;i++) {
    let ele = document.createElement("div");
    let art = `<h1>Title ${i+1} is ${data[i].title}</h1>
    <p>Content ${i+1} is ${data[i].content}</p>
    <p>Author id is ${data[i].id}</p>
    <p>Author name is ${data[i].name}</p>
    <p>Author departnment is ${data[i].department}</p>
    <hr>`;

    ele.innerHTML = art;
    conatainer.appendChild(ele);
  }

  document.body.appendChild(conatainer);
}
