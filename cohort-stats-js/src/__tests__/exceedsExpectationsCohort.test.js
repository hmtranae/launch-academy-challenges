const Student = require('../Student');
const SystemCheck = require('../SystemCheck');
const SystemCheckSubmission = require('../SystemCheckSubmission');
const Cohort = require('../Cohort');


describe('cohort class', () => {
  let firstDay;
  let lastDay;
  let cohort;
  let studentOne;
  let studentTwo;
  let studentThree;

  beforeEach(() => {
    firstDay = new Date('2021-04-01');
    lastDay = new Date('2021-08-02');
    cohort = new Cohort('Cohort 30', firstDay, lastDay);

    studentOne = new Student('Sam Seaborn', 'sam.seaborn@gmail.com');
    studentTwo = new Student('Josh Lyman', 'josh.lyman@gmail.com');
    studentThree = new Student('Toby Ziegler', 'toby.ziegler@gmail.com');

    cohort.enroll(studentOne);
    cohort.enroll(studentTwo);
    cohort.enroll(studentThree);
  });


  describe('#systemCheckCompleted', () => {
    it("returns 'true' if every student in the cohort has submitted a SC submission", () => {
      newDueDate = new Date('2021-01-13');
      systemCheck = new SystemCheck('Rock Paper Scissors JS', newDueDate);
      cohort.assign(systemCheck);

      const students = [studentOne, studentTwo, studentThree];
      students.forEach((student) => {
        const submission = new SystemCheckSubmission('awesome solution', student);
        systemCheck.addSubmission(submission);
      });

      expect(cohort.systemCheckCompleted(systemCheck)).toBe(true);
    });

    it("returns 'false' if just one student in the cohort has not submitted their system check submission", () => {
      newDueDate = new Date('2021-01-13');
      systemCheck = new SystemCheck('Rock Paper Scissors JS', newDueDate);
      cohort.assign(systemCheck);

      const submission = new SystemCheckSubmission('awesome solution', studentOne);
      systemCheck.addSubmission(submission);

      expect(cohort.systemCheckCompleted(systemCheck)).toBe(false);
    });
  });
});
