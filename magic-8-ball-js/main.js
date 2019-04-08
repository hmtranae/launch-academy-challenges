const responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

// your code, here
// Correct number of responses have been stored by printing the number to the console (`20`)
console.log(`The length of responses array is ${responses.length}`);

// Ask the user what their question is, and store it as a variable called `question`
const question = prompt('What is your question?');

// Output a random response to the user's question
const randomIndex = length => Math.floor((Math.random() * length));
console.log(responses[randomIndex(responses.length)]);

// Output the number of responses that include the word "yes"
const numAffirm = responses.filter(response => response.includes('yes')).length;

console.log(`Number of responses that include "yes" is ${numAffirm}`);

// Output the number of responses that include the words "no" or "not"
const numNegative = responses.filter(response => (response.includes('no') || response.includes('not'))).length;

console.log(`Number of responses that include "no" or "not" is ${numNegative}`);

// Output the alphabetized list of responses
let sortedResponses = responses.sort((a, b) => ((a < b) ? -1 : 1));

console.log('The responses sorted alphabetically');
console.log(sortedResponses);

// Output the first and last responses from the alphabetized list
console.log(`The first response is ${sortedResponses[0]}.`);
console.log(`The last response is ${sortedResponses[sortedResponses.length - 1]}`);

// Delete two of the negative responses
let counter = 0;
while (counter < 2) {
  const negativeResponse = sortedResponses.find(ele => (ele.includes('no') || ele.includes('not')));
  sortedResponses.splice(sortedResponses.indexOf(negativeResponse), 1);
  counter += 1;
}

console.log('');
console.log('The responses array after the deletion of 2 negative responses');
console.log(sortedResponses);

// Reassign 'Ask again later' to the beginning of the array
// const temp = sortedResponses[1];
// sortedResponses[1] = sortedResponses[0];
// sortedResponses[0] = temp;
[sortedResponses[0], sortedResponses[1]] = [sortedResponses[1], sortedResponses[0]];
console.log('');
console.log('The responses array after reassigning "Ask again later" to the beginning of the array');
console.log(sortedResponses);

// Add 1 response of your choosing to the current list
sortedResponses.push('That"s absolutely correct!');

// Concat an **array** of 3 additional responses to the current list
sortedResponses = sortedResponses.concat(['Don"t quit', 'Maybe try again tomorrow', 'Nothing like the present']);

// Printing the number of responses to the console (`22`)
console.log(`The number of responses is ${sortedResponses.length}`);
