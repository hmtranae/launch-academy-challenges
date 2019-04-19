const Airplane = require('../Airplane.js');

describe('Make airplane do things', () => {
  beforeEach(() => {
    airplane = new Airplane('Cesna', 10, 150, 500);
  });

  it('should start if not running', () => {
    expect(airplane.start()).toEqual('airplane started');
  });

  it('should output already started if currently running', () => {
    airplane.start();
    expect(airplane.start()).toEqual('airplane already started');
  });

  it('should takeoff if engines are on', () => {
    airplane.start();
    expect(airplane.takeoff()).toEqual('airplane launched');
  });

  it('should not takeoff if engines are off', () => {
    expect(airplane.takeoff()).toEqual('airplane not started, please start');
  });

  it('should land if currently flying', () => {
    airplane.start();
    airplane.takeoff();
    expect(airplane.land()).toEqual('airplane landed');
  });

  it('should advise to start if trying to land while engines off', () => {
    expect(airplane.land()).toEqual('airplane not started, please start');
  });

  it('should print already on land if engines are on but not flying', () => {
    airplane.start();
    expect(airplane.land()).toEqual('airplane already on the ground');
  });
});
