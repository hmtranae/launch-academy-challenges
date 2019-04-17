class Conference {
  constructor(name, maxNumberOfRegistrants) {
    this.name = name;
    this.maxNumberOfRegistrants = maxNumberOfRegistrants;
    this.attendees = [];
    this.sessions = [];
  }
}

module.exports = Conference;
