
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === "rock")
    {
        if(computerChoice === "Paper")
            {
                console.log("You Lose!  Paper Wins")
                computerScore++;
            }  
        if(computerChoice === "Scissors")
            {
                console.log("You Win! Rock Beats Scissors");
                humanScore++;
            }
        else
            console.log("Draw!")
    }

    if(humanChoice === "paper")
        {
            if(computerChoice === "Scissors")
                {
                    console.log("You Lose! Scissors Wins!");
                    computerScore++;
                } 
            if(computerChoice === "Rock")
                {
                    console.log("You Win!  Paper Wins!");
                    humanScore++
                }
            else
                console.log("Draw!")
        }

        if(humanChoice === "scissors")
            {
                if(computerChoice === "Rock")
                    {
                        console.log("You Lose! Rock Wins!");
                        computerScore++;
                    }          
                if(computerChoice === "Paper")
                    {
                        console.log("You Win! Scissors Wins!")
                        humanScore++;
                    } 
                else
                    console.log("Draw!")
            }

    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(getComputerChoice());

console.log(playRound(humanSelection, computerSelection));
