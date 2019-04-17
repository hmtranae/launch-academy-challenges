class Summary {
  constructor(conference) {
    this.conference = conference;
  }

  printConferenceDetails() {
    console.log('Conference Details! \n');
    console.log(`Conference Name: ${this.conference.name} \n`);
    console.log(`Number of registrants: ${this.conference.attendees.length} \n`);
    console.log('Attendee Names: \n');
    this.conference.attendees.forEach((attendees) => {
      console.log(attendees);
    });
  }
}

module.exports = Summary;
