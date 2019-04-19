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

  it('should be able to call Register with new Person instance once conference is created', () => {
    expect(conference.register).toBeDefined();
    expect(person).toBeInstanceOf(Person);
  });

  it('should be able to instantiate person with first and last name and email address', () => {
    expect(person.firstName).toBeDefined();
    expect(person.lastName).toBeDefined();
    expect(person.emailAddress).toBeDefined();
  });

  it('should return true from register method if successfully registered', () => {
    expect(conference.register(person)).toEqual(true);
  });

  it('should not register person with email that"s already registered and should return false', () => {
    const personDuplicate = new Person(firstName, lastName, emailAddress);
    conference.register(person);
    expect(conference.register(personDuplicate)).toEqual(false);
  });

  it('should not register person if conference has reached the max of registrants', () => {
    conference = new Conference(name, maxNumberOfRegistrants);
    conference.register(person);
    conference.register(new Person('test', 'test', '1@example.com'));
    conference.register(new Person('test', 'test', '2@example.com'));
    expect(conference.register(new Person('test', 'test', 'notgonnawork@example.com'))).toEqual(false);
    expect(conference.attendees.length).toEqual(maxNumberOfRegistrants);
  });
});
