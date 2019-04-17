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

summary.printConferenceDetails();
