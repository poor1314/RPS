function playRound(humanSelection, computerSelection){

    // let resultWin = `You win! ${humanSelection} beats ${computerSelection}`;
    // let resultLose = `You lose! ${computerSelection} beats ${humanSelection}`;
    let resultTie = `Tied! both select ${humanSelection}!`;
    console.log(typeof humanSelection);
    console.log(typeof computerSelection);

    // human lose condition
    if ((humanSelection === "rock" && computerSelection === "paper")
        ||(humanSelection === "paper" && computerSelection === "scissors") 
        ||(humanSelection === "scissors" && computerSelection == "rock")) {
            
           
            return `You lose! ${computerSelection} beats ${humanSelection}`;
            

    // human win condition
    } else if ((humanSelection === "paper" && computerSelection === "rock")
        || (humanSelection === "scissors" && computerSelection === "paper") 
        ||(humanSelection === "rock" && computerSelection == "scissors")){
            
           
            return `You win! ${humanSelection} beats ${computerSelection}`;

    } else{
        return resultTie;
    }                     
}

console.log(playRound("scissors", "scissors")); // hard core parameters

// "scissors"