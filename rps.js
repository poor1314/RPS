// there is a bug where if your input
// a invalid value
// the console output that value even if you fixed it on the 2nd prompt.

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

    console.log("Computer've chosen: ", rps);
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

    // let resultWin = `You win! ${humanSelection} beats ${computerSelection}`;
    // let resultLose = `You lose! ${computerSelection} beats ${humanSelection}`;
    // let resultTie = `Tied! both select ${humanSelection}!`;

    // human lose condition
    if ((humanSelection === "rock" && computerSelection === "paper")
        ||(humanSelection === "paper" && computerSelection === "scissors") 
        ||(humanSelection === "scissors" && computerSelection == "rock")) {
            
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
            return "humanLose";
            

    // human win condition
    } else if ((humanSelection === "paper" && computerSelection === "rock")
        || (humanSelection === "scissors" && computerSelection === "paper") 
        ||(humanSelection === "rock" && computerSelection == "scissors")){
            
            // humanScore += 1;
            // return [resultWin,computerScore,humanscore];
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
            return "humanWin";

    } else{
        // return [resultTie,computerScore,humanscore];
        console.log(`Tied! both select ${humanSelection}!`);
        return "tie";
    }                       
}
// console.log(playRound(gethumanSelection(), getComputerChoice()));

// play the game 5 times
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(gethumanSelection(), getComputerChoice());
        // console.log("this is result!", result);
        if (result === "humanWin"){
            humanScore += 1;
        }else if (result === "humanLose"){
            computerScore += 1;
        }
        console.log(`Current Score: Human Score: ${humanScore} and computer score: ${computerScore}`);
    }
    if (humanScore > computerScore){
        console.log("The winner is human")
    } else if (computerScore > humanScore){
        console.log("The winner is computer")
    } else {
        console.log("It's a tie!")
    }
}

playGame();