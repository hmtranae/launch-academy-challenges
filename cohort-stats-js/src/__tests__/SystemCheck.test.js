const SystemCheck = require('../SystemCheck');
const Student = require('../Student');
const SystemCheckSubmission = require('../SystemCheckSubmission');

describe('system check class', () => {
  let newDueDate;
  let systemCheck;

  beforeEach(() => {
    newDueDate = new Date('2021-01-13');
    systemCheck = new SystemCheck('Rock Paper Scissors JS', newDueDate);
  });

  it('defines system check', () => {
    expect(systemCheck).toBeInstanceOf(SystemCheck);
  });


  it('has an initialized name', () => {
    expect(systemCheck.name).toBe('Rock Paper Scissors JS');
  });

  it('has an initialized due date', () => {
    expect(systemCheck.dueDate).toBe(newDueDate);
  });

  it('has an initialized empty submissions array', () => {
    expect(systemCheck.submissions).toBeInstanceOf(Array);
    expect(systemCheck.submissions).toHaveLength(0);
  });

  describe('#addSubmission', () => {
    it('takes in a Submission object and stores it', () => {
      const student = new Student('Donna Moss', 'donna.moss@gmail.com');
      const solution = 'const fireFlyMeetsSubmission = () => { return "Every problem is an opportunity in disguise"}';
      const submission = new SystemCheckSubmission(solution, student);

      systemCheck.addSubmission(submission);
      expect(systemCheck.submissions).toContain(submission);
    });
  });
});
