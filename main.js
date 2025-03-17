function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === 0) {
                    console.log("It's a tie!");
                } else if (computerChoice === 1) {
                    console.log("Computer wins!");
                    computerScore++;
                } else {
                    console.log("Human wins!");
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === 0) {
                    console.log("Human wins!");
                    humanScore++;
                } else if (computerChoice === 1) {
                    console.log("It's a tie!");
                } else {
                    console.log("Computer wins!");
                    computerScore++;
                }
                break;
            case "scissors":
                if (computerChoice === 0) {
                    console.log("Computer wins!");
                    computerScore++;
                } else if (computerChoice === 1) {
                    console.log("Human wins!");
                    humanScore++;
                } else {
                    console.log("It's a tie!");
                }
                break;
            default:
                console.log("Invalid input!");
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber;
}

function getHumanChoice() {
    var humanChoice = prompt(
        "Please, choose one:\n" +
        "\n" +
        "- Rock\n" +
        "- Paper\n" +
        "- Scissors\n"
    ).toLowerCase();
    console.log(humanChoice);  
    return humanChoice;
}

playGame();

if (humanScore == computerScore) {
    console.log("Draw!");
} else if (humanScore > computerScore) {
    console.log("Human wins the game!");
} else {
    console.log("Computer wins the game!");
}