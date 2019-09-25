//Game values
let min=1,
    max=10,
    winningNum,
    tries=3;

 //UI Elements   
const min_num=document.querySelector(".min-num"),
      max_num=document.querySelector(".max-num"),
      game=document.querySelector("#game"),
      messg=document.querySelector(".message"),
      subBtn=document.querySelector("#guess-value"),
      guessInp=document.querySelector("#guess-input");

min_num.textContent = min;
max_num.textContent = max;

winningNum=Math.floor(Math.random()*(max-min+1)+1);
subBtn.addEventListener("click",onClick)
game.addEventListener("mousedown", clickPlay);

function clickPlay(e){
    if(subBtn.classList.contains('play-again')){
        window.location.reload();
    }
}

function onClick(e){    

let guess=parseInt(guessInp.value);

if(isNaN(guess)||guess>max||guess<min){
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
    
}

else if(guess===winningNum){
        gameOver(true,"Correct ! You won the game");
    }   
else{
    tries-=1;
    if(tries===0){
        gameOver(false,`Game Over! ${winningNum} is the correct answer`);  
    }
    else{
        setMessage(`${guess} is incorrect`,'red');
    }
}

}

function gameOver(won,msg){
    won===true?color='green':color='red';
    setMessage(msg,color);
    subBtn.value="Play Again";
    subBtn.classList.add("play-again");
    
    
}
function setMessage(msg,color){
     messg.textContent=msg;
     messg.style.color=color;
     guessInp.value=" ";
     
}