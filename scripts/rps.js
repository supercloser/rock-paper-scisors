let score = {
    wins: 0,
    loses: 0,
    ties: 0,
    updateScore: function updateCorrentScore(result){
        if (result === "Win"){
            score.wins +=1;
        }
        else if (result === "Lost"){
            score.loses +=1;
        }
        else if (result === "Tie"){
            score.ties +=1
        }
        scoreText.innerText = `Current score; Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties},`
        localStorage.setItem('score', JSON.stringify(score))
    },
    resetScore: function resetCurrentScore(){
        localStorage.removeItem('score');
        score.wins = 0;
        score.loses = 0;
        score.ties = 0;
        scoreText.innerText = `Current score; Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties},`
        gameWinner.innerHTML = "<h2>Score was reset!</h2>"
    }
}
let statusColor ="white"
storedScore = JSON.parse(localStorage.getItem('score'));
if (storedScore){
    score.wins = storedScore.wins;
    score.loses = storedScore.loses;
    score.ties = storedScore.ties;
}else{
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
}
scoreText.innerText = `Current score; Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties},`
function playGame(userChoice){
    let computerMove = pickComputerMove();
    let result = '';
    if (userChoice === "ROCK"){
        if (computerMove === "ROCK"){
            result = 'Tie'
        }else if(computerMove === "PAPER"){
            result = 'Lost'
        }else if (computerMove === 'SCISORS'){
            result = 'Win'
        }

    }else if (userChoice === "PAPER"){
        if (computerMove === "ROCK"){
            result = 'Win'
        }else if(computerMove === "PAPER"){
            result = 'Tie'
        }else if (computerMove === 'SCISORS'){
            result = 'Lost'
        }
        
    }else if (userChoice === "SCISORS"){
        if (computerMove === "ROCK"){
            result = 'Lost'
        }else if(computerMove === "PAPER"){
            result = 'Win'
        }else if (computerMove === 'SCISORS'){
            result = 'Tie'
        }
    }
    if (result === "Win"){
        score.updateScore("Win");
        statusColor = "green";
    }
    else if (result === "Lost"){
        score.updateScore("Lost");
        statusColor = "red";
    }
    else if (result === "Tie"){
        score.updateScore("Tie");
        statusColor = "orange";
    }
    gameWinner.innerHTML = `<h2>${result}!</h2><br><br>You <img class = "image-resize" src ="images/${userChoice}.png"></img> <img class = "image-resize" src ="images/${computerMove}.png"></img> computer`
}
function pickComputerMove (){
    let computerMove = '';
    const computerNumber = Math.random();
    if (computerNumber < 1/3 && computerNumber >=0) {
        computerMove = "ROCK";

    }
    else if (computerNumber >= 1/3 && computerNumber < 2/3){
        computerMove = "PAPER";
    }
    else if (computerNumber >= 2/3 && computerNumber < 1){
        computerMove = "SCISORS";
    }
    console.log(computerNumber, computerMove)
    return computerMove;
}