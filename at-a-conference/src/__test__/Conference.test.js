const Conference = require('../Conference');

let conference;
const name = 'GDG';
const maxNumberOfRegistrants = 3;

describe('a conference', () => {
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
