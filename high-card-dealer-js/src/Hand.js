let Deck = require('./Deck')

class Hand {
  // your code here
  constructor(deck) {
    this.hand = deck.deal()
  }

  value() {
    let totalValue = 0
    this.hand.forEach(card => {
      totalValue += card.value()
    })
    return totalValue
  }
}

module.exports = Hand
