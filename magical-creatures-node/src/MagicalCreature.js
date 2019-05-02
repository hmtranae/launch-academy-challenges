class MagicalCreature {
  constructor(name, magicalAbility, age) {
    this.name = name;
    this.magicalAbility = magicalAbility;
    this.age = age;
    this.isAncient();
  }

  isAncient() {
    if (this.age > 200 || this.age === null) {
      this.isAncient = true;
      return;
    }
    this.isAncient = false;
  }
}

module.exports = MagicalCreature;
