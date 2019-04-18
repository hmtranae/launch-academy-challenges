const Gorilla = require('../Gorilla');

describe('A Gorilla', () => {
  let gorilla;
  let gorillaName;

  beforeEach(() => {
    gorillaName = 'Bob';
    gorilla = new Gorilla(gorillaName);
  });

  it('has a name', () => {
    expect(gorilla.name).toEqual(gorillaName);
  });

  it('speaks its tagline', () => {
    expect(gorilla.speak()).toEqual('Bob got a bad feeling about this...');
  });

  it("makes sure you didn't hardcode the gorilla's name", () => {
    const koko = new Gorilla('Koko');
    expect(koko.speak()).toEqual('Koko got a bad feeling about this...');
  });
});
