const Summary = require('../Summary');
const Conference = require('../Conference');
const Person = require('../Person');
const Session = require('../Session');

const conference = new Conference('Test Conference', 5);
conference.register(new Person('Hieu', 'Tran', 'test0@example.com'));
conference.register(new Person('Jane', 'Doe', 'test1@example.com'));
conference.register(new Person('John', 'Doe', 'test5@example.com'));
conference.register(new Person('Barry', 'Cho', 'test2@example.com'));

conference.addSession(new Session('React', 'Hieu Tran'));
conference.addSession(new Session('jQuery', 'Lilyane Tran'));

const summary = new Summary(conference);

describe('Print Conference Summary', () => {
  it('should provide the conference name', () => {
    expect(summary.conference.name).toEqual(conference.name);
  });

  it('should provide number of registrants', () => {
    expect(summary.conference.attendees.length).toEqual(conference.attendees.length);
  });

  it('should return a list of the attendees first and last name', () => {
    expect(summary.getAttendeesName()).toEqual(conference.attendees);
  });

  it('should return number of sessions', () => {
    expect(summary.conference.sessions.length).toEqual(conference.sessions.length);
  });

  it('should return the titles of each session', () => {
    expect(summary.conference.sessions).toEqual(conference.sessions);
  });

  it('should return the facilitators"s name of each session', () => {
    expect(summary.getSessionTitleAndFacilitator()).toEqual(conference.sessions);
  });

  it('should return if registration is still open', () => {
    expect(summary.isRegistrationOpen()).toEqual(true);
    conference.register(new Person('Lang', 'Pham', 'test6@example.com'));
    expect(summary.isRegistrationOpen()).toEqual(false);
  });
});
