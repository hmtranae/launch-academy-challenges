const addressBook = {
  'Mark Zuckerberg': 'markymark@example.com',
  'Grace Hopper': 'foundABug@example.com',
  'Alan Turing': 'alanTheMachine@example.com',
  'Sister Mary Kenneth Keller': 'theOGDoctor@example.com',
  'Ada Lovelace': 'kindaCalledThisWholeComputerThing@example.com',
  'Bill Gates': 'noBlueScreen@example.com',
};

let isContinue = false;

while (!isContinue) {
  let toPrint = false;
  const name = prompt('What name would you like to look up in the address book?');
  // escape while loop
  if (name === null || name === 'exit') {
    isContinue = true;
  } else {
    // deals with case insensitive responses
    let formatName = name
      .toLowerCase()
      .split(' ')
      .map(part => part[0].toUpperCase() + part.slice(1))
      .join(' ');

    // eslint-disable-next-line no-restricted-syntax
    for (const address in addressBook) {
      if (address.split(' ')[0] === formatName) {
        toPrint = true;
        formatName = address;
      }
    }

    if (addressBook[formatName] !== undefined) {
      toPrint = true;
    }

    // if not in address book
    if (addressBook[formatName] === undefined && toPrint === false) {
      console.log('Name was not found');
      console.log('If you would like to add this name to the address book, please enter "add". \nElse, please press enter.');
      const ifNameNotPresent = prompt('Name not found. \nType "add" to add to address book or press enter to continue');

      // add to address book
      if (ifNameNotPresent === 'add') {
        const addEmailAddress = prompt('What is their email address');
        addressBook[formatName] = addEmailAddress;
      } else if (ifNameNotPresent === null) { // pressed cancel
        isContinue = true;
      }
      // if in address book
    } else {
      console.log(addressBook[formatName]);
    }
  }
}

// Make program so don't have to type entire name
