////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
///////////////////////////////////////////
function getInput() {
    console.log('Please choose either "rock", "paper", or "scissors"');
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*      Global variables    */
////////////////////////////////////////////////

////////////////////////////////////////////////
/*      input from player and computer    */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}
////////////////////////////////////////////////
/*           the winner is determined         */
////////////////////////////////////////////////
function getWinner(playerMove,computerMove) {
var winner;
var playerMove = getPlayerMove();
var computerMove = getComputerMove();

if          (playerMove ==='rock' && computerMove === 'scissors') {
        winner = 'player';
}   else if (computerMove === 'rock' && playerMove === 'scissors') {
        winner = 'computer';
}   else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
}   else if (computerMove === 'scissors' && playerMove === 'paper') {
        winner = 'computer';
}   else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
}   else if (computerMove === 'paper' && playerMove === 'rock') {
        winner  = 'computer';
}   else {
        winner = 'tie';
}
return winner;
}
////////////////////////////////////////////////
/*           winner after 5 games             */
////////////////////////////////////////////////
  
function playToFive() {
console.log("Let's play Rock, Paper, Scissors");
        
        var playerWins = 0;
        var computerWins = 0;
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
while   (playerWins < 5 && computerWins < 5){
        
        gameWinner = getWinner();
        console.log('Player chose '+ playerMove + ' while Computer chose '+ computerMove);
    if (gameWinner === 'player') {
        playerWins +=1;
        console.log('\n' +'player wins this game');
}
else if (gameWinner ==='computer') {
        computerWins +=1;
        console.log('\n' +'computer wins this game');
}
else    {
        console.log('\n' +'That was a tie');
}

console.log("Player score  = " + " " + playerWins + " " + "Computer score =" + " " + computerWins);
}
console.log(gameWinner + " " + "is the overall champion");
return [playerWins + " " + "compared to" + " " +computerWins];

}
    
playToFive();














