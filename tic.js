let boxes=document.getElementsByClassName("box");
let boxcont=document.getElementsByClassName("text");
console.log(boxes);
let empty="";
let ele;
let turn="X";
let winarr=["","","","","","","","",""];


const newaud=new Audio('mechanical.wav');
const victorysound=new Audio('victory.wav');
function cturn(){
    return turn==="X"?"O":"X";
}

function playerchange(){
    if(document.getElementById("textstat").textContent==="PLAYER X CHANCE"){
        document.getElementById("textstat").textContent="PLAYER O CHANCE";
    }
    else if(document.getElementById("textstat").textContent==="PLAYER O CHANCE"){
        document.getElementById("textstat").textContent="PLAYER X CHANCE";
    }
}





function win(obj){
    for(let i=0;i<9;i++){
        if(obj[i].textContent==="X"){
            winarr[i]=obj[i].textContent;
        }
        else if(obj[i].textContent==="O"){
            winarr[i]=obj[i].textContent;
        }
    }
    if((winarr[0]==="X" && winarr[1]==="X" && winarr[2]==="X")||
    (winarr[3]==="X" && winarr[4]==="X" && winarr[5]==="X")||(winarr[6]==="X" && winarr[7]==="X" && winarr[8]==="X") || (winarr[0]==="X" && winarr[3]==="X" && winarr[6]==="X")|| (winarr[1]==="X" && winarr[4]==="X" && winarr[7]==="X")||(winarr[2]==="X" && winarr[5]==="X" && winarr[8]==="X")|| (winarr[0]==="X" && winarr[4]==="X" && winarr[8]==="X")|| (winarr[2]==="X" && winarr[4]==="X" && winarr[6]==="X") ){
        
        document.getElementById("image").setAttribute("src","https://media.giphy.com/media/IRFQYGCokErS0/giphy.gif");
        victorysound.play();
        
          document.getElementById("textstat").textContent="PLAYER X WON!!! PRESS RESET BUTTON TO START PLAYING AGAIN";
         
         
    }
     if((winarr[0]==="O" && winarr[1]==="O" && winarr[2]==="O")||
    (winarr[3]==="O" && winarr[4]==="O" && winarr[5]==="O")||(winarr[6]==="O" && winarr[7]==="O" && winarr[8]==="O") || (winarr[0]==="O" && winarr[3]==="O" && winarr[6]==="O")|| (winarr[1]==="O" && winarr[4]==="O" && winarr[7]==="O")||(winarr[2]==="O" && winarr[5]==="O" && winarr[8]==="O")|| (winarr[0]==="O" && winarr[4]==="O" && winarr[8]==="O")|| (winarr[2]==="O" && winarr[4]==="O" && winarr[6]==="O") ){
       
        document.querySelector("img").setAttribute("src","https://media.giphy.com/media/IRFQYGCokErS0/giphy.gif");
        victorysound.play();

       
       document.getElementById("textstat").textContent="PLAYER O WON!!! PRESS RESET BUTTON TO START PLAYING AGAIN";
        
    }
    }


    function checkdraw(){
        let checkarr=Array.from(document.getElementsByClassName("text"))
        for(let i=0;i<9;i++){
            checkarr[i]=checkarr[i].textContent;
        }
        if(checkarr.includes("")){
    
        }
        else{
            alert("MATCH DRAWN");
            for(let i=0;i<9;i++){
                boxcont[i].textContent="";
                turn="X";
                document.getElementById("textstat").textContent="PLAYER X CHANCE";
            }
            winarr=["","","","","","","","",""];
        }
    }


function selectt(e){
    if(e.target.innerText===""){
           e.target.querySelector(".text").innerText=turn;
           newaud.play();
           newaud.playbackRate=5;
           playerchange();
           turn=cturn();
         
           win(document.getElementsByClassName("text"));
           checkdraw();
          
        
    }
    else{
        alert("box already filled");
    }

}

//actions
    boxes[0].addEventListener("click",selectt);
    boxes[1].addEventListener("click",selectt);
    boxes[2].addEventListener("click",selectt);
    boxes[3].addEventListener("click",selectt);
    boxes[4].addEventListener("click",selectt);
    boxes[5].addEventListener("click",selectt);
    boxes[6].addEventListener("click",selectt);
    boxes[7].addEventListener("click",selectt);
    boxes[8].addEventListener("click",selectt);
    document.getElementById("reset").addEventListener("click",()=>{
        document.querySelector("img").setAttribute("src","https://media.giphy.com/media/11JTxkrmq4bGE0/giphy.gif");
        for(let i=0;i<9;i++){
            boxcont[i].textContent="";
            turn="X";
            document.getElementById("textstat").textContent="PLAYER X CHANCE";
        }
        winarr=["","","","","","","","",""];
    })
   




