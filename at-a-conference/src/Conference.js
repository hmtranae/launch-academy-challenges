class Conference {
  constructor(name, maxNumberOfRegistrants) {
    this.name = name;
    this.maxNumberOfRegistrants = maxNumberOfRegistrants;
    this.attendees = [];
    this.sessions = [];
  }

  // eslint-disable-next-line class-methods-use-this
  register(person) {
    if (this.attendees.includes(person.emailAddress)) {
      return false;
    }
    this.attendees.push(person.emailAddress);
    return true;
  }
}

module.exports = Conference;
