const Conference = require('../Conference');
const Session = require('../Session');

const conference = new Conference('test', 3);
const session = new Session();

describe('Create a new conference session', () => {
  it('should be able to call an addSession method on conference', () => {
    expect(conference.addSession).toBeDefined();
  });

  it('should take as its argument a new Session object for the addSession method of the Conference class', () => {
    expect(session).toBeInstanceOf(Session);
  });

  it('should add the session to the list of the conference"s sessions');
});
