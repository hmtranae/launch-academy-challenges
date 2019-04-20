class SystemCheck {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.submissions = [];
    this.submitted = false;
  }

  addSubmission(submission) {
    this.submissions.push(submission);
  }

  averageGrade() {
    const sum = this.submissions.reduce((acc, curr) => acc + curr.grade, 0);
    return sum / this.submissions.length;
  }

  didStudentCompleteSystemCheck(student) {
    const didStudentFinish = this.submissions.find(submission => submission.student === student);

    return !!didStudentFinish;
  }
}


module.exports = SystemCheck;
