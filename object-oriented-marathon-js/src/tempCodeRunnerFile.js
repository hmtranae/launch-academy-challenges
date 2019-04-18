class Employee {
  constructor(firstName, lastName, title = 'Zookeeper') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }

  fullTitle() {
    return `${this.firstName} ${this.lastName}, ${this.title}`;
  }

  greet() {
    return `${this.firstName} ${this.lastName} waved hello!`;
  }
}

const employee = new Employee('Hieu', 'Tran', 'SWE');

console.log(employee);