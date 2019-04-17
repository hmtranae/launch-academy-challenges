const Summary = require('../Summary');
const Conference = require('../Conference');
const Person = require('../Person');

const conference = new Conference('Test Conference', 5);
conference.register(new Person('Hieu', 'Tran', 'test0@example.com'));
conference.register(new Person('Jane', 'Doe', 'test1@example.com'));
conference.register(new Person('John', 'Doe', 'test5@example.com'));
conference.register(new Person('Barry', 'Cho', 'test2@example.com'));
conference.register(new Person('Lang', 'Pham', 'test6@example.com'));

const summary = new Summary(conference);

describe('Print Conference Summary', () => {
  it('should provide the conference name', () => {
    expect(summary.conference.name).toEqual(conference.name);
  });

  it('should provide number of registrants', () => {
    expect(summary.conference.attendees.length).toEqual(conference.attendees.length);
  });

  it('should return a list of the attendees first and last name', () => {
    const expectedString = `Conference Details!\nConference Name: Test Conference\nNumber of registrants: 5\nAttendee Names:\nHieu Tran\nJane Doe\nJohn Doe\nBarry Cho\nLang Pham
`;
    expect(summary.printConferenceDetails()).toBe(expectedString);
  });
});
