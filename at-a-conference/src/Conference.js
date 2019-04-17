class Conference {
  constructor(name, maxNumberOfRegistrants) {
    this.name = name;
    this.maxNumberOfRegistrants = maxNumberOfRegistrants;
    this.attendees = [];
    this.sessions = [];
  }

  // eslint-disable-next-line class-methods-use-this
  register(person) {
    return true;
  }
}

module.exports = Conference;
