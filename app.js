function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    
}


console.log(getComputerChoice());