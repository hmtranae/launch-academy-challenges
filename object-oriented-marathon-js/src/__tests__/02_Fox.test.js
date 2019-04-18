const Fox = require('../Fox');

describe('A Fox', () => {
  let fox;
  let foxName;

  beforeEach(() => {
    fox = new Fox('Kit');
  });

  it('has a name', () => {
    expect(fox.name).toEqual('Kit');
  });

  it('says what foxes say', () => {
    expect(fox.speak()).toEqual('Ring-ding-ding-ding-dingeringeding!');
  });

  it("makes sure you haven't hardcoded the name", () => {
    newFox = new Fox('Robin Hood');
    expect(newFox.name).toEqual('Robin Hood');
  });
});
