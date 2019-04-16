class Card {
  // Your code here
  // Functions you may need:
  // - constructor
  // - function that assigns a card its "value"
  // - any other functions you deem necessary
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  value() {
    if (this.rank === 'J') {
      return 11
    } else if (this.rank === 'Q') {
      return 12
    } else if (this.rank === 'K') {
      return 13
    } else if (this.rank === 'A') {
      return 14
    } else {
      return this.rank
    }
  }
}

module.exports = Card
