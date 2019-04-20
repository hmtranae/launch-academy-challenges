const Student = require('../Student');
const SystemCheck = require('../SystemCheck');
const SystemCheckSubmission = require('../SystemCheckSubmission');
const Cohort = require('../Cohort');
const Grade = require('../Grade');

describe('system check submission class for exceeds', () => {
  let student;
  let solution;
  let submission;

  beforeEach(() => {
    student = new Student('Josiah Bartlett', 'josiah.bartlett@gmail.com');
    submission = new SystemCheckSubmission('awesome solution', student);
  });

  describe('#assignGrade', () => {
    it('sets the grade for an submission', () => {
      const grade = Grade.meetsExpectations;
      expect(submission.assignGrade(grade)).toBe(grade);
    });
    it('returns an invalid grade message if the grade is invalid', () => {
      expect(submission.assignGrade(9001)).toBe('Invalid Grade Error!');
    });
  });
});
