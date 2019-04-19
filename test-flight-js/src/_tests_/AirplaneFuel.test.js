const Airplane = require('../Airplane.js');


describe('Airplane Activites With Fuel', () => {
  beforeEach(() => {
    airplane = new Airplane('Cesna', 10, 150, 100);
  });

  it('should not allow airplane to start if not enough fuel', () => {
    expect(airplane.start()).toEqual('Not enough fuel to start plane');
  });

  it('should not allow airplane to takeoff if not enough fuel', () => {
    airplane.start();
    expect(airplane.takeoff()).toEqual('airplane not started, please start');
  });

  it('should not allow airplane to land if not enough fuel', () => {
    airplane.start();
    airplane.takeoff();
    expect(airplane.land()).toEqual('airplane not started, please start');
  });
});
