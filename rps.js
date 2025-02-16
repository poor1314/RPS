
let humanScore = 0;
let computerScore = 0;
// The bot randomly return one of the following string values: “rock”, “paper” or “scissors”
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); // random generate # from 0 - 2
    // rps stands for rock, paper, scissors
    let rps = null;
    if (randomNumber === 0){
        rps = "rock";
    } else if (randomNumber === 1){
        rps = "paper";
    }else{
        rps = "scissors";
    } 
    // console.log(randomNumber);
    // console.log(randomNumber == 0);
    // console.log(rps);

    console.log("The computer have chosen: ", rps);
    return rps;
}

// console.log(getComputerChoice());

// now we need 3 choices from the human and compare with the bot's choice
// to determine the winner
function gethumanSelection(){
    let choice = prompt("🎮 Choose your move: 🪨 Rock, 📄 Paper, or ✂️ Scissors?");
    // lower case the choice
    let lowerCaseChoice = choice.toLocaleLowerCase();

    if (lowerCaseChoice  === "rock" 
    || lowerCaseChoice  === "paper" 
    || lowerCaseChoice  === "scissors" ) {
        console.log("you've chosen: ", lowerCaseChoice);
    } else{
        window.alert("invalid input, please try again!");
        gethumanSelection();
    }

    return lowerCaseChoice;
}

// round
// try to build this with switch statement
function playRound(humanSelection, computerSelection){

    let resultWin = `You win! ${humanSelection} beats ${computerSelection}`;
    let resultLose = `You lose! ${computerSelection} beats ${humanSelection}`;
    let resultTie = `Tied! both select ${humanSelection}!`;

    // human lose condition
    if ((humanSelection === "rock" && computerSelection === "paper")
        ||(humanSelection === "paper" && computerSelection === "scissors") 
        ||(humanSelection === "scissors" && computerSelection == "rock")) {
            
            computerScore += 1;
            return resultLose;
            

    // human win condition
    } else if ((humanSelection === "paper" && computerSelection === "rock")
        || (humanSelection === "scissors" && computerSelection === "paper") 
        ||(humanSelection === "rock" && computerSelection == "scissors")){
            
            humanScore += 1;
            return resultWin;

    } else{
        return resultTie;
    }                       
}
console.log(playRound(gethumanSelection(), getComputerChoice()));



// function playGame(){
    
//     for (let i = 0; i < 2; i++) {
//         playRound(gethumanSelection(), getComputerChoice());
//     }
// }

// playGame();