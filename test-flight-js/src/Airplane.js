class Airplane {
  constructor(type, wingLoading, horsepower, fuel) {
    this.type = type;
    this.wingLoading = wingLoading;
    this.horsepower = horsepower;
    this.fuel = fuel;
    this.isEngineActive = false;
    this.isFlying = false;
  }

  ifEnoughFuelForAction(fuelNeeded) {
    if ((this.fuel - fuelNeeded) >= 0) {
      return true;
    }
    return false;
  }

  start() {
    if (this.isEngineActive) {
      return 'airplane already started';
    }
    if (this.ifEnoughFuelForAction(110)) {
      this.isEngineActive = true;
      this.fuel -= 110;
      return 'airplane started';
    }
    return 'Not enough fuel to start plane';
  }

  takeoff() {
    if (this.isEngineActive && this.ifEnoughFuelForAction(80)) {
      this.isFlying = true;
      this.fuel -= 80;
      return 'airplane launched';
    }
    if (this.ifEnoughFuelForAction(80) === false) {
      return 'Not enough fuel to takeoff';
    }
    return 'airplane not started, please start';
  }

  land() {
    if (this.isFlying && this.ifEnoughFuelForAction(80)) {
      this.fuel -= 80;
      return 'airplane landed';
    } if (this.isEngineActive === false) {
      return 'airplane not started, please start';
    } if (this.isEngineActive && this.isFlying === false) {
      return 'airplane already on the ground';
    }
  }
}

module.exports = Airplane;
