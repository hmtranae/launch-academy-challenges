const Conference = require('../Conference');
const Person = require('../Person');

let conference;
const name = 'GDG';
const maxNumberOfRegistrants = 100;

let person;
const firstName = 'Hieu';
const lastName = 'Tran';
const emailAddress = 'test@example.com';

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

describe('conference registration', () => {
  beforeEach(() => {
    person = new Person(firstName, lastName, emailAddress);
  });

  it('Once a conference is created, can call Register with new Person object as argument', () => {
    expect(conference.register).toBeDefined();
    expect(person).toBeInstanceOf(Person);
  });

  it('A Person instance must have a first name, last name, and email address', () => {
    expect(person.firstName).toBeDefined();
    expect(person.lastName).toBeDefined();
    expect(person.emailAddress).toBeDefined();
  });

  it('The register method returns true if I"ve successfully registered', () => {
    expect(conference.register(person)).toEqual(true);
  });

  it('Registering for a conference as person with email that\'s already registered, not added to list and register method returns false', () => {

  });
});
