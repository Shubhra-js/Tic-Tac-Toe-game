let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newbtn= document.querySelector("#new");
let msgc= document.querySelector("#msg-con");
let msg= document.querySelector("#msg");
let turn0= true;
const wp= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0= false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled= true;
        checkwinner();
    });
});
const disb=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enab=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner)=>{
    msg.innerText= `Congratulations! Winner is ${winner}`;
    msgc.classList.remove("hide");
    disb();
}
const checkwinner=()=>{
    for(p of wp){
        let v1= boxes[p[0]].innerText;
        let v2= boxes[p[1]].innerText;
        let v3= boxes[p[2]].innerText;
        if(v1!="" && v2!="" && v3!=""){
            if(v1===v2 && v2===v3 && v1===v3){
                showWinner(v1);
            }
        }
    }
}
const rstgm=()=>{
    turn0=true;
    enab();
    msgc.classList.add("hide");
}
newbtn.addEventListener("click",rstgm);
resetbtn.addEventListener("click",rstgm);
