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

console.log(`GAME START! \n`)

let deck = new Deck()
let handPlayerOne = new Hand(deck).hand
let handPlayerTwo = new Hand(deck).hand

console.log(`There are 52 cards in the deck. \n`)

console.log(`Player 1 was dealt ${printOutCards(handPlayerOne)}`)
