let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let btn = document.querySelector("button");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;


    let DelBtn = document.createElement("button");
    DelBtn.innerText = "Delete";
    DelBtn.classList.add("Delete");
    item.appendChild(DelBtn);
    ul.appendChild(item);
//   console.log(inp.value);
  inp.value = "";
})

ul.addEventListener("click", function(event){
   // console.log("button clicked!");
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("task deleted");
    };
})



// code below is for already listed items, that we are not using because we have to delete newly added items as well. 
// let delBtns = document.querySelectorAll(".Delete");
// for(dbtns of delBtns){
//     dbtns.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }