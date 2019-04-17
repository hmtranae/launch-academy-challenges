const Conference = require('../Conference');

describe('a conference', () => {
  let conference;
  const name = 'GDG';
  const maxNumberOfRegistrants = 100;

  beforeEach(() => {
    conference = new Conference(name, maxNumberOfRegistrants);
  });

  it('A conference has a name defined when it is created', () => {
    expect(conference.name).toBeDefined();
  });

  it('A conference has a maximum number of registrants defined when it is created', () => {
    expect(conference.maxNumberOfRegistrants).toBeDefined();
  });

  it('A conference starts with a blank list of attendees', () => {
    expect(conference.attendees.length).toBe(0);
  });

  it('A conference starts with a blank list of sessions', () => {
    expect(conference.sessions.length).toBe(0);
  });
});

describe('conference registration', () => {

});
