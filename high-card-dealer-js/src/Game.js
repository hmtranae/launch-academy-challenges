const Deck = require('./Deck.js')
const Card = require('./Card.js')
const Hand = require('./Hand')

// GAME START

// Your game logic here.
const printOutCards = hand => {
  let cardsMessage = ''
  hand.forEach((card, i, array) => {
    if (i !== array.length - 1) {
      cardsMessage += `${[card.rank, card.suit].join('')}, `
    } else {
      cardsMessage += `${[card.rank, card.suit].join('')}.`
    }
  })
  return cardsMessage
}

const printWhoWon = (playerOneScore, playerTwoScore) => {
    return playerOneScore > playerTwoScore ? 'Player 1 wins the game!' : 'Player 2 wins the game!'
}

console.log(`GAME START! \n`)

let deck = new Deck()
let handPlayerOne = new Hand(deck)
let handPlayerTwo = new Hand(deck)

console.log(`There are 52 cards in the deck. \n`)

console.log(`Player 1 was dealt ${printOutCards(handPlayerOne.hand)}`)
console.log(`Player 2 was dealt ${printOutCards(handPlayerTwo.hand)} \n`)

console.log(`Player 1's hand value: ${handPlayerOne.value()}`)
console.log(`Player 2's hand value: ${handPlayerTwo.value()} \n`)

console.log(`${printWhoWon()}`)