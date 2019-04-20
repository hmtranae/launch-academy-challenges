const Student = require('../Student');
const SystemCheck = require('../SystemCheck');
const SystemCheckSubmission = require('../SystemCheckSubmission');
const Cohort = require('../Cohort');
const Grade = require('../Grade');


describe('system check class for exceeds', () => {
  let charlie;
  let josiah;
  let zoey;
  let newDueDate;
  let student;
  let systemCheck;

  beforeEach(() => {
    charlie = new Student('Charlie Young', 'charlie.young@gmail.com');
    josiah = new Student('Josiah Bartlett', 'josiah.bartlett@gmail.com');
    zoey = new Student('Zoey Bartlett', 'zoey.bartlett@gmail.com');

    newDueDate = new Date('2021-01-13');
    systemCheck = new SystemCheck('Rock Paper Scissors JS', newDueDate);
  });

  it('has an initialized name', () => {
    expect(systemCheck.name).toBe('Rock Paper Scissors JS');
  });

  describe('#averageGrade', () => {
    it('returns the average score for all submissions', () => {
      const submissionOne = new SystemCheckSubmission('cool submission on functions', zoey);
      systemCheck.addSubmission(submissionOne);
      submissionOne.assignGrade(Grade.meetsExpectations);

      const submissionTwo = new SystemCheckSubmission('even better submission on functions', charlie);
      systemCheck.addSubmission(submissionTwo);
      submissionTwo.assignGrade(Grade.exceedsExpectations);

      const submissionThree = new SystemCheckSubmission('submission with lots of errors', josiah);
      systemCheck.addSubmission(submissionThree);
      submissionThree.assignGrade(Grade.doesNotMeetExpectations);

      let sum = Grade.meetsExpectations;
      sum += Grade.exceedsExpectations;
      sum += Grade.doesNotMeetExpectations;
      const average = sum / 3.0;

      expect(systemCheck.averageGrade()).toBe(average);
    });
  });

  describe('#didStudentCompleteSystemCheck', () => {
    it("returns 'true' if a submission exists for that student", () => {
      const submissionOne = new SystemCheckSubmission('cool submission on functions', zoey);
      systemCheck.addSubmission(submissionOne);

      const submissionTwo = new SystemCheckSubmission('even better submission on functions', charlie);
      systemCheck.addSubmission(submissionTwo);

      expect(systemCheck.didStudentCompleteSystemCheck(charlie)).toBe(true);
    });

    it("returns 'false' if submission does not exist for that student", () => {
      const randomDate = new Date('2074-02-11');
      randomSystemCheck = new SystemCheck('Python OOP', randomDate);

      expect(randomSystemCheck.didStudentCompleteSystemCheck()).toBe(false);
    });
  });
});
