// YOUR CODE HERE

// You've decided it's time to recreate an old classic game. Build an implementation of "Guess The Number" using the alert and prompt functions of JavaScript.

// Your program should do the following:

// Generate a random number between 1 and 10
// Get the user's name
// Ask the user to enter a number
// If the number equals the random number let the user know that they've won, other wise let them know that they lost

const randomNumber = Math.floor((Math.random() * 10) + 1);
const name = prompt('What is your name?');
let guess = '';

// if (typeof guess !== 'number' || guess < 1 || guess > 10) {
//     console.log('Please enter a correct input')
// } else if (randomNumber === guess) {
//     console.log(`${name}, your guess is ${guess}. You have guessed correctly. Congratulations!`)
// } else {
//     console.log(`The correct guess would have been ${randomNumber}`)
//     console.log(`${name}, you lost. Better luck next time!`)
// }


while (typeof guess !== 'string' || guess < 1 || guess > 10) {
  guess = prompt('Guess a number between 1 and 10')
  console.log('Please enter a correct input')
}

if (randomNumber === guess) {
  console.log(`${name}, your guess is ${guess}. You have guessed correctly. Congratulations!`)
} else {
  console.log(`The correct guess would have been ${randomNumber}`)
  console.log(`${name}, you lost. Better luck next time!`)
}