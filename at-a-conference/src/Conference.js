class Conference {
  constructor(name, maxNumberOfRegistrants) {
    this.name = name;
    this.maxNumberOfRegistrants = maxNumberOfRegistrants;
    this.attendees = []; // array of Person instances
    this.sessions = []; // array of Session instances
  }

  register(person) {
    let shouldRegister = true;
    this.attendees.forEach((attendee) => {
      if (attendee.emailAddress === person.emailAddress
        || this.attendees.length === this.maxNumberOfRegistrants) {
        shouldRegister = false;
      }
    });

    if (shouldRegister === false) {
      return false;
    }
    this.attendees.push(person);
    return true;
  }

  addSession(session) {
    // should return false when trying to add a session that overlaps with already present one
    let shouldAddSession = false;
    this.attendees.forEach((attendee) => { // each attendee is a Person instance
      if ((`${attendee.firstName} ${attendee.lastName}`) === session.personFacilitator) {
        this.sessions.push(session);
        shouldAddSession = true;
      }
    });
    return shouldAddSession;
  }
}

module.exports = Conference;
