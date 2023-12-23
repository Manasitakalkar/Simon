let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["yellow", "red", "blue", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random() *3);
    let randomCLR = btns[randomIdx];
    let randBtn  = document.querySelector(`.${randomCLR}`);
    // console.log(randBtn);
    // console.log(randomIdx);
    // console.log(randomCLR);
    gameSeq.push(randomCLR);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
   // console.log("current level", level);
   
   if(userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
    }
   } else{
    h2.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor= "white";
    }, 200)
    reset();
   }
}


function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started =false ;
    gameSeq=[];
    userSeq=[];
    level=0;

}