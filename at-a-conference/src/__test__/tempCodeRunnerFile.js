const Summary = require('../Summary');
const Conference = require('../Conference');
const Person = require('../Person');
const Session = require('../Session');

const conference = new Conference('Test Conference', 5);
conference.register(new Person('Hieu', 'Tran', 'test0@example.com'));
conference.register(new Person('Jane', 'Doe', 'test1@example.com'));
conference.register(new Person('John', 'Doe', 'test5@example.com'));
conference.register(new Person('Barry', 'Cho', 'test2@example.com'));

conference.addSession(new Session('React', 'Hieu Tran', '12:00PM', '5:00PM'));
conference.addSession(new Session('jQuery', 'Jane Doe', '12:00PM', '5:00PM'));

const summary = new Summary(conference);

console.log(summary.printConferenceDetails());