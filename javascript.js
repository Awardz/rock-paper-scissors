
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


function playRound(humanChoice, computerChoice)
{
    if(humanChoice === "rock")
    {
        if(computerChoice === "Paper")
        {            
            computerScore++;
            return "You Lose!";
        }  
        else if(computerChoice === "Scissors")
        {
            humanScore++;
            return "You Win!";
        }
        else
            return "Draw!";
    }
    
    if(humanChoice === "paper")
    {
        if(computerChoice === "Scissors")
        {
            computerScore++;
            return "You Lose!"
        } 
        else if(computerChoice === "Rock")
        {
            humanScore++;
            return "You Win!"
        }
        else
            return "Draw!";            
    }

    if(humanChoice === "scissors")
    {
        if(computerChoice === "Rock")
        { 
            computerScore++;
            return "You Lose!";
        }          
        else if(computerChoice === "Paper")
        {
            humanScore++;
            return "You Win!";
        } 
        else
            return "Draw!";
    }
}


/*
    Function of the course asking is to put playRound inside PlayGame in the original 
rock-paper-scissors project.  Not used for the UI portion of the project.
*/
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
const computerSelection = getComputerChoice();


//console.log(getComputerChoice());
//playGame();

let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.getElementById("container");

rock.addEventListener("click", () => 
{
    const div = document.createElement("div");
    let h3 = document.createElement("h3");
    let player = document.createElement("h4");
    let computer = document.createElement("h4");
    const computerSelection = getComputerChoice();
    const result = document.createElement("h2");
        
    div.textContent = "Computer Choice: " + computerSelection;
    h3.textContent = playRound("rock", computerSelection);
    player.textContent = "Player: " + humanScore;
    computer.textContent = "Computer: " + computerScore;
    
    div.style.border = "6px solid black";
    player.style.color = "green"; 
    computer.style.color = "red";
    
    container.appendChild(div);
    div.appendChild(h3);
    div.appendChild(player);
    div.appendChild(computer);

    
    if(humanScore == 5)
        result.textContent = "You Win The FT5!";
    else if(computerScore == 5)
        result.textContent = "You Lose The FT5!";

    div.appendChild(result);
});

paper.addEventListener("click", () => 
{
    const div = document.createElement("div");
    let h3 = document.createElement("h3");
    let player = document.createElement("h4");
    let computer = document.createElement("h4");
    const computerSelection = getComputerChoice();
    const result = document.createElement("h2");
        
    div.textContent = "Computer Choice: " + computerSelection;
    h3.textContent = playRound("paper", computerSelection);
    player.textContent = "Player: " + humanScore;
    computer.textContent = "Computer: " + computerScore;
    
    div.style.border = "6px solid black";
    player.style.color = "green"; 
    computer.style.color = "red";
    
    container.appendChild(div);
    div.appendChild(h3);
    div.appendChild(player);
    div.appendChild(computer);

    
    if(humanScore == 5)
        result.textContent = "You Win The FT5!";
    else if(computerScore == 5)
        result.textContent = "You Lose The FT5!";

    div.appendChild(result);
});

scissors.addEventListener("click", () => 
{
    const div = document.createElement("div");
    let h3 = document.createElement("h3");
    let player = document.createElement("h4");
    let computer = document.createElement("h4");
    const computerSelection = getComputerChoice();
    const result = document.createElement("h2");
        
    div.textContent = "Computer Choice: " + computerSelection;
    h3.textContent = playRound("scissors", computerSelection);
    player.textContent = "Player: " + humanScore;
    computer.textContent = "Computer: " + computerScore;
    
    div.style.border = "6px solid black";
    player.style.color = "green"; 
    computer.style.color = "red";
    
    container.appendChild(div);
    div.appendChild(h3);
    div.appendChild(player);
    div.appendChild(computer);

    
    if(humanScore == 5)
        result.textContent = "You Win The FT5!";
    else if(computerScore == 5)
        result.textContent = "You Lose The FT5!";

    div.appendChild(result);
});


    
    
