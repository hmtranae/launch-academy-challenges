class Cage {
  constructor(animal = null) {
    this.animal = animal;
  }

  isEmpty() {
    if (this.animal === null) {
      return true;
    }
    
    return false
    
  }
}


module.exports = Cage;
