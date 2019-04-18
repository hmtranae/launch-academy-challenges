const Employee = require('../Employee');

describe('An Employee', () => {
  let employee;

  beforeEach(() => {
    employee = new Employee('Derek', 'Zoolander');
  });

  it('has a first name', () => {
    expect(employee.firstName).toEqual('Derek');
  });

  it('has a last name', () => {
    expect(employee.lastName).toEqual('Zoolander');
  });

  it('has a default title', () => {
    expect(employee.title).toEqual('Zookeeper');
  });

  it('has allows a custom title title', () => {
    employee.title = 'Educator at the School for Ants';
    expect(employee.title).toEqual('Educator at the School for Ants');
  });

  describe('#fullTitle', () => {
    it("returns the employee's full name and title", () => {
      expect(employee.fullTitle()).toEqual('Derek Zoolander, Zookeeper');
    });
  });
  describe('#greet', () => {
    it.only("returns a string with the employee's named and a greeting", () => {
      expect(employee.greet()).toEqual('Derek Zoolander waved hello!');
    });
  });
});
