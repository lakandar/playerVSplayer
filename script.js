//initialization variable
let player1Score=0;
let player2Score=0;
let winningScore=5;

//selector
let p1sEle = document.querySelector("#p1Score");
let p2sEle = document.querySelector("#p2Score");
let playingToEle = document.querySelector("#playingTo");
let inputEle = document.querySelector("#inputScore");
let p1btnEle = document.querySelector("#p1btn");
let p2btnEle = document.querySelector("#p2btn");
let resetbtnEle = document.querySelector("#resetbtn");

playingToEle.textContent=winningScore;

//User input and update playing score
inputEle.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        //e.preventDefault();
        //console.log(inputEle.value);
        if(inputEle.value < 1){
            alert("Please enter more than 0");
        }
        winningScore=inputEle.value;
        playingToEle.textContent=inputEle.value;
        //playingScore=playingToEle.textContent;
        inputEle.value="";
    }    
});

p1btnEle.addEventListener("click", (e)=>{
    if(player1Score<winningScore){
        player1Score++
    }
    p1sEle.textContent=player1Score    
});

p2btnEle.addEventListener("click", (e)=>{
    if(player2Score<winningScore){
        player2Score++
    }
    p2sEle.textContent=player2Score    
});

