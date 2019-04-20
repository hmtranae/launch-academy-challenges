class Cohort {
  constructor(title, startDate, endDate) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.students = [];
    this.systemChecks = [];
  }

  enroll(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
    }
  }

  assign(systemCheck) {
    this.systemChecks.push(systemCheck);
  }

  roster() {
    let message = '';
    message += `${this.title}\n`;
    message += '--------------------\n';
    this.students.forEach((student) => {
      message += `${student.name} ${student.email}\n`;
    });
    return message;
  }

  systemCheckCompleted(systemCheck) {
    const numberOfSubmissions = systemCheck.submissions.length;
    return numberOfSubmissions === this.students.length;
  }
}

module.exports = Cohort;
