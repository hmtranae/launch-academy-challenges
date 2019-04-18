const Cage = require('./Cage');

class Zoo {
  constructor(name) {
    this.name = name;
    this.cages = [];
    this.employees = [];
    this.createCages();
  }

  createCages(numCages = 10) {
    for (let i = 0; i < numCages; i += 1) {
      this.cages.push(new Cage());
    }
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  // eslint-disable-next-line consistent-return
  addAnimal(animal) {
    if (this.cages[this.cages.length - 1].animal) {
      return 'All of the cages are full!';
    }

    for (let i = 0; i < this.cages.length; i += 1) {
      if (this.cages[i].isEmpty()) {
        this.cages[i].animal = animal;
        break;
      }
    }
  }

  visit() {
    const message = [];
    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        message.push(cage.animal.speak());
      }
    });
    this.employees.forEach((employee) => {
      message.push(employee.greet());
    });

    return message.join('\n');
  }
}
module.exports = Zoo;
