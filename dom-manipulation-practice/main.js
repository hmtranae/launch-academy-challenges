// Your code goes here!
const todos = ['wake up', 'eat breakfast', 'review homework', 'gain knowledge'];

const element = document.getElementById('todo-list');

todos.forEach(((todo) => {
  // const listElement = document.createElement('li');
  // const listText = document.createTextNode(todo);
  // listElement.appendChild(listText);
  // element.appendChild(listElement);

  element.innerHTML += `<li>${todo}</li>`;
}));
