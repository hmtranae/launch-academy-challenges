class Summary {
  constructor(conference) {
    this.conference = conference;
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
