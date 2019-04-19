class Summary {
  constructor(conference) {
    this.conference = conference;
  }

  getAttendeesName() {
    return this.conference.attendees;
  }

  getSessionTitleAndFacilitator() {
    return this.conference.sessions;
  }

  isRegistrationOpen() {
    if (this.conference.attendees.length < this.conference.maxNumberOfRegistrants) {
      return true;
    }
    return false;
  }

  sortSessionsByTime() {

  }

  printConferenceDetails() {
    let message = `Conference Details!\nConference Name: ${this.conference.name}\nNumber of registrants: ${this.conference.attendees.length}\nAttendee Names:\n`;
    this.conference.attendees.forEach((attendees) => {
      message += `${attendees.firstName} ${attendees.lastName}\n`;
    });
    message += `Number of sessions: ${this.conference.sessions.length}\n`;
    this.conference.sessions.forEach((session) => {
      message += `${session.title}: ${session.personFacilitator} starting at ${session.startTime} and ending at ${session.endTime}\n`;
    });
    this.isRegistrationOpen() ? (message += 'Registration is open!') : (message += 'Registration is closed!');
    return message;
  }
}

module.exports = Summary;
