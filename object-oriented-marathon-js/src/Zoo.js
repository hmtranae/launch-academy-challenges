const Cage = require('./Cage');

class Zoo {
  constructor(name) {
    this.name = name;
    this.cages = [];
    this.createCages();
  }

  createCages(numCages = 10) {
    for (let i = 0; i < numCages; i += 1) {
      this.cages.push(new Cage());
    }
  }
}
module.exports = Zoo;
