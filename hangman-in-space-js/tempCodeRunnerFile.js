// YOUR CODE HERE
// printPuzzle('perimeter')
// => _ _ _ _ _ _ _ _ _

// printPuzzle('triangle', [t, s, g])
// => t _ _ _ _ g _ _

const printPuzzle = (word, guessArray = []) => {
  const wordLength = word.length;
  const guessArrayLength = guessArray.length;

  if (guessArrayLength) {
    const message = word.split('').map((letter) => {
      if (guessArray.includes(letter)) {
        return `${letter} `;
      }
      return '_ ';
    });
    return message.join('');
  }
  return '_ '.repeat(wordLength);
};

console.log(printPuzzle('perimeter', ['e']));
console.log(printPuzzle('triangle', ['t', 's', 'g']));
