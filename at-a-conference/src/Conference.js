class Conference {
  constructor(name, maxNumberOfRegistrants) {
    this.name = name;
    this.maxNumberOfRegistrants = maxNumberOfRegistrants;
    this.attendees = [];
    this.sessions = [];
  }

  // eslint-disable-next-line class-methods-use-this
  register(person) {
    if (this.attendees.includes(person.emailAddress) || this.attendees.length === this.maxNumberOfRegistrants) {
      return false;
    }
    this.attendees.push([person.firstName, person.lastName].join(' '));
    return true;
  }

  addSession(session) {
    this.sessions.push(session);
  }
}

module.exports = Conference;
