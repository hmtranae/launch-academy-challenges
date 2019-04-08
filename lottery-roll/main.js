// get 2 numbers randomized
// log won if both even and equal
// log lost otherwise
// allow users to play n times and log won/lost cost

let numGames = prompt('How many times do you want to roll?')
let gamesWon = 0;
let gamesLost = 0;

while (numGames > 0) {
  const diceRollOne = Math.floor(((Math.random() * 6) + 1))
  const diceRollTwo = Math.floor(((Math.random() * 6) + 1))
  console.log(`You rolled a ${diceRollOne} and a ${diceRollTwo}`)

  if ((diceRollOne === diceRollTwo) && (diceRollOne & 2) === 0) {
    console.log('You won');
    gamesWon += 1;
  } else {
    console.log('You lost');
    gamesLost += 1;
  }
  numGames -= 1;
}

console.log(`You won ${gamesWon} game(s) and lost ${gamesLost} game(s)`)