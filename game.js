function getCommputerChoice(){
    let choice;
    let porcentaje = Math.random()*101;
    if(porcentaje<33){
        choice = "Scissors";
    }else if(porcentaje>33 && porcentaje<66){
        choice = "Rock";
    }else{
        choice = "Paper";
    }
    return choice.toUpperCase();
}
function getHumanChoice(){
    let hChoice = prompt("What is your choice");
    return hChoice.toUpperCase();
}
function playRound(human,compu){
    let result;
    if(human == compu){
        result = 0;
    }else if((human == "ROCK" && compu == "PAPER")||(human == "PAPER" && compu == "SCISSORS")||(human == "SCISSORS" && compu == "ROCK")){
        result = 1;
    }else if((human == "PAPER" && compu == "ROCK")||(human == "ROCK" && compu == "SCISSORS")||(human == "SCISSORS" && compu == "PAPER")){
        result = 2;
    }
    return result;
}
function winner(result){
    if(result == 0){
        result = "Draw";
    }else if(result == 1){
        result = "Computer wins";
    }else{
        result = "Human wins";
    }
    return result;
}
let playButton = document.getElementById('play');
let scoreP = document.getElementById('score');
let hScore = 0;
let cScore = 0;
let result;

playButton.addEventListener("click",function(){
    let choice1=getHumanChoice(),choice2=getCommputerChoice();
    result = playRound(choice1,choice2);
    winner(result);
    if(result == 1){
        cScore++;
    }else if(result == 2){
        hScore++;
    }
    scoreP.innerHTML = (hScore+ " - "+cScore);
    console.log(winner(result));
});

