const Summary = require('../Summary');
const Conference = require('../Conference');
const Person = require('../Person');

const conference = new Conference('test', 10);
conference.register(new Person('test', 'test', 'test@example.com'));
conference.register(new Person('test', 'test', 'test1@example.com'));
conference.register(new Person('test', 'test', 'test2@example.com'));
conference.register(new Person('test', 'test', 'test3@example.com'));
conference.register(new Person('test', 'test', 'test4@example.com'));
conference.register(new Person('test', 'test', 'test5@example.com'));
conference.register(new Person('test', 'test', 'test6@example.com'));
conference.register(new Person('test', 'test', 'test7@example.com'));

const summary = new Summary(conference);

describe('Print Conference Summary', () => {
  it('should provide the conference name', () => {
    expect(summary.conference.name).toEqual(conference.name);
  });

  it('should provide number of registrants', () => {
    expect(summary.conference.attendees.length).toEqual(conference.attendees.length);
  });
});
