class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  whatIsThis() {
    console.log(this);
  }
}

const jonSnow = new Person('Jon', 'Snow');

console.log(jonSnow);
