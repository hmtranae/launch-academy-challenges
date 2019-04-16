// your code, here

const michael = {
  firstName: 'Michael',
  lastName: 'Scott',
  homeTown: 'Scranton',
  occupation: 'Regional Manager',
  catchPhrase: 'That"s what she said',
  employees: ['Dwight', 'Jim', 'Pam', 'Ryan', 'Andy', 'Stanley', 'Meredith', 'Angela', 'Oscar', 'Phyllis', 'Kelly', 'Toby', 'Creed'],
  name() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(michael);
console.log(michael.name());

michael.employees.forEach(employee => {
  console.log(employee);
})
