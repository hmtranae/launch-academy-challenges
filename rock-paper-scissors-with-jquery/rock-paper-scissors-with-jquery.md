You're ready to take our rock-paper-scissors game to the web!

## Getting Started

```no-highlight
et get rock-paper-scissors-with-jquery
cd rock-paper-scissors-with-jquery
open index.html
```

## What We're Building

A stylized "initial state" of the game has been created for you. Take a moment to study the HTML. We've also supplied you with a starting point for the JavaScript you will need to write in `js/main.js`.

![Rock Paper Scissors Image][rps-image]

[rps-image]: https://www.launch.academy/hosted/images/d9/98d710d31011e8a9eb69feb6d833d5/resized-rps.gif

## Core User Stories

### Making a Selection

```no-highlight
As a player
I want to desginate my selection
So that I can determine who won.
```

Acceptance Criteria:

- The icon I select turns green, and all other selections turn blue

We can use the class "active" to define which element turns green. You will have to write jQuery to respond to a click event, and that event should set the clicked element as active, and all other icons should not be active.

### Show Game Results

```no-highlight
As a player
I want to know who won
So that I can claim my victory
```

Acceptance Criteria:

- Upon clicking a selection, new content shows up telling me whether I won, lost, or if there was a tie
- The color of the text should be pink if I lost
- The color of the text should be green if I won
- The color of the text should be yellow if there was a tie
- The color of the border of the `game-results` section should match the color of the text

The markup has been provided for you. We've also provided you with some useful CSS. By setting either a 'player', 'computer', or 'tie' class on the basis of the game outcome, you can properly stylize the text.

### Confirm Player and Computer's Choice

```no-highlight
As a player
I want choices to be confirmed
So that I can verify the results are accurate
```

Acceptance Criteria:

- The icon under "Player chose" should reflect the selection the player made
- The icon under "Computer chose" should reflect the selection the computer made

Study the class names and markup used in the `your-play` section. You'll want to reflect that markup for both the Player choice and Computer choice.


## Noncore User Stories

### Get Some Help from Sheldon

```no-highlight
As a player that won
I want Sheldon to illustrate the win condition
So that I can better understand the rules
```

Acceptance Criteria:

- The relevant "Sheldon image" to be shown that reinforces the game result if I won.
- If I lost, the image should not be shown

We've supplied three images in the `img` directory. The correct image should be rendered in the results section based on how the game was won.