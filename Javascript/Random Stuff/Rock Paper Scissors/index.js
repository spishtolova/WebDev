const choices = ["rock", "paper", "scissors"];
const Player = document.getElementById("player");
const Computer = document.getElementById("computer");
const Result = document.getElementById("result");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""

    if(playerChoice == computerChoice){
        result = "IT'S A TIE!!!"
    }
    else{
        switch(playerChoice){
            case "rock":
                if(computerChoice == "scissors"){
                    result = "YOU WIN!";
                }
                else
                {
                    result = "YOU LOSE!";
                }
                break;
            case "paper":
            if(computerChoice == "rock"){
                result = "YOU WIN!";
            }
            else
            {
                result = "YOU LOSE!";
            }
            break;
            case "scissors":
            if(computerChoice == "paper"){
                result = "YOU WIN!";
            }
            else
            {
                result = "YOU LOSE!";
            }
            break;
        }
    }
    Player.textContent = `Player Chose ${playerChoice}`;
    Computer.textContent = `Computer Chose ${computerChoice}`;
    Result.textContent = result;

    Result.classList.remove("winText", "loseText");

    switch(result){
        case "YOU WIN!":
            Result.classList.add("winText");
            break;
        case "YOU LOSE!":
            Result.classList.add("loseText");
            break;
    }
}