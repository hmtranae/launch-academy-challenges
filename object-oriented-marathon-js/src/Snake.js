class Snake {
  constructor(name) {
    this.name = name;
  }

  // eslint-disable-next-line class-methods-use-this
  speak() {
    // eslint-disable-next-line quotes
    return `Sssssire, ssssire, they may be banditsssss`;
  }

  // eslint-disable-next-line class-methods-use-this
  isColdBlooded() {
    return true;
  }
}

module.exports = Snake;
