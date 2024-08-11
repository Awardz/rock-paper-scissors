
function getComputerChoice()
{
    let num = Math.floor(Math.random() * 4);
    if(num === 0)
        return "Rock";
    else if(num === 1)
        return "Paper"
    else
        return "Scissors";    
}

function getHumanChoice()
{
    let player = prompt("Enter Rock, Paper, or Scissors");
    return player.toLowerCase();
}




function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice)
    {
        if(humanChoice === "rock")
        {
            if(computerChoice === "Paper")
                {
                    console.log("You Lose!")
                    computerScore++;
                }  
            else if(computerChoice === "Scissors")
                {
                    console.log("You Win!");
                    humanScore++;
                }
            else
                console.log("Draw!")
        }
    
        if(humanChoice === "paper")
            {
                if(computerChoice === "Scissors")
                    {
                        console.log("You Lose!");
                        computerScore++;
                    } 
                else if(computerChoice === "Rock")
                    {
                        console.log("You Win!");
                        humanScore++
                    }
                else
                    console.log("Draw!")
            }
            if(humanChoice === "scissors")
                {
                    if(computerChoice === "Rock")
                        {
                            console.log("You Lose!");
                            computerScore++;
                        }          
                    else if(computerChoice === "Paper")
                        {
                            console.log("You Win!")
                            humanScore++;
                        } 
                    else
                        console.log("Draw!")
                } 
                return console.log("On To The Next One!");
    }

    for(let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("You Chose: " + humanSelection);
        console.log("Computer Chose: " + computerSelection);
        playRound(humanSelection, computerSelection);
    }
    
    console.log("Player: " + humanScore);
    console.log("Computer: " + computerScore);

    if(humanScore > computerScore)
        return console.log("Player Wins");
    else if(humanScore < computerScore)
        return console.log("Computer Wins");
    else
        return console.log("Draw");

    
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();


//console.log(getComputerChoice());
playGame();
