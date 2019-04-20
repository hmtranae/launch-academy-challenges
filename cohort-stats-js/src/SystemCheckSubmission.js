class SystemCheckSubmission {
  constructor(solution, student) {
    this.solution = solution;
    this.student = student;
    this.grade;
  }

  assignGrade(grade) {
    if (![0, 1, 2, 3].includes(grade)) {
      return 'Invalid Grade Error!';
    }
    this.grade = grade;
    return this.grade;
  }
}

module.exports = SystemCheckSubmission;
