const Conference = require('../Conference');
const Session = require('../Session');
const Person = require('../Person');

const conference = new Conference('test', 3);
const person = new Person('Hieu', 'Tran', 'test@example.com');
conference.register(person);
const session = new Session('test session', person, '11:00AM', '3:00PM');

describe('Create a new conference session', () => {
  it('should be able to call an addSession method on conference', () => {
    expect(conference.addSession).toBeDefined();
  });

  it('should take as its argument a new Session object for the addSession method of the Conference class', () => {
    expect(session).toBeInstanceOf(Session);
  });

  it('should add the session to the list of the conference"s sessions', () => {
    conference.addSession(session);
    expect(conference.sessions.length).toBe(1);
  });

  it('session instances should be created with a title', () => {
    expect(session.title).toBeDefined();
  });

  it('session instances should have a Person instance who will serve as the faciliator', () => {
    expect(session.personFacilitator).toBeDefined();
  });

  it('should not allow people not on the registrants list to addSession, return false', () => {
    const badSession = new Session('test session not registered', new Person('Jonh', 'Doe', 'abc@example.com'));
    expect(conference.addSession(badSession)).toBe(false);
  });

  it('should allow people on the registrants list to addSession, return true', () => {
    expect(conference.addSession(session)).toBe(true);
  });

  it('should initialize session with start time', () => {
    expect(session.startTime).toBeDefined();
  });

  it('should initialize session with end time', () => {
    expect(session.endTime).toBeDefined();
  });
});
