// YOUR CODE HERE

// You've decided it's time to recreate an old classic game. Build an implementation of "Guess The Number" using the alert and prompt functions of JavaScript.

// Your program should do the following:

// Generate a random number between 1 and 10
// Get the user's name
// Ask the user to enter a number
// If the number equals the random number let the user know that they've won, other wise let them know that they lost

let randomNumber = Math.floor((Math.random() * 10) + 1);
let name = prompt('What is your name?');
let guess = prompt('Guess my number');

if (randomNumber === guess) {
    console.log(`${name}, you have guessed correctly. Congratulations!`)
} else {
    console.log(`${name}, you lost. Better luck next time!`)
}