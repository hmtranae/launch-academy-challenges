// your code, here

const michael = {
  firstName: 'Michael',
  lastName: 'Scott',
  homeTown: 'Scranton',
  occupation: 'Regional Manager',
  catchPhrase: 'That"s what she said',
  name() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(michael);
console.log(michael.name());
