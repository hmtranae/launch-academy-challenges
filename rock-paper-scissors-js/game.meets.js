// IMPORTANT!!!!
// PLEASE VISIT game.meets.js for meets expectation solution
// game.exceeds.js is for exceeds expectation

//  YOUR CODE GOES HERE

// Meets
// [x] A game consists of a single round.
// [x] Welcome to Rock, Paper, Scissors! should appear in the console.
// [x] The player is prompted to choose a selection by typing "r" (rock), "p" (paper), or "s" (scissors).
// [x] The computer opponent randomly chooses between rock, paper, and scissors.
// [x] Output player and computer player choices. Examples:
// [x] Player chose rock
// [x] Computer chose scissors
// [x] Output the result of the game before exiting. Examples:
// [x] Player wins!
// [x] Computer loses!
// [x] Tie!
// [x] If the player enters an invalid option, print an error message.
// [x] If both players choose the same option, it is a tie.

// Exceeds
// [x] All Meets Expectations Requirements have been met
// [] The game ends when the player or the computer wins the best out of three rounds played
// [] Ties do not count as a win

// [] Output the results of each round. Examples:
// [] Player chose rock.
// [] Computer chose rock.
// [] This round was a tie!

// [] Output the winner of all three rounds
// [] Computer wins the game!

// [] Output the result of the game totals before exiting. Examples:
// [] Player ties 1 wins 2 loses 0!
// [] Computer ties 1 wins 1 loses 1!

function changeWeaponFromSingleLetterToFullWord(letter) {
    if (letter === 'r') {
        return 'rock';
    } else if (letter === 'p') {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function checkValidWeapon(letter) {
    if ((letter === 'r') || (letter === 'p') || (letter === 's')) {
        return true;
    } else {
        return false;
    }
}

function randomWeaponForComputer(num) {
    if (num === 0) {
        num = 'r';
    } else if (num === 1) {
        num = 'p';
    } else {
        num = 's';
    }   
    return num; 
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

console.log('Rock, Paper, Scissors!');

let userWeapon = prompt('Please select your weapon of choice. "r" for rock, "p" for paper, or "s" for scissors.');
let computerWeapon = Math.floor(Math.random() * 3);

computerWeapon = randomWeaponForComputer(computerWeapon);

if (checkValidWeapon(userWeapon)) {
    userWeapon = changeWeaponFromSingleLetterToFullWord(userWeapon);
    computerWeapon = changeWeaponFromSingleLetterToFullWord(computerWeapon);

    console.log(`Player chose ${userWeapon}`);
    console.log(`Computer chose ${computerWeapon}`);

    if (userWeapon === computerWeapon) {
        console.log('Tie!')
    } else if (
        (userWeapon === 'scissors' && computerWeapon === 'paper') || 
        (userWeapon === 'paper' && computerWeapon === 'rock') || 
        (userWeapon === 'rock' && computerWeapon === 'scissors')) {
        console.log(`${capitalizeWord(userWeapon)} beats ${computerWeapon}, Player wins!`)
        console.log('Sorry computer, maybe randomize better next time.')
    } else {
        console.log(`${capitalizeWord(computerWeapon)} beats ${userWeapon}, Computer wins!`)
        console.log('Sorry Player, better luck next time.')
    }
} else {
    console.log('Please enter either "r", "p", or "s"')
}