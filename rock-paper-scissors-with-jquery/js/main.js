const selected = {
  isChosen: false,
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

function computerPlay() {
  const selection = getRandomNumber(3);
  if (selection === 1) {
    return 'rock';
  } if (selection === 2) {
    return 'paper';
  }
  return 'scissors';
}

function resetGame() {
  $('#game-results').hide();
  $('#your-play a').removeClass('active');
  $('#animated-result').hide();
  $('#animated-result img').hide();
  selected.isChosen = false;
}
function onClickWeapon(event) {
  if (selected.isChosen === false) {
    $(event.target.parentElement).addClass('active');
    playerChoice = $(event.target.parentElement).attr('id');
    const computerChoice = computerPlay();
    const whoWon = getGameResult(playerChoice, computerChoice);
    $('#game-results').attr('class', whoWon);
    $('#game-results').attr('style', 'display: show');
    selected.isChosen = true;

    const resultString = $('#text-result');
    if (whoWon === 'tie') {
      resultString.text("It's a Tie!");
    } else if (whoWon === 'computer') {
      resultString.text('Computer wins!');
    } else {
      resultString.text('You win!');
    }

    resultString.attr('class', whoWon);

    $('#player-choice').attr('class', `fas fa-hand-${playerChoice} fa-stack-1x fa-inverse`);
    $('#computer-choice').attr('class', `fas fa-hand-${computerChoice} fa-stack-1x fa-inverse`);

    if (whoWon === 'player') {
      $('#animated-result').attr('style', 'display: show');
      if (playerChoice === 'paper' && computerChoice === 'rock') {
        $('#paper-rock-image').attr('style', 'display: show');
      } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        $('#rock-scissors-image').attr('style', 'display: show');
      } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        $('#scissors-paper-image').attr('style', 'display: show');
      }
    }
  }
}

function getGameResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } if (playerChoice === 'rock' && computerChoice === 'paper') {
    return 'computer';
  } if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'player';
  } if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'player';
  } if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'computer';
  } if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'computer';
  } if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'player';
  }
}

function handlePlay(e) {
  e.preventDefault();
}

$(() => {
  $('#your-play a').click(handlePlay);
  $('#play-again').click(resetGame);
  $('#your-play').click(onClickWeapon);
});
