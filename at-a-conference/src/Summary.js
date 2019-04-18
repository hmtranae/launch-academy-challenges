class Summary {
  constructor(conference) {
    this.conference = conference;
  }

  getAttendeesName() {
    return this.conference.attendees;
  }

  getSessionTitleAndFacilitator() {
    return this.conference.sessions.map(session => ({
      title: session.title,
      personFacilitator: session.personFacilitator,
    }));
  }

  isRegistrationOpen() {
    if (this.conference.attendees.length < this.conference.maxNumberOfRegistrants) {
      return true;
    }
    return false;
  }

  printConferenceDetails() {
    let message = `Conference Details!\nConference Name: ${this.conference.name}\nNumber of registrants: ${this.conference.attendees.length}\nAttendee Names:\n`;
    this.conference.attendees.forEach((attendees) => {
      message += `${attendees}\n`;
    });
    return message;
  }
}

module.exports = Summary;
