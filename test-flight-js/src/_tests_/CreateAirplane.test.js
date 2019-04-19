const Airplane = require('../Airplane.js');

const airplane = new Airplane('Cesna', 10, 150);

describe('Create an Airplane', () => {
  it('should have a type property', () => {
    expect(airplane.type).toBeDefined();
  });

  it('should have a wing loading', () => {
    expect(airplane.wingLoading).toBeDefined();
  });

  it('should have a horsepower rating', () => {
    expect(airplane.horsepower).toBeDefined();
  });
});
