let gamesq=[];
let usersq=[];
let color=["red","yellow","green","blue"];
// let userscore=[];
let stbtn=document.getElementById("startbtn");
let start=false;
let level=0;
let h2=document.querySelector("h2");

stbtn.addEventListener("touchstart",function (){
    if(start==false){
      console.log("Game started");
      start=true;
    }
    levelup();

});

function btnup(bt){
bt.classList.add("flash")
  setTimeout(function(){
    bt.classList.remove("flash");
  },250);
}


function levelup(){
  usersq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let randidx=Math.floor(Math.random()*3);
  let randcolor=color[randidx];
  let randbtn=document.querySelector(`.btn.${randcolor}`);
gamesq.push(randcolor);
  btnup(randbtn);



}

function btnpress(){
   let btn=this;
   btnup(btn);

 usercolor=btn.getAttribute("id");
  usersq.push(usercolor);
  checkans(usersq.length-1);
}


let btns=document.querySelectorAll(".btn");
for(btn of btns){
  btn.addEventListener("touchstart",btnpress);
}

function checkans(idx){
  if(usersq[idx]==gamesq[idx]){
      if(usersq.length==gamesq.length){
        setTimeout(levelup,1000);
      }
  }else{
  //   userscore.push(level);
  //  let max= displayscore();
    h2.innerHTML=`Games over. Your score:<b>${level}<b><br> Press Start again:`;
    start=false;
    gamesq=[];
    level=0;
   changebg();
  }
}


function changebg(){
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
  document.querySelector("body").style.backgroundColor="white";
},1000);

}
function displayscore(){
  let max=0;
  for(let i=0;i<userscore.length;i++){
    if(userscore[i]>max){
      max=userscore[i];
    }
  }
  return max;
}