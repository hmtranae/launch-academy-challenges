class Room {
  constructor(name, maxOccupancy) {
    this.name = name
    this.maxOccupancy = maxOccupancy
    this.reserved = false
  }

  isReserved() {
    return this.reserved
  }
}

module.exports = Room
