let userPick = prompt('Choose: heads or tails');

let randomize = parseInt(Math.random().toFixed(0));

if ((randomize === 1 && userPick === 'heads') || randomize === 0 && userPick === 'tails') {
    console.log('You"ve won!')
} else {
    console.log('You"ve lost!')
}