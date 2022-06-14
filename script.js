//initialization variable
let player1Score=0;
let player2Score=0;
let winningScore=5;
let gameOver=false;
let turnPlayer="p1";

//selector
let p1sEle = document.querySelector("#p1Score");
let p2sEle = document.querySelector("#p2Score");
let playingToEle = document.querySelector("#playingTo");
let inputEle = document.querySelector("#inputScore");
let p1btnEle = document.querySelector("#p1btn");
let p2btnEle = document.querySelector("#p2btn");
let resetbtnEle = document.querySelector("#resetbtn");

playingToEle.textContent=winningScore;

turnPlayer==="p2"
? p1btnEle.setAttribute('disabled', 'disabled')
: p2btnEle.setAttribute('disabled', 'disabled')

//User input and update playing score
inputEle.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        //e.preventDefault();
        //console.log(inputEle.value);
        let inputScore = inputEle.value;
        if(inputScore < 1){
            alert("Please enter more than 0");
        }
        winningScore=+inputScore;
        playingToEle.textContent=inputScore;
        //playingScore=playingToEle.textContent;
        inputEle.value="";
    }    
});

p1btnEle.addEventListener("click", (e)=>{
    if(turnPlayer==="p1"  && !gameOver && player1Score<winningScore){
        player1Score++;
        p1sEle.textContent=player1Score;
        turnPlayer="p2";   
        p1btnEle.setAttribute('disabled', 'disabled');
        p2btnEle.removeAttribute('disabled');
    }
    if(player1Score===winningScore){
        gameOver=true;
        p1btnEle.setAttribute('disabled', 'disabled');
        p2btnEle.setAttribute('disabled', 'disabled');
        alert("Player-1 is Winner!!!");
    }
});

p2btnEle.addEventListener("click", (e)=>{
    if(turnPlayer==="p2" && !gameOver && player2Score<winningScore){
        player2Score++;
        p2sEle.textContent=player2Score; 
        turnPlayer="p1";  
        p2btnEle.setAttribute('disabled', 'disabled');
        p1btnEle.removeAttribute('disabled');
    }
    if(player2Score===winningScore){
        gameOver=true;
        p1btnEle.setAttribute('disabled', 'disabled');
        p2btnEle.setAttribute('disabled', 'disabled');
        alert("Player-2 is Winner!!!");
    }
});

resetbtnEle.addEventListener("click", (e)=>{
    player1Score=0;
    player2Score=0;
    winningScore=5;
    gameOver=false;
    turnPlayer="p1";
    playingToEle.textContent=winningScore;
    p1sEle.textContent=player1Score;
    p2sEle.textContent=player2Score;
    p1btnEle.removeAttribute('disabled');
    p2btnEle.removeAttribute('disabled');
})
