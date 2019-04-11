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

// function numberOfTerms
// returns: the number of terms in the dictionary
// args: JSON-based dictionary

const numberOfTerms = dict => Object.keys(dict).length;

console.log(numberOfTerms(techDictionary));

// function getTerms
// returns: an array of all of the terms in the dictionary
// args: JSON-based dictionary

const getTerms = dict => Object.keys(dict);

console.log(getTerms(techDictionary));

// function getDefinitions
// returns: an array of all of the definitions in the dictionary
// args: JSON-based dictionary

const getDefinitions = dict => Object.values(dict);

console.log(getDefinitions(techDictionary));

// function termsStartingWith
// returns: an array of all terms starting with a certain character
// (2) args: desired character and the JSON-based dictionary

const termsStartingWith = (dict, charToLookup) => {
  const terms = getTerms(dict);
  return terms.filter(term => term[0] === charToLookup);
};

const termsBeginWithD = termsStartingWith(techDictionary, 'D');
console.log(termsBeginWithD);

// function findDefinitions
// (2) args: an array of terms and the JSON-based dictionary
// returns list of definitions. Output the definitions for words starting with "D".

const findDefinitions = (dict, terms) => {
  const definitions = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const term of terms) {
    definitions.push(dict[term]);
  }
  return definitions;
};

console.log(findDefinitions(techDictionary, termsBeginWithD));

// function inverseDictionary
// args: JSON-based dictionary.
// return: dictionary's inverse, where the definitions are properties and the terms are the values

const inverseDictionary = (dict) => {
  const reverseDict = {};
  Object.keys(dict).forEach((term) => {
    reverseDict[dict[term]] = term;
  });
  return reverseDict;
};

const inversedDictionary = inverseDictionary(techDictionary);
console.log(inversedDictionary);

// function randomDefinition
// args: an inverted dictionary
// return: a random definition chosen from the properties of the inverted dictionary.

const randomDefinition = (invertedDict) => {
  const definitions = getTerms(invertedDict);
  return definitions[Math.floor(Math.random() * definitions.length)];
};

console.log(randomDefinition(inversedDictionary));

// Use random definition function
// 1. prompts the user with the definition
// 2. asks them for the correlating term
// 3. if they enter the appropriate term, remove it from the inversedDictionary
// 4. prompt them with another random definition
// 5. if they enter the incorrect term, continue to prompt them until they supply the right term.

let isContinue = true;

// if inversedDictionary is not empty
while (Object.entries(inversedDictionary).length && isContinue) {
  const definition = randomDefinition(inversedDictionary);
  console.log(definition);

  // eslint-disable-next-line no-alert
  let termGuess = prompt(`The definiton is ${definition}. \nPlease enter the corresponding tech term for this definition.`);
  if (termGuess === 'exit' || termGuess === null) {
    isContinue = false;
    break;
  }

  while (inversedDictionary[definition].toLowerCase() !== termGuess.toLowerCase() && termGuess !== 'exit' && termGuess !== null) {
    // eslint-disable-next-line no-alert
    termGuess = prompt('Please try again. Enter in another guess for the corresponding tech term');
  }

  delete inversedDictionary[definition];
  console.log('Great job. You know your tech terms!');
}

if (Object.entries(inversedDictionary).length === 0) { console.log('Congratulations. You"ve nailed all your tech terms!'); }
