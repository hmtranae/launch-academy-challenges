const boarders = [
  'Hieu',
  'Lilyane',
  'Sandy',
  'Clyde',
  'Amber',
];

const scores = [
  [
    90,
    83,
    68,
  ],
  [
    78,
  ],
  [
    84,
    96,
  ],
  [
    100,
    93,
    94,
    87,
  ],
  [
    69,
    72,
    73,
  ],
];

const indexOfBoarder = boarder => boarder.indexOf(boarder);

// Who scored the least?
const leastScore = (scores) => {
  let currentSmallestScore = 100;
  let indexOfSmallestScore;
  scores.forEach((scoreArray, index) => {
    if (Math.min(...scoreArray) < currentSmallestScore) {
      currentSmallestScore = Math.min(...scoreArray);
      indexOfSmallestScore = index;
    }
  });
  return [currentSmallestScore, indexOfSmallestScore];
};

console.log(leastScore(scores));

const personWithLeastScore = () => boarders[leastScore(scores)[1]];

console.log(personWithLeastScore());

// Who scored the most?


// Aggregate score?
