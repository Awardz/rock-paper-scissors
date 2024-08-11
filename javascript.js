
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

console.log(getComputerChoice());
//alert(getComputerChoice());

