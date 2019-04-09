// your code here
const greet = (name, language = 'English') => {
  const greetings = ['Hi', 'Yo', 'Hey', 'Howdy'];
  const randomGreeting = greetings[Math.floor((Math.random() * 4))];

  const upperCaseName = name.toUpperCase();

  switch (language.toLowerCase()) {
    case 'spanish':
      console.log(`Spanish: Hola ${upperCaseName}`);
      break;
    case 'italian':
      console.log(`Italian: Ciao ${upperCaseName}`);
      break;
    case 'irken':
      console.log(`Irken: DOOM de doom ${upperCaseName}`);
      break;
    case 'vietnamese':
      console.log(`Vietnamese: Xin chao ${upperCaseName}`);
      break;
    case 'chinese':
      console.log(`Chinese: Ni hao ${upperCaseName}`);
      break;
    default:
      console.log(`English: ${randomGreeting} ${upperCaseName}!`);
  }
};

greet('Hieu', 'vietnamese');
