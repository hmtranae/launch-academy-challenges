const Conference = require('../Conference');
const Person = require('../Person');

let conference;
const name = 'GDG';
const maxNumberOfRegistrants = 3;

let person;
const firstName = 'Hieu';
const lastName = 'Tran';
const emailAddress = 'test@example.com';

describe('conference registration', () => {
  beforeEach(() => {
    conference = new Conference(name, maxNumberOfRegistrants);
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
    const personDuplicate = new Person(firstName, lastName, emailAddress);
    conference.register(person);
    expect(conference.register(personDuplicate)).toEqual(false);
  });

  it('Register for conference that"s reached the maximum of registrants, I"m not added to the list and the register method returns false', () => {
    conference = new Conference(name, maxNumberOfRegistrants);
    conference.register(person);
    conference.register(new Person('test', 'test', '1@example.com'));
    conference.register(new Person('test', 'test', '2@example.com'));
    expect(conference.register(new Person('test', 'test', 'notgonnawork@example.com'))).toEqual(false);
    expect(conference.attendees.length).toEqual(maxNumberOfRegistrants);
  });
});
