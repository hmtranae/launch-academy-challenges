const termString = require('./string');

// function makeJsonDictionary
// returns a dictionary key value pairs of term, definition
// args: string where each newline is a term definition pair separated by ': '

const makeJsonDictionary = (string) => {
  const stringArray = string.split('\n');

  const parentArray = stringArray.map(definition => definition.split(': '));

  const dictionary = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const definitionArray of parentArray) {
  // eslint-disable-next-line prefer-destructuring
    dictionary[definitionArray[0]] = definitionArray[1];
  }

  return dictionary;
};

const techDictionary = makeJsonDictionary(termString);
