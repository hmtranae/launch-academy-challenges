const Snake = require('../Snake.js');

describe('A Snake', () => {
  let snake;

  beforeEach(() => {
    snake = new Snake('Sir Hisss');
  });

  it('has a name', () => {
    expect(snake.name).toEqual('Sir Hisss');
  });

  it("makes sure you haven't hardcoded the name", () => {
    newSnake = new Snake('Kaa');
    expect(newSnake.name).toEqual('Kaa');
  });

  describe('#speak', () => {
    it('says what snakes say', () => {
      expect(snake.speak()).toEqual('Sssssire, ssssire, they may be banditsssss');
    });
  });

  describe('#isColdBlooded', () => {
    it.only('is cold blooded', () => {
      expect(snake.isColdBlooded()).toEqual(true);
    });
  });
});
