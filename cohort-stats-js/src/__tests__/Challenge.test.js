const Challenge = require('../Challenge');

let challenge;

describe('Create a new challenge', () => {
  beforeEach(() => {
    challenge = new Challenge('test name', 'test body');
  });

  it('defines challenge', () => {
    expect(challenge).toBeInstanceOf(Challenge);
  });

  it('has initialized name', () => {
    expect(challenge.name).toBe('test name');
  });

  it('has initialized body', () => {
    expect(challenge.body).toBe('test body');
  });
});
