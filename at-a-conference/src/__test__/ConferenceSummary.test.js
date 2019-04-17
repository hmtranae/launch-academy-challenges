const Summary = require('../Summary');
const Conference = require('../Conference');

const conference = new Conference('test', 10);
const summary = new Summary(conference);

describe('Print Conference Summary', () => {
  it('should provide the conference name', () => {
    expect(summary.conference.name).toEqual(conference.name);
  });

  it('should provide number of registrants, and each of their first name and last name', () => {

  });

  it('should provide each registrants first and last name', () => {

  });
});
