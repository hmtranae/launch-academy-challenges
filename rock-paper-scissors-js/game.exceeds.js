// IMPORTANT!!!!
// PLEASE VISIT game.meets.js for meets expectation solution
// game.exceeds.js is for exceeds expectation
function changeWeaponFromSingleLetterToFullWord(letter) {
    return (letter === 'r') ? 'rock' : (letter === 'p') ? 'paper' : 'scissors';
}

function checkValidWeapon(letter) {
    if ((letter === 'r') || (letter === 'p') || (letter === 's')) {
        return true;
    }
    return false;
}

function randomWeaponForComputer(num) {
    if (num === 0) {
        num = 'r';
    } else if (num === 1) {
        num = 'p';
    } else if (num === 2) {
        num = 's';
    }
    return num;
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function outputWinner(playerWinCount, playerLoseCount, computerWinCount, computerLoseCount, tieCount) {
    let message = ''
    if (playerWinCount > computerWinCount) {
        message = `Player wins the game! \nPlayer ties ${tieCount} wins ${playerWinCount} loses ${playerLoseCount}! \nComputer ties ${tieCount} wins ${computerWinCount} loses ${computerLoseCount}`
    } else if (computerWinCount > playerWinCount) {
        message = `Computer wins the game! \nPlayer ties ${tieCount} wins ${playerWinCount} loses ${playerLoseCount}! \nComputer ties ${tieCount} wins ${computerWinCount} loses ${computerLoseCount}!`
    }
    return message;
}

console.log('Rock, Paper, Scissors!');

let playerWinCount = 0;
let playerLoseCount = 0;
let computerWinCount = 0;
let computerLoseCount = 0;
let tieCount = 0;

while ((playerWinCount + computerWinCount < 2) || (playerWinCount === 1 && computerWinCount === 1)) {
    let playerWeapon = prompt('Please select your weapon of choice. "r" for rock, "p" for paper, or "s" for scissors.');
    let computerWeapon = Math.floor(Math.random() * 3);

    computerWeapon = randomWeaponForComputer(computerWeapon);

    if (checkValidWeapon(playerWeapon)) {
        playerWeapon = changeWeaponFromSingleLetterToFullWord(playerWeapon);
        computerWeapon = changeWeaponFromSingleLetterToFullWord(computerWeapon);

        console.log(`Player chose ${playerWeapon} \nComputer chose ${computerWeapon}`);
        
        if (playerWeapon === computerWeapon) {
            console.log('This round was a tie!')
            tieCount++;
        } else if (
            (playerWeapon === 'scissors' && computerWeapon === 'paper') || (playerWeapon === 'paper' && computerWeapon === 'rock') || (playerWeapon === 'rock' && computerWeapon === 'scissors')) {
            console.log(`${capitalizeWord(playerWeapon)} beats ${computerWeapon}, Player wins! \nSorry computer, maybe randomize better next time.`)
            playerWinCount++;
            computerLoseCount++;
        } else {
            console.log(`${capitalizeWord(computerWeapon)} beats ${playerWeapon}, Computer wins! \nSorry Player, better luck next time.`)
            computerWinCount++;
            playerLoseCount++;
        }
    } else {
        console.log('Please enter either "r", "p", or "s"')
    }
}

console.log(outputWinner(playerWinCount, playerLoseCount, computerWinCount, computerLoseCount, tieCount));