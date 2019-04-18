const Cage = require('../Cage');
const Snake = require('../Snake');

describe('A Cage', () => {
  let cage;

  beforeEach(() => {
    cage = new Cage();
  });

  it('should be created with no animal inside', () => {
    expect(cage.animal).toEqual(null);
  });

  describe('#isEmpty', () => {
    it('returns true is the cage is empty', () => {
      expect(cage.isEmpty()).toEqual(true);
    });

    it('returns false if the cage is filled with an animal', () => {
      const snake = new Snake('Sir Hiss');
      cage.animal = snake;

      expect(cage.isEmpty()).toEqual(false);
    });
  });
});
